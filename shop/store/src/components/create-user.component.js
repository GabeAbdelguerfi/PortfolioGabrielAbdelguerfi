import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
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
    this.setState ({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(
        res => { 
          console.log( 'response : ' + res ) 
          this.props.history.push(`/products/${this.state.username}`);
        })
      .catch( res => {
        console.log(res)
      })
  }

  render() {
    return (
      <div className='container col-6'>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                defaultValue={this.state.username}
                onChange={this.onChangeUsername}
                placeholder='username'
                />
            <label>Password: </label>
            <input type='password'
                required
                className='form-control'
                defaultValue={this.onChangePassword}
                onChange={this.onChangePassword}
                placeholder='password'
            />
            <label>Confirm Password: </label>
            <input type='password'
                required
                className='form-control'
                onChange={this.onChangePassword}
                placeholder='re-type password'
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}