import './MainMenu.css'

import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { updateUser, logout } from '../../redux/reducer';


class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios.get('/api/auth/me')
    .then(res => this.props.updateUser(res.data) )
  }

  logout() {
    axios.post('/api/auth/logout')
      .then(_ => this.props.logout())
  }

  render() {
  return this.props.location.pathname !== '/' &&
    <div>
      <header className='main-menu-header'>
        <div className='main-menu-user-email'> {this.props.email} </div>
          Statmoji.app
      </header>
      <div className='main-menu-title'>
        <div> Menu </div>
      </div>
      <div className='main-menu-content'>
        <div className='main-menu-container'>
        <button className='main-menu-button'> ADD FOOD/DRINK STATS </button>
        <button className='main-menu-button' > ADD ACTIVITIES STATS </button>
        <Link to='/add-feelings-entries' ><button className='main-menu-button'> ADD HOW I'M FEELING STATS </button></Link>
        <button className='main-menu-button'   > VIEW ALL MY PAST STATS </button>
        <button className='main-menu-button'   > ABOUT STATMOJI </button>
        <button className='main-menu-button' > CHANGE COLOR PREFERENCES </button>
        <button className='main-menu-button'   > GIVE US FEEDBACK </button>
        <button className='main-menu-button'   > BECOME A SUPPORTER </button>
        <Link to='/' ><button className='main-menu-button'   > LOGOUT </button></Link>
      </div>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email

  }
}

export default withRouter(connect(mapStateToProps, { updateUser, logout})(MainMenu));