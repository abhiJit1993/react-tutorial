 import React, { Component } from 'react';
 import ReactDom , { Component } from 'react-dom';


class IndecisionApp  extends  React.Component { 
  render () { 
    const title = 'this is the header rendered through props object';
    const options = ['Item 1', 'Item 2', 'Item 3'];
    return (
      <div>
<Header title={title}/>
<Action/>
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
  render () {
    return (
      <div>
      <button> What should I do ?</button>
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
  render () { 
    return  (
      <div>
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
  render() {
    return  (
      <div> 
    <button>Add Option </button>
      </div>
    )
  }
}







ReactDom.render(<IndecisionApp/>, document.getElementById('app'))