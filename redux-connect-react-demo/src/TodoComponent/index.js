import React from 'react'

export default class TodoComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = { count: 0 }
  }
  add = () =>{
    this.setState({count: this.state.count + 1})
  }
  remove = () =>{
    this.setState({count: this.state.count - 1})
  }
  render() {
    return (
      <div>
        <div>todo count: {this.state.count}</div>
        <button onClick={this.add}>add</button>
        <button onClick={this.remove}>reduce</button>
      </div>
    )
  }
}