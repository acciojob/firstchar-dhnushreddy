function firstChar(text) {
	 if(!text)return '';
	 text=text.trim();
	 return text.charAt(0);  
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
