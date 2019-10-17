import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddToDo from './components/AddTodo';
import Header from './components/layouts/Header';
import uuid from 'uuid';

class App extends Component {


  state = {
    todos: [
        {
            id: uuid.v4(),
            title : 'Take out the trash',
            completed : false
        },
        {
          id: uuid.v4(),
          title : 'Dinner with wife',
            completed : true
        },
        {
          id: uuid.v4(),
          title : 'Meeting',
            completed : false
        }


    ]

}


// Toggle complate
markComplete = (id) => {
  console.log(id);
  this.setState({ todos: this.state.todos.map(todo => {

if(todo.id === id){
 todo.completed = !todo.completed
}

return todo;
  })
 });
}

delTodo = (id) => {
  this.setState({
    todos: [...this.state.todos.filter((todo) => todo.id !== id)]
  })
} 

addToDo = (title) => {
  const newToDo = {
    id: uuid.v4(),
    title: title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newToDo]})
}



  render() {
  return (
    <div className="container">
      <Header />
      <AddToDo addToDo={this.addToDo} />
    <div className="App">
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
    </div>
    </div>
  );
  }
}

export default App;
