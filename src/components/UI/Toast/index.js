import React from 'react'

import './Toast.css'

const Toast = props => (
  <div
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    className="toast shadow show fadeInRight"
    data-autohide="false"
  >
    <div className="toast-header">
      <svg
        className=" rounded mr-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect fill={`${props.success ? '#28a745' : '#dc3545'}`} width="100%" height="100%" />
      </svg>
      <strong className="mr-auto">Aionic</strong>
      <small>Just now</small>
    </div>
    <div className="toast-body">{props.msg}</div>
  </div>
)

Toast.defaultProps = {
  success: true
}

export default Toast
