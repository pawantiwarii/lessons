true ? 'Pawan Tiwari':100


// true ke jagh pe khuchh bhi likh skte hai 



const username = prompt('Enter Your name please');
const userAge = prompt('Enter Your Age please');

let gender = prompt('Choose m for male and f for female' );
let sex = gender.toLocaleLowerCase() === 'm' ? 'He' : 'She';
let maleFemale = gender.toLocaleLowerCase() === 'm' ? 'Male' : 'Female';

const data = userAge >= 21 &&  userAge <= 21 ? `${sex} is a college student` : `${sex} is a professional web-developer.`; 

console.log('Name :' + username);
console.log('Age :' + userAge);
console.log(`Gender : ${maleFemale}`);
console.log(data);
console.log('Program Ended');


const name = 'pawan';
const num = 12;
const birtYear = 2003;