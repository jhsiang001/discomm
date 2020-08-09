import React, { Component } from 'react';
import axios from 'axios';

export default class CreateServer extends Component {

    constructor(props) {
        super(props);

        this.onChangeServerName = this.onChangeServerName.bind(this);
        this.onChangeServerDescription = this.onChangeServerDescription.bind(this);
        this.onChangeServerUrl = this.onChangeServerUrl.bind(this);
        this.onChangeServerTags = this.onChangeServerTags.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            server_name: '',
            server_description: '',
            server_url: '',
            server_tags: []
        }
    }

    onChangeServerName(e) {
        this.setState({
            server_name: e.target.value
        });
    }

    onChangeServerDescription(e) {
        this.setState({
            server_description: e.target.value
        });
    }

    onChangeServerUrl(e) {
        this.setState({
            server_url: e.target.value
        });
    }

    onChangeServerTags(e) {
        this.setState({
            server_tags: e.target.value
        });
    }

    

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Server Name: ${this.state.server_name}`);
        console.log(`Server Description: ${this.state.server_description}`);
        console.log(`Server URL: ${this.state.server_url}`);
        console.log(`Server Tags: ${this.state.server_tags}`);
        
        const newServer = {
            server_name: this.state.server_name,
            server_description: this.state.server_description,
            server_url: this.state.server_url,
            server_tags: this.state.server_tags
        };

        axios.post('http://localhost:4000/todos/add', newServer)
            .then(res => console.log(res.data));

        this.setState({
            server_name: '',
            server_description: '',
            server_url: '',
            server_tags: []
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3></h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label> </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.server_name}
                                onChange={this.onChangeServerName}
                                />
                    </div>
                    <div className="form-group">
                        <label> </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.server_description}
                                onChange={this.onChangeServerDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label> </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.server_url}
                                onChange={this.onChangeServerUrl}
                                />
                    </div>

                    <div className="form-group">
                        <label> </label>
                        <input list="tags"
                                type="text" 
                                className="form-control"
                                value={this.state.server_tags}
                                onChange={this.onChangeServerTags}
                                />
                    </div>
                    
                    {/* <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.todo_priority==='Low'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label"></label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.todo_priority==='Medium'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label"></label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.todo_priority==='High'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label"></label>
                        </div>
                    </div> */}

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}