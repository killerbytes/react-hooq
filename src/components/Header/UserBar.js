import React from 'react'
import { Link } from 'react-router-dom'


const UserBar = ({user}) =>{
  return <div className="user-bar">
    <Link to={`/profile`}><i className="fa fa-user-circle-o"></i> Profile</Link>
    </div>
}

export default UserBar