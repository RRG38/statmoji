import './Nav.css'

import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { updateUser } from '../../redux/reducer';


class Nav extends Component {
  constructor(props){
  super(props);

  this.getUser = this.getUser.bind(this);
}

componentDidMount() {
  this.getUser()
}

getUser() {
  axios.get('/api/auth/me')
  .then(res => this.props.updateUser(res.data) )
}



render() {
  return(
    <div className='nav-parent'>
      <div className='nav-title-email-parent'>
        <div className='email'>{this.props.email}</div>
        <div className='title'>Statmoji.app</div>
      </div>
      <Link to='/main-menu'> <button className="material-icons menu-icon">menu</button> </Link>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    email: state.email

  }
}

export default withRouter(connect(mapStateToProps, { updateUser })(Nav));