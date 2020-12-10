import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelte, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            handleDelte={() => handleDelte(item.id)}
            handleEdit={() => handleEdit(item.id)}
          ></TodoItem>
        ))}
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >clear list</button>
      </ul>
    );
  }
}
