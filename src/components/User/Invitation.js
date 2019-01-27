import React, { Component } from 'react'

import { Api } from '../../services/api'

class UserInvitation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      isLoading: false,
      msg: '',
      status: ''
    }
  }

  handleInputChange = e => {
    const value = e.target.value

    this.setState({
      email: value,
      msg: '',
      status: ''
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.email.length) {
      Api.postData('auth/invitation', { email: this.state.email })
        .then(res => {
          this.setState({ status: 'is-valid' })
        })
        .catch(err => {
          this.setState({ isLoading: false, status: 'is-invalid', msg: Api.handleHttpError(err) })
        })
    }
  }

  render() {
    return (
      <div className="UserInvitation">
        <form onSubmit={this.handleSubmit}>
          <div class="input-group mb-3">
            <input
              type="email"
              name="email"
              className={`form-control ${this.state.status}`}
              onChange={this.handleInputChange}
              placeholder="Invitation email"
              autoComplete="off"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                Submit
              </button>
            </div>
            <div class="valid-feedback">User invited!</div>
            <div class="invalid-feedback">{this.state.msg}</div>
          </div>
        </form>
      </div>
    )
  }
}

export default UserInvitation
