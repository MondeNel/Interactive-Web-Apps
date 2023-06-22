const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = parseInt('0')


let location = 'RSA'
let shipping = 400
let currency = 'R'
let customers = 1
let $ = 600
let countries = parseInt('800')

if (location = 'RSA') { shipping === 400 && currency === 'R' }

if (location = 'NAM'){ 
		shipping = $ 
}else {
		shipping = countries
}




let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * parseInt('0')
let batteries = 35 * 2
let pens = 5 * parseInt('0')

shipping = null

if (shoes + batteries + pens + shirts <= 1000) {
	console.log('Free shipping')
}else {
	console.log('No free shipping')
}


if (location = 'NAM' && customers < 2) {
	console.log('Free shipping')
}else {
	console.log('No free shipping')
}

if (location = 'RSA' && (shipping = 0 !== shipping )){
	console.log('Free shipping')
}else {
	console.log('No free shipping')
}

if (shipping !== 0 && customers !== 1) { 
	console.log('WARNING') 
}

shipping = 400;

location === 'NK' ? console.warn('WARNING') : console.log('Price: ' + currency, shoes + batteries + pens + shirts +  toys + shipping)
