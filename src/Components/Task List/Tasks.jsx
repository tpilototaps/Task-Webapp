import React, { Component } from 'react'
import Item from '../Each Task/Item'
import './Tasks.css'

export default class Tasks extends Component {
    render() {
        return (
            <table className='body'>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tasks.map((task, index) => (
                        <Item key={index} taskItem={task} id={index} removeTask={this.props.removeTask}/>
                    ))}
                </tbody>
            </table>
        )
    }
}

