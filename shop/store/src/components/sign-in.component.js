import React, { Component } from 'react';
import axios from 'axios';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
        password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(user)

    axios.post('http://localhost:5000/users/', {
        user
    })
    .then(res => {
      console.log(res.data.success)
      if ( res.data.success ) {
        console.log('login username : ' + this.state.username)
        this.props.history.push(`/products/${this.state.username}`);
      }
    }); 
  }

  render() {
    return (
      <div className='container col-6'>
        <h2 className='form-title'>Log In</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
            <label>Password: </label>
            <input type='password'
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Sign In" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}