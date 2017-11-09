import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'


import UserBar from './UserBar'

class Header extends React.Component{
  render(){
    const {user} = this.props
    return <header>
      <div className="container">
        <Link className="logo" to={`/`}>Hooq</Link>        
        <UserBar user={user} />
      </div>
    </header>
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);
