import React, { Component } from 'react';
import Todoitem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {



  render() {
     // console.log(this.props.todos);
  return this.props.todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
  ));

  
  }
}


// proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
