 import React, { Component } from 'react';
 import ReactDom , { Component } from 'react-dom';


class IndecisionApp  extends  React.Component { 
  render () { 
    const title = 'this is the header rendered through props object';
    const options = ['Item 1', 'Item 2', 'Item 3'];
    const action = 'What should I do ?'
    return (
      <div>
<Header title={title}/>
<Action action={action}/>
<Options options={options}/>
<AddOption/>

      </div>
    )
  }
}

class Header extends React.Component {
  render ()  {
    return  (
      <div>
      <h1> {this.props.title} </h1>
      </div>
    )
  }
}

class Action extends React.Component {

  handleOnClick () {
    alert('clicked')
  }
  render () {
    return (
      <div>
      <button onClick={this.handleOnClick}>{this.props.action}</button>
      </div>
   )
  }
}

class Option extends React.Component { 
render ()  {
  return (
    <div> 
    {this.props.option}
    </div>
  )
}
}


class Options extends React.Component { 
  constructor () {
    this.handleOnClick =  this.handleOnClick.bind(this);
  }
  handleOnClick (){
  console.log(this.props)
  }
  render () { 
    return  (
      
     
      <div>
       <button onClick={this.handleOnClick}> Remove All </button>
      {
        this.props.options.map((option)=>{
          return <Option option={option}/>
        })
      }
      </div>
    )
  }
}

class AddOption  extends React.Component{
  handleFormSubmit (e) {
e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
alert(option);
e.target.elements.option.value = '';
  }
  
  }
  render() {
    return  (
      <div> 
  <form onSubmit={this.handleFormSubmit}>
  <input type='text' name='option' /> 
   <button> Add Option</button>
  </form>
      </div>
    )
  }
}







ReactDom.render(<IndecisionApp/>, document.getElementById('app'))