import React from 'react'

import { Session } from 'services/session'

import InputSelect from 'components/UI/Input/Select'

const UserDetails = props => {
  const { user, roles, handleInputChange } = props

  const allowEdit = Session.isAdmin() ? true : false

  const _roles = roles.map(role => {
    return { id: role.id, optionTitle: role.name }
  })

  return (
    <div className="UserDetails">
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Firstname</label>
        <div className="col-sm-4">
          <input
            type="text"
            name="firstname"
            className="form-control"
            placeholder="Firstname"
            defaultValue={user.firstname}
            onBlur={handleInputChange}
            disabled={!allowEdit}
          />
        </div>
        <label className="col-sm-2 col-form-label">Lastname</label>
        <div className="col-sm-4">
          <input
            type="text"
            name="lastname"
            className="form-control"
            placeholder="Lastname"
            defaultValue={user.lastname}
            onBlur={handleInputChange}
            disabled={!allowEdit}
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-4">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            defaultValue={user.email}
            onBlur={handleInputChange}
            disabled={!allowEdit}
          />
        </div>
        <label className="col-sm-2 col-form-label">Role</label>
        <div className="col-sm-4">
          <InputSelect
            optionList={_roles}
            name="userRole"
            defaultValue={user.userRole.id}
            showDefault={false}
            onChange={handleInputChange}
            disabled={!allowEdit}
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">ID</label>
        <div className="col-sm-4">
          <input
            type="text"
            name="id"
            className="form-control"
            placeholder="ID"
            defaultValue={user.id}
            disabled
          />
        </div>
        <label className="col-sm-2 col-form-label">Active</label>
        <div className="col-sm-4">
          <InputSelect
            optionList={[{ id: 0, optionTitle: 'False' }, { id: 1, optionTitle: 'True' }]}
            name="active"
            defaultValue={user.active ? 1 : 0}
            showDefault={false}
            onChange={handleInputChange}
            disabled={!allowEdit}
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Status</label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            name="status"
            rows="2"
            defaultValue={user.status}
            onBlur={handleInputChange}
          />
        </div>
      </div>
    </div>
  )
}

export default UserDetails