class Person {
constructor (name,age=0) {
  this.name =  name;
  this.age =  age;
}
getGreetings () { 
  return `Hi ${this.name} !!! How are you?`
}
getDescription () { 
  return `${this.name} is ${this.age}  years old !!!`
}
}

const me  = new Person('Abhijit' , 25);
console.log(me.getGreetings(),me.getDescription());
const she  = new Person('Neha' );
console.log(she.getGreetings(), she.getDescription());
