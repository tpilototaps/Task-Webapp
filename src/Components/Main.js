import React, { Component } from 'react'
import TasksItem from './Create Task/CreateTaskItem';
import Tasks from './Task List/Tasks';

const tasks = [];
export default class Main extends Component {

  constructor(){
    super()
    this.state = {
      tasks:tasks,
    }
  };

createTask = ((task) => {
  if(task.trim() === '') {
    alert('Please input a task')
    return;
  }
  tasks.push({task, isCompleted : false});
  this.setState({tasks :tasks})
})
  removeTask = (taskID) =>{
    tasks.splice(taskID, 1)
    this.setState({tasks: tasks})
  };
  render() {
    return (
      <div className='card'>
      <h1>Your To Do List</h1>
      <TasksItem createTask={this.createTask}/>
      <br/>
      <Tasks tasks={this.state.tasks} removeTask={this.removeTask}/>
      </div>
    );
  }
}
