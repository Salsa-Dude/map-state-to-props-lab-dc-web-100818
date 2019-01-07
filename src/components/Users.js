import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Users {this.props.usersCount}</h1>
        <ul>
          {this.props.users.map(user => {
            return <li>{user.username}</li>
          })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users,
    usersCount: state.users.length
  }
}
export default connect(mapStateToProps)(Users)
