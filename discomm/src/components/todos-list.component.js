import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo.server_name}</td>
        <td>{props.todo.server_description}</td>
        <td>{props.todo.server_url}</td>
        <td>{props.todo.server_tags}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)


export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                
                <h3></h3>
                <table className="table table-striped" style={{ marginTop: 150 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>url</th>
                            <th>tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}