import React from 'react'
import {connect} from 'react-redux'

import { actions } from './redux/slice'
export class UserComponent extends React.Component{
  constructor(props) {
    super(props)
    this.count = 0;
  }
  render() {
    const { gamer, updateNameAction, updateAdressAction} = this.props;
    this.count++
    return (
      <div>
        <div>gamer name: { gamer.name }</div>
        <div>gamer address: { gamer.address }</div>
        <button onClick={ () => updateNameAction(`大帝 ${this.count}`)}>update name</button>
        <button onClick={ () => updateAdressAction(`北京 ${this.count}`)}>update addess</button>
      </div>
    )
  }
}

const mapStateToProps = state => (
  { gamer: state.gamer }
);
const mapDispatchToProps = { 
  updateNameAction: actions.updateName,
  updateAdressAction: actions.updateAdress
 };
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)