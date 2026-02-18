// Vairables in JavaScript
var fullName= "Shaishab Joshi";  
let address= "Kathmandu, Nepal";
const bloodGroup= "A+";
console.log(fullName, address, bloodGroup)

// datatypes
let name='Shaishab';
let age= 20;
let isStudent= true;
let hobbies= ['coding', 'travelling', 'cooking'];
console.log(hobbies[0]);

let user= {
    name: 'Shaishab',
    age: 20,
    isStudent: true,
    hobbies:['coding', 'travelling', 'cooking'],
};

console.log(user['name']);

function greet(name){
    console.log('Hello', name)
}

greet('Shaishab');


const headingElementById= document.getElementById('heading-2');
console.log(headingElementById);

const headingElementByIdQuery= document.querySelector('#heading-2');

const paragraphElement= document.querySelector('.para');


paragraphElement.textContent= "This is updated paragraph";
paragraphElement.style.color= 'blue';

const buttonElement= document.querySelector('.btn');
buttonElement.addEventListener('click', function() {
    alert('Button clicked');
    console.log('Button clicked');
})