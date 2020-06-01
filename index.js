 import React, { Component } from 'react';
 import ReactDom , { Component } from 'react-dom';

class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.handlePlusOne =  this.handlePlusOne.bind(this)
    this.handleMinusOne =  this.handleMinusOne.bind(this)
    this.handleReset =  this.handleReset.bind(this);
    this.state = {
      count : 0
    }

  }
handlePlusOne () {
  console.log('+1');
  this.setState ((prevState)=> {
    return {
      count :  prevState.count+1
    }
  })
}
handleMinusOne () {
  console.log('-1');
   this.setState ((prevState)=> {
    return {
      count :  prevState.count-1
    }
  })
}
handleReset () {
  console.log('Reset')
}
  render () {

    return (
      <div>

      <h1>Count  :  {this.state.count}</h1>
      <button onClick={this.handlePlusOne}>+1</button>
      <button onClick={this.handleMinusOne} >-1</button>
      <button onClick={this.handleReset}>Reset</button>

      </div>
    )
  }
}
ReactDom.render(<Counter />, document.getElementById('app')) 