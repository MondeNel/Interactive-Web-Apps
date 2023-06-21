const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = parseInt('0')


let location = 'RSA';
let shipping = 400;
let currency = 'R';
let customers = 1;


if (location = 'RSA') { shipping === 400 && currency === 'R' }


if (location = 'NAM'){ 
		shipping = 600 
}else {
		shipping = 800
}



let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * parseInt('0')
let batteries = 35 * 2
let pens = 5 * parseInt('0')



if (shoes + batteries + pens + shirts <= 1000) {
	
	if (location = 'NAM' && customers < 2) {

		if (location = 'RSA'){
			shipping = 0 || shipping 
		}
	}  
		
}



	
		 	

if (shipping = 0 && customers !== 1) { console.log(WARNING) }

shipping = 400;

location === 'NK' ? console.warn('WARNING') : console.log('Price: ', shoes + batteries + pens + shirts +  toys + shipping)
