import React, { Component } from 'react'

export default class Item extends Component {
    removeTask = (() => {
        this.props.removeTask(this.props.id)
    })
  render() {
    return (
      <tr>
        <td>
            {this.props.taskItem.task}
        </td>
        <td>
            <button className="btn btn-danger" onClick = {this.removeTask}>Remove</button>
        </td>
      </tr>
    )
  }
}
