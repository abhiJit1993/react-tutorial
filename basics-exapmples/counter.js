

 import React, { Component } from 'react';
 import ReactDom , { Component } from 'react-dom';


// 1. CONDITIONAL RENDERING IN JSX
const getFirstname = (user_details) => user_details.name.split(' ')[0];

let user = {
  name : 'Abhijit Som',
  age : 20,
  city : 'Ranchi city'
}
const template =  

(
<div>
<h1> Hey {getFirstname(user)} </h1> 
<p>your current age is : {user.age>=18 ? user.age : 'Not 18'}</p>

{(user && user.city) && (<h2>You are from : {user.city}</h2>)}
</div>
);

// 2. SOME ES6 FEATURE -  ARROW FUNCTION AND MAP FUNCTION
let resultArray;
     var multiplier = {
numbers : [3,9,7,8],
multiplyBy : 4,
multiply () {
 return this.numbers.map((num) => this.multiplyBy * num );
}
}
console.log(multiplier.multiply());

//3. EVENTS AND ATTRIBUTES;
let count = 0 ;
const addOne = () => {
count++;
  console.log("one added....",count);
  renderCounterApp();
  
   }
   const subtractOne = () => {
     count--
  console.log("one subtacted....",count);
  renderCounterApp();
  
   }
   const reset = () => {
     count = 0;
  console.log("value reset.....",count);
  renderCounterApp();
   }






//1.
//ReactDom.render(template,document.getElementById('app'));

//2.

const renderCounterApp = () => {
  let counter = (
  <div>
  <h1> Count : {count} </h1>
  <button onClick={addOne}> +1</button>   &nbsp; &nbsp;&nbsp;&nbsp;
  <button
   onClick={subtractOne}> -1</button>   
   &nbsp; &nbsp;&nbsp;&nbsp;
  <button
   onClick={reset}>Reset</button>   
  </div>
);
ReactDom.render(counter,document.getElementById('app'))
}

renderCounterApp()

