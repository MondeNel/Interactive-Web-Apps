import { html, createOrderHtml } from "./view.js"
import { updateDraggingHtml, moveToColumn } from "./view.js";
import { TABLES, COLUMNS, state, updateDragging, createOrderData } from './data.js';


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

/* -------------------------- handleDragStart ------------------------ */
const handleDragStart = (event) => {
    const orderId = event.target.dataset.id;
    if (!orderId) return;

    // Get the current column from the data-area attribute
    const currentColumn = event.target.dataset.column;

    // Set the dragged order's ID and current column in the data transfer
    event.dataTransfer.setData('text/plain', orderId);
    event.dataTransfer.setData('text/x-column', currentColumn);

    // Add a CSS class to the dragged element for styling (e.g., opacity change)
    event.target.classList.add('dragging');
};

/* -------------------------- handleDragOver ------------------------ */
const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';

    // Get the target column from the data transfer
    const targetColumn = event.dataTransfer.getData('text/x-column');

    // Find the target column element based on the event target and data-area attribute
    const path = event.path || event.composedPath();
    let column = null;

    for (const element of path) {
        const dataset = element.dataset; // Get the dataset object from the element
        if (dataset) {
            const { area, column: col } = dataset;
            if (area && col) {
                column = col;
                break;
            }
        }
    }

    if (!column) return;
    if (column !== targetColumn) {
        // If the target column is different, update the dragged order's column in the data transfer
        event.dataTransfer.setData('text/x-column', column);
        updateDraggingHtml({ over: column });
    }
};



/* -------------------------- handleDrop ------------------------ */
const handleDrop = (event) => {
    event.preventDefault();

    // Get the dragged order's ID and target column from the data transfer
    const orderId = event.dataTransfer.getData('text/plain');
    const targetColumn = event.dataTransfer.getData('text/x-column');

    // Find the order element based on the ID
    const orderElement = document.querySelector(`[data-id="${orderId}"]`);

    // Move the order to the target column in the DOM
    moveToColumn(orderElement, targetColumn);

    // Reset the dragged order's column in the data transfer
    event.dataTransfer.setData('text/x-column', '');

    // Update the dragging HTML using the imported function
    updateDraggingHtml({ over: null, dragging: null });
};


/* -------------------------- handleDragEnd ------------------------ */
const handleDragEnd = (event) => {

    // Update the dragging HTML using the imported function
    updateDraggingHtml({ over: null, dragging: null });

    if (event.dataTransfer.dropEffect === 'move') {
        event.preventDefault();
    }
}


/* -------------------------- handleHelpToggle ------------------------ */
const handleHelpToggle = (event) => {
    const helpOverlay = document.querySelector('[data-help-overlay]');
    if (helpOverlay.open) {
        helpOverlay.close();
    } else {
        helpOverlay.showModal();
    }
};


/* -------------------------- handleAddToggle ------------------------ */
const handleAddToggle = (event) => {
    const addOverlay = document.querySelector('[data-add-overlay]');
    if (addOverlay.open) {
        addOverlay.close();
    } else {
        addOverlay.showModal();
    }
};

/* -------------------------- handleAddSubmit ------------------------ */
const handleAddSubmit = (event) => {
    event.preventDefault();

    // Get form and input elements
    const addForm = document.getElementById('add-form');
    const titleInput = document.querySelector('[data-add-title]');
    const tableSelect = document.querySelector('[data-add-table]');

    // Check if all required fields are filled
    if (!titleInput.value || !tableSelect.value) {
        alert('Please fill in all fields.');
        return;
    }

    // Create order data object
    const orderData = {
        title: titleInput.value,
        table: tableSelect.value,
        column: 'ordered',
    };

    // Create a new order with the provided data
    const newOrder = createOrderData(orderData);

    // Add the new order to the state and the "ordered" column in the DOM
    state.orders[newOrder.id] = newOrder;
    addToColumn('ordered', newOrder);

    // Reset the form and close the add overlay
    addForm.reset();
    document.querySelector('[data-add-overlay]').close();
};




/* -------------------------- handleEditToggle ------------------------ */
const handleEditToggle = (event) => {
    const targetOrder = event.target.closest('.order');
    if (!targetOrder) return;

    const orderId = targetOrder.dataset.id;
    const order = state.orders[orderId];

    if (!order) return;

    // Populate the edit form fields with the current order data
    const editForm = document.getElementById('edit-form');
    const orderIdInput = document.querySelector('[data-edit-id]');
    const titleInput = document.querySelector('[data-edit-title]');
    const tableSelect = document.querySelector('[data-edit-table]');
    const columnSelect = document.querySelector('[data-edit-column]');

    orderIdInput.value = order.id;
    titleInput.value = order.title;
    tableSelect.value = order.table;
    columnSelect.value = order.column;

    // Add event listener to the cancel button to close the edit overlay without updates
    const cancelButton = document.querySelector('[data-edit-cancel]');
    cancelButton.addEventListener('click', () => {
        editForm.reset();
        document.querySelector('[data-edit-overlay]').close();
    });

    // Show the edit overlay
    document.querySelector('[data-edit-overlay]').showModal();
};


/* -------------------------- handleEditSubmit ------------------------ */
const handleEditSubmit = (event) => {
    event.preventDefault();

    // Retrieve the form and input elements
    const editForm = document.getElementById('edit-form');
    const orderIdInput = document.querySelector('[data-edit-id]');
    const titleInput = document.querySelector('[data-edit-title]');
    const tableSelect = document.querySelector('[data-edit-table]');
    const columnSelect = document.querySelector('[data-edit-column]');

    // Get the values from the input elements
    const orderId = orderIdInput.value;
    const order = state.orders[orderId];

    // Check if the order exists
    if (!order) {
        alert('Invalid order ID.'); // Notify the user about the invalid order
        return;
    }

    // Check if all required fields are filled
    if (!titleInput.value || !tableSelect.value) {
        alert('Please fill in all fields.');
        return;
    }

    // Store the original column before updating the order
    const originalColumn = order.column;

    // Update the order properties with the new values
    order.title = titleInput.value;
    order.table = tableSelect.value;
    order.column = columnSelect.value;

    // Get the updated column and update the order within the appropriate column
    const updatedColumn = order.column;
    addToColumn(updatedColumn, order);

    // Delete the order from the previous column if the column has changed
    if (originalColumn !== updatedColumn) {
        deleteFromColumn(originalColumn, orderId);
    }

    // Reset the form and close the edit overlay
    editForm.reset();
    document.querySelector('[data-edit-overlay]').close();

    // Update the dragging HTML using the imported function
    updateDraggingHtml({ over: null, dragging: null });
};





/* -------------------------- handleDelete ------------------------ */
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


/* -------------------------- AddToColumn ------------------------ */
const addToColumn = (columnName, order) => {
    const columnContent = document.querySelector(`[data-column="${columnName}"]`);
    const orderElement = createOrderHtml(order); // Assuming createOrderHtml is defined in view.js
    orderElement.setAttribute('draggable', 'true'); // Set draggable attribute
    columnContent.appendChild(orderElement);
};


/* -------------------------- deleteFromColumn ------------------------ */
const deleteFromColumn = (columnName, orderId) => {
    const columnContent = document.querySelector(`[data-column="${columnName}"]`);
    const orderElement = columnContent.querySelector(`[data-id="${orderId}"]`);
    if (orderElement) {
        orderElement.remove();
    }
};




/* -------------------------- initializedApp ------------------------ */
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
    document.addEventListener('drop', handleDrop);


};
document.addEventListener('DOMContentLoaded', initializeApp);
