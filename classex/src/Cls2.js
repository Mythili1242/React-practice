import { Component } from "react";

export default class Cls2 extends Component{

    #firstName = 'Joseph';
    #lastName = 'Stevens';
  
    get name() {
      return `${this.#firstName} ${this.#lastName}`;
    }
}
  
  const person = new Person();
  console.log(person.name);
  
  // SyntaxError: Private field '#firstName' must be
  // declared in an enclosing class
  console.log(person.#firstName);
  console.log(person.#lastName);


