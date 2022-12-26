import React, { Component } from 'react'

export default class TasksItem extends Component {

    //creating constructor method:
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    handleChange = ((event)=>{
        this.setState({task: event.target.value})
    });
    handleSubmit = ((event) => {
        event.preventDefault();
        this.props.createTask(this.state.task);
        this.setState({task:''});
    })

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder='Enter task here' value={this.state.task} onChange={this.handleChange} autoFocus />
                <button className= "btn btn-success" type='submit'>Add Task</button>
            </form>
        )
    }
}