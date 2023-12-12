/**
 * Prepare phone number and remove all not numeric symbols
 * +(420)111222333 -> 00420 111 222 333
 * 
 * @param {string} phone 
 * @returns {string}
 */
export const preparePhone = (phone) => {
	
	let validPhone;
	const numericPhone = phone.replace(/^0+|\D/g, '');
	const countryCode = numericPhone.substring(0, 3);
	const onlyPhone = numericPhone.substring(3);
	
	validPhone = 
		'00' 
		+ countryCode 
		+ ' ' + onlyPhone.substring(0, 3) 
		+ ' ' + onlyPhone.substring(3, 6) 
		+ ' ' + onlyPhone.substring(6, 9);


	return validPhone;
} 