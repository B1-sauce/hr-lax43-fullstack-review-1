import React from 'react';
import axios from 'axios';
class ListElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editmode: false,
      currentName: ''
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editRender = this.editRender.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  toggleEdit() {
    this.setState({
      editmode: !this.state.editmode
    })
  }
  editRender() {
    if (this.state.editmode) {
      return (
        <div>
          <input onChange={this.changeHandler}></input>
          <button onClick={this.handleSubmit}>Confirm</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      )
    }
  }
  changeHandler(e) {
    this.setState({
      currentName: e.target.value
    })
  }

  handleSubmit() {
    const id = this.props.item.id;
    axios.put(`/students/${id}`, {
      name: this.state.currentName
    })
      .then(res => {
        this.setState({
          editmode: false
        })
        this.props.getStudents()
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleDelete() {
    const id = this.props.item.id;
    axios.delete(`/students/${id}`)
      .then(res => {
        this.setState({
          editmode: false
        })
        this.props.getStudents()
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <span>
        <div onClick={this.toggleEdit}>{this.props.item.name}</div>
        {this.editRender()}
        <img src={this.props.item.imgurl}></img>
      </span>
    )
  }
}



export default ListElement
