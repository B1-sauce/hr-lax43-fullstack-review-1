import React from 'react';

/*
  This component does not necessarily have to be a class component.
  There are multiple ways to implement this feature.
  How would you implement this as a functional component?
*/
export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentSt: props.students[0]
    }
    this.getRandomStudent=this.getRandomStudent.bind(this);
  }
  componentDidMount(){
    this.getRandomStudent();
  }
  getRandomStudent(){
    // this gives us a random index value
    var ind = Math.floor(Math.random() * this.props.students.length);
    // Todo: Add your logic here to grab one random student
    this.setState({
      currentSt: this.props.students[ind]
    })
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.currentSt.imgurl}></img>
          <h1>{this.state.currentSt.name}</h1>
        </div>
        <button onClick={this.getRandomStudent}>Randomize</button>
      </div>
    )
  }
}