import React, { Component } from 'react';
import './Landing.css'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Statmoji</h1>
        <h2>Your Life Stats Emojified</h2>
        <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_large.png?v=1571606036" alt="Smiley Face"/>
        <span class="email">
          <label>Email</label>
            <input
                  type='text'
                  // value={this.state.username}
                  placeholder='email'
                  name='email'
                  // onChange={this.handleInputChange}
            />
        </span>
        <span class="password">
          <label>Password</label>
            <input
                  type='text'
                  // value={this.state.password}
                  placeholder='password'
                  name='password'
                  // onChange={this.handleInputChange}
            />
        </span>
        <span class="buttons">
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleRegister}>Register</button>
        </span>
      </div>
    );
  };
};