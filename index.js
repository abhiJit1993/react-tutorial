 import React, { Component } from 'react';
 import ReactDom , { Component } from 'react-dom';

class Header extends React.Component {
  render ()  {
    return  (
      <div>
      <h1> this is the header </h1>
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

class Options extends React.Component { 
  render () { 
    return  (
      <div>
      These are the options!!!
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




const jsx = ( <div> 
<Header/>
<Action/>
<Options/>
<AddOption/>
</div> 
);



ReactDom.render(jsx, document.getElementById('app'))