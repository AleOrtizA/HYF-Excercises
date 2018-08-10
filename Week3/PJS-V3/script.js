'use strict';

// 1.- Create a todo list
//let todoList = {
//todos: ['item 1', 'item 2', 'item 3',]
//};

// 2.- Create a Display todo
//let todoList = {
//todos: ['item 1', 'item 2', 'item 3',],
//displayTodos: function () {
//console.log('My todo list:', this.todos);
//}
//};

// 3.- Create an Add to our list
//let todoList = {
// todos: ['item 1', 'item 2', 'item 3',],
// displayTodos: function () {
//  console.log('My todo list:', this.todos);
//},
//addTodo: function (todo) {
//  this.todos.push(todo);
//  this.displayTodos();
// }
//};

// 4.- Create a change option
//let todoList = {
//todos: ['item 1', 'item 2', 'item 3',],
//displayTodos: function () {
//console.log('My todo list:', this.todos);
//},
//addTodo: function (todo) {
//this.todos.push(todo);
//this.displayTodos();
//},
//changeTodo: function (position, newValue) {
//this.todos[position] = newValue;
//this.displayTodos();
//}
//};

// 5.- Create a Delete method
let todoList = {
  todos: ['item 1', 'item 2', 'item 3',],
  displayTodos: function () {
    console.log('My todo list:', this.todos);
  },
  addTodo: function (todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function (position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
