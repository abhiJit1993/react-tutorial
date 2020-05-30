
 import React, { Component } from 'react';
 import ReactDom , { Component } from 'react-dom';

const app  =  {
  title : 'Indecision App',
  subTitle : 'There is no elevator to success, you have to take the stairs',
  options :  []
}
const removeAll = () => { 
  app.options.length =  0;
  renderIndecisionApp();
}
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    renderIndecisionApp();
    e.target.elements.option.value = '';
  }
}

const chooseFromOptions = () =>{
  const optionIndex = Math.floor(Math.random()*app.options.length);
  alert(app.options[optionIndex])
}


const renderIndecisionApp = () => {
  let template = (
  <div>
  <h1>{app.title} </h1>
  <p>{app.subTitle}</p>
  <button  onClick= {chooseFromOptions}>What should I do ? </button>
  <ol>
{
  app.options.map((option) => {
return (<li key={option}>{option}</li>)
  })
}

  </ol>



  <form onSubmit={onFormSubmit}>
  <input type="text" name="option" />
  <button> Add Option</button> &nbsp; &nbsp; &nbsp; &nbsp;
  <button onClick={removeAll}> Remove All</button> 
  </form>
  </div>
);
ReactDom.render(template,document.getElementById('app'))
}

renderIndecisionApp()

