// const userInput = prompt("Enter your Name");
// const countLength = userInput.length;
// // in this program i take input from user and then i change the case and then i also count the length of the string.
// console.log("Your name is " + userInput.toUpperCase() + " and " + countLength + " total character in Your Name.");



// method without using arguments
// const message = 'hello world';
// const faltuMessage = '         Hi, I am Pawan Tiwari';
// const finalMessage = faltuMessage.trim().toLocaleLowerCase();

// Methods using Arguments

// include()
// const myName = 'Pawan Tiwari'
// const check = myName.includes('a') 

// indexof()

// const myName = 'Pawan Tiwari' 
// const check = myName.indexOf('i')

// replace()

// const myName = 'Pawan Tiwari'; 
// const check = myName.replace('Pawan', 'Akash');


// replaceAll()

// const myName = 'Pawan Tiwari'; 
// const check = myName.replaceAll('a', 'A');

// concat() add the string.

// const myName = 'Pawan Tiwari';
// const yourName = 'Akash'; 
// // const check = myName.concat(' ', yourName);
// const check = myName.concat(myName, yourName)


// padstart()

// const lastFourDigit = '5307'; 
// const check = lastFourDigit.padStart(160, '*');


// padEnd()

// const lastFourDigit = '5307'; 
// const check = lastFourDigit.padEnd(10, '*');

// charAt()


// const lastFourDigit = 'My name is pawan'; 
// const check = lastFourDigit.charAt(6);
// same as square bracket to get string value

// charCodeAt()

// const lastFourDigit = 'My Name is Pawan'; 
// const check = lastFourDigit.charCodeAt(6);

// splti()

// const lastFourDigit = 'My Name is Pawan'; 
// const check = lastFourDigit.split(' ');


// templateLiteering

// Account number masking Program using slice, concat, 

// const accountNumber = '899001000375743'
// const last4Digit = accountNumber.slice(-4)
// // const templateString = `Last four digit of my account number is `.concat('',last4Digit.padStart(12,'*')); not a good way

// const templateString = `Last four digit of my account number is ${last4Digit.padStart(12,'*')} `;
// console.log(templateString);