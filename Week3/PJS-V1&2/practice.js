'use strict';

let todos = ['item 1', 'item 2', 'item 3']

//It should have a function to display todos
function displayTodos() {
  console.log('My todos:', todos);
}

//It should have a function to add todos
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

//It should have a function to change todos
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

//It should have a function to delete todos
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}

//Object
//Type object and object = name of the property (eg. operatingSystem is a property, 'windows 7' is the value) to get specific results.

let myComputer = {
  operatingSystem: 'Windows 7',
  screenSize: '15 inches',
  purchaseYear: 2015
};

let yourComputer = {
  operatingSystem: 'Mac',
  screenSize: '15 inches',
  purchaseYear: 2010
};

let theirComputer = {
  operatingSystem: 'Windows 7',
  screenSize: '20 inches',
  purchaseYear: 2011
};

//Objects and functions

let alejandra = {
  name: 'Alejandra',
  sayName: function () {
    console.log(this.name); //'This' refers to the object as a whole, when consoling it bring
  }
};

let ortiz = {
  surname: 'Ortiz',
  saySurname: function () {
    console.log(this.surname);
  }
};


