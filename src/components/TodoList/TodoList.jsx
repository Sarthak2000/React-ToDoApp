import React, { Component } from 'react';
class TodoList extends Component {
    state = {}
    render() {
        let todos = this.props.todos;
        let functiondelete = this.props.deleteTodos;
        return (
            <div className="todos container">{
                todos.map(function (todoobj) {
                    return (
                        <div key={todoobj.id} className="todo input-group m-4">
                            <div className="form-control">{todoobj.todo}</div>
                            <button className="btn btn-danger" onClick={(e) => {
                                functiondelete(todoobj.id)
                            }}>Delete</button>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default TodoList;