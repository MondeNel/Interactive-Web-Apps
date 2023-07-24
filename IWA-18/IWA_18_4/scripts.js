import { html, createOrderHtml } from "./view.js"
import { updateDraggingHtml } from "./view.js";
import { TABLES } from './data.js';
import { updateDragging, createOrderData, state } from './data.js';


/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDraggingHtml({ over: column })
}


const handleDragStart = (event) => {
    const orderId = event.target.dataset.id;
    if (!orderId) return;

    // Set the dragged order's ID and update the dragging state
    event.dataTransfer.setData('text/plain', orderId);
    updateDragging({ source: orderId });

    // Add a CSS class to the dragged element for styling (e.g., opacity change)
    event.target.classList.add('dragging');
}

const handleDragEnd = (event) => { }

const handleHelpToggle = (event) => {
    const helpOverlay = document.querySelector('[data-help-overlay]');
    if (helpOverlay.open) {
        helpOverlay.close();
    } else {
        helpOverlay.showModal();
    }
};

const handleAddToggle = (event) => {
    const addOverlay = document.querySelector('[data-add-overlay]');
    if (addOverlay.open) {
        addOverlay.close();
    } else {
        addOverlay.showModal();
    }
};


const handleAddSubmit = (event) => {
    event.preventDefault();
    const addForm = document.getElementById('add-form');
    const titleInput = document.querySelector('[data-add-title]');
    const tableSelect = document.querySelector('[data-add-table]');

    if (!titleInput.value || !tableSelect.value) {
        alert('Please fill in all fields.');
        return;
    }

    const orderData = {
        title: titleInput.value,
        table: tableSelect.value,
        column: 'ordered', // Set the initial column to 'ordered' when adding a new order.
    };

    const newOrder = createOrderData(orderData);
    state.orders[newOrder.id] = newOrder;
    addToColumn('ordered', newOrder);

    addForm.reset();
    document.querySelector('[data-add-overlay]').close();
};


const handleEditToggle = (event) => {
    const targetOrder = event.target.closest('.order');
    if (!targetOrder) return;

    const orderId = targetOrder.dataset.id;
    const order = state.orders[orderId];

    if (!order) return;
    showEditOrderDialog(order);
}

const handleEditSubmit = (event) => {
    event.preventDefault();
    const editForm = document.getElementById('edit-form');
    const orderIdInput = document.querySelector('[data-edit-id]');
    const titleInput = document.querySelector('[data-edit-title]');
    const tableSelect = document.querySelector('[data-edit-table]');
    const columnSelect = document.querySelector('[data-edit-column]');

    const orderId = orderIdInput.value;
    const order = state.orders[orderId];

    if (!order) return;

    if (!titleInput.value || !tableSelect.value) {
        alert('Please fill in all fields.');
        return;
    }

    order.title = titleInput.value;
    order.table = tableSelect.value;
    order.column = columnSelect.value;

    const column = order.column;
    addToColumn(column, order);
    deleteFromColumn(column === 'ordered' ? 'preparing' : 'ordered', orderId);

    editForm.reset();
    document.querySelector('[data-edit-overlay]').close();
}

const handleDelete = (event) => {
    const orderIdInput = document.querySelector('[data-edit-id]');
    const orderId = orderIdInput.value;
    const order = state.orders[orderId];

    if (!order) return;

    const column = order.column;
    deleteFromColumn(column, orderId);
    delete state.orders[orderId];

    document.querySelector('[data-edit-overlay]').close();
}

const showEditOrderDialog = (order) => {
    const editForm = document.getElementById('edit-form');
    const orderIdInput = document.querySelector('[data-edit-id]');
    const titleInput = document.querySelector('[data-edit-title]');
    const tableSelect = document.querySelector('[data-edit-table]');
    const columnSelect = document.querySelector('[data-edit-column]');

    orderIdInput.value = order.id;
    titleInput.value = order.title;
    tableSelect.value = order.table;
    columnSelect.value = order.column;

    document.querySelector('[data-edit-overlay]').showModal();
};

const addToColumn = (columnName, order) => {
    const columnContent = document.querySelector(`[data-column="${columnName}"]`);
    const orderElement = createOrderHtml(order);
    columnContent.appendChild(orderElement);
};

const deleteFromColumn = (columnName, orderId) => {
    const columnContent = document.querySelector(`[data-column="${columnName}"]`);
    const orderElement = columnContent.querySelector(`[data-id="${orderId}"]`);
    if (orderElement) {
        orderElement.remove();
    }
};


const initializeApp = () => {

    const tableSelect = document.querySelector('[data-add-table]');
    for (const table of TABLES) {
        const option = document.createElement('option');
        option.value = table;
        option.innerText = table;
        tableSelect.appendChild(option);
    }

    for (const htmlColumn of Object.values(html.columns)) {
        htmlColumn.addEventListener('dragstart', handleDragStart);
        htmlColumn.addEventListener('dragend', handleDragEnd);
        htmlColumn.addEventListener('dragover', handleDragOver);
    }

    for (const htmlArea of Object.values(html.area)) {
        htmlArea.addEventListener('dragover', handleDragOver);
    }

    // Add event listeners to buttons and forms
    html.add.cancel.addEventListener('click', handleAddToggle);
    html.other.add.addEventListener('click', handleAddToggle);
    html.add.form.addEventListener('submit', handleAddSubmit);

    html.other.grid.addEventListener('click', handleEditToggle);
    html.edit.cancel.addEventListener('click', handleEditToggle);
    html.edit.form.addEventListener('submit', handleEditSubmit);
    html.edit.delete.addEventListener('click', handleDelete);

    html.help.cancel.addEventListener('click', handleHelpToggle);
    html.other.help.addEventListener('click', handleHelpToggle);


};
document.addEventListener('DOMContentLoaded', initializeApp);
