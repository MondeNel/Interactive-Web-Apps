const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = parseInt('0')


// console.log(FREE_WARNING)
// console.log(BANNED_WARNIN)
// console.log(NONE_SELECTED)

let location = 'RSA';
let shipping = 400;
let currency = 'R';
let customers = 1;


if (location = 'RSA') { shipping === 400 && currency === 'R' }

// console.log(location, shipping, currency)

if (location = 'NAM'){ 
		shipping = 600 
}else {
		shipping = 800
}

// console.log(location, shipping)


let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * parseInt('0')
let batteries = 35 * 2
let pens = 5 * parseInt('0')

// console.log(shoes, toys, shirts, batteries, pens);

/* The only code to sort out
shipping = null
currency = $ 
*/

// console.log(shipping, currency)

let result =  (shoes + batteries + pens + shirts >= 1000 && shipping ? 'free shipping' : 'no free shipping') 


customers = (location = 'NAM' && customers < 2 ? 'free shipping' : 'WARNING')  



		if (location = 'RSA') {
			shipping = 0 || shipping

			// console.log('free shipping')
		}else {
			// console.log('no free shipping')
		}
				
		 	

if (shipping = 0 && customers !== 1) { console.log(WARNING) }

location === 'NK' ? console.warn('WARNING') : console.log('Price: ', currency + shoes + batteries + pens + shirts + shipping)
