// const username = prompt('Please enter your Name.');
// const userAge = parseInt(prompt('Please enter your Age.'));

let username = prompt('Please enter your Name.');
let userAge = parseInt(prompt('Please enter your Age.'));

if (!username){
  username = 'Procodrr';
}
if(!userAge){
  userAge = 22;
}

// So if you we want to optimize our if statement code we should always use else statement together
// if statement become true else statement helps to break the code and final end the program so easy.

console.log(`Name : ${username}`); // if username prompt is empty so value return (procoddr).
console.log(`Age  : ${userAge} `); // If user age is is empty its return or value.


// condition when user input age.

// if (userAge >= 3 && userAge <= 5) {
//   console.log(`${username} is a kid.`);
//   console.log(`He goes to playSchool.`);
// } else if (userAge <= 6 && userAge >= 18) {
//   console.log(`${username} is goes to school.`);
//   console.log(`${username} is studying.`);
// } else if (userAge >= 18 && userAge <= 24) {
//   console.log(`${username} goes to college.`);
//   console.log(`${username} is learning Web-development.`);
// } else if (userAge >= 25 && userAge <= 45) {
//   console.log(`${username} you are working professional as a full-stack developer.`);
// }else if ( userAge >= 45 && userAge >= 121){
//   console.log(`${username} is retired.`);
//   console.log('Listening Bhajan and watching News.');
// } else if (userAge > 122 ){
//   console.log(`${username} is Immortal.`);
// }
console.log('Program Ended.');
