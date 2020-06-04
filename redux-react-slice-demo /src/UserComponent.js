import React from 'react'
import {connect} from 'react-redux'

import actions from './redux/create/action'

export class UserComponent extends React.Component{
  constructor(props) {
    super(props)
    this.count = 0;
  }
  render() {
    const { user, updateNameAction, updateAdressAction} = this.props;
    this.count++
    return (
      <div>
        <div>user name: { user.name }</div>
        <div>user address: { user.address }</div>
        <button onClick={ () => updateNameAction(`gerry ${this.count}`)}>update name</button>
        <button onClick={ () => updateAdressAction(`xi'an ${this.count}`)}>update addess</button>
      </div>
    )
  }
}

const mapStateToProps = state => (
  { user: state.user }
);
const mapDispatchToProps = { 
  updateNameAction: actions.udpateName,
  updateAdressAction: actions.updateAdress
 };
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)