import React, { Component } from 'react'

export class AddBook extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Title" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddBook
