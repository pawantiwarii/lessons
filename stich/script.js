// Stitch in JavaScript


// const dayNumber = 0;
// if ( dayNumber === 0){
//     console.log('It is Sunday Today');
// }else if(dayNumber === 1){
//     console.log('It is Monday Today');
// }else if(dayNumber ===2){
//     console.log('It is Tuesday Today');
// }
// const dayNumber = prompt('Please enter the number between 1 to 6.')




// const dayNumber = 8;
// switch(dayNumber){
//     case 0:
//         console.log('It is Sunday Today.');
//     break
    
//     case 1:
//         console.log('It is Monday Today.');
//     case 2:
//         console.log('It is Tuesday Today.');
//     break

//     case 3:
//         console.log('It is Wednesday Today.');
//     break
//     case 4:
//         console.log('It is Thursday Today.');
//     break
//     case 5:
//         console.log('It is Friday Today.');
//     break
//     case 6:
//         console.log('It is Saturday Today.');
//     break
//     default:
//         console.log('Please Enter the valid the number.');

    

// }
// console.log("Program Ended.");





const grade = 'e';
switch(grade.toLocaleLowerCase()){
    case 'a':
        console.log('You achieve marks between 90% to 100%');
        break
    case 'b':
        console.log('You achieve marks between 80% to 90%');
        break
    case 'c':
        console.log('You achieve marks between 70% to 80%');
        break
    case 'd':
        console.log('You achieve marks btween 60% to 70%');
        break
    case 'e':
        console.log('You achieve marks between 50% to 60%');
        break
    default:
        console.log('Sorry! You are failed.');
}





let rows =[1,2,3]
rows[3] = 10;
console.log(rows[3]);