// // const fruits = ['mango', 'banana', 'chikku',];

// // const myFruits = fruits;

// // fruits.push('dates')
// // fruits.push('Grapes')



// const username1 = 'Pawan '; //@22379
// // array created in same memory so the address is same so if i want to to change the address i need to add some value with second array.........

// let username2 = username1 + 'Tiwari';  //@22379


// const user1 = {
//     firstName : "Rahul",
//     lastName : "Singh"
// }
// const user2 = user1;
// // myObject.lastName = 'Pandey'

// //assign value with different address

const user3 = {
    firstName: 'sonu', // @244731
    lastName: 'Tiwari'

}

// const user4 = {};
// Object.assign(user4, user3);


// spread operators
const user4 = {...user3};
user3.firstName = 'Sonu' // @244733

const fruits = ['mango', 'banana', 'chikku',]; //@283205
const myFruits = [];  //
Object.assign(myFruits, fruits);
myFruits.push('angur')

const fruittt = [].concat(fruits); //copy 
fruittt.push('orange')


const myObj =  {
    firstName: 'Rohit',
    lastName: 'Tiwari',
    pata:{
        city: 'Delhi',
        pincode : 110059,

    }

}
// const copyObj = {...myObj} // shallow copy ek hi string tk copy krta hai onle level deep copy

// copyObj.pata.city = 'Mumbai';


// deep copy kasie krenge isme pura address chnge ho jata hai agr new variable mein add karte h tho parent objpe ko asar nhi hota hai .

const newCpyObj = JSON.parse(JSON.stringify(myObj));
newCpyObj.pata.city = 'rajgir'

