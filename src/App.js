import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route }from 'react-router-dom';

import Todos from './components/Todos';
import AddToDo from './components/AddTodo';
import Header from './components/layouts/Header';
import About from './components/pages/About';

import uuid from 'uuid';
import axios from 'axios';

class App extends Component {


  state = {
    todos: []

}

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({ todos: res.data }));
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
    <Router>
    <div className="container">
      <Header />
      <Route exact path="/" render={(props) => (

<React.Fragment>

    <AddToDo addToDo={this.addToDo} />
    <div className="App">
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
    </div>

</React.Fragment> 

      )} />

<Route path='/about' component={About} />

    </div>
    </Router>
  );
  }
}

export default App;
