import React, { Component } from 'react'

import './Register.css'

import { Api } from '../../services/api'

import Logo from '../../components/UI/Logo'
import RegisterForm from './components/Form/'

export default class ContainersRegister extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    // validate register hash
    Api.fetchData(`auth/register/${this.props.match.params.hash}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        this.props.history.push('/signin')
      })
  }

  render() {
    const logoStyle = {
      height: '72px',
      width: '72px',
      marginBottom: '20px'
    }

    return (
      <div className="ContainersRegister">
        <Logo assignedStyle={logoStyle} />
        <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
        <RegisterForm />
        <a href="https://aionic.app" target="_blank" className="mt-4 text-muted d-block">
          Aionic App
        </a>
      </div>
    )
  }
}
