import React, { useState } from 'react'

import './Search.css'

import Content from 'components/UI/Content'
import Title from 'components/UI/Title'

import Card from 'components/Card'

import BoardTaskContainerSearch from 'components/Board/Task/containers/search'
import TaskFilterContainer from 'components/Task/Filter/container'

const SitesSearch = props => {
  const { match } = props
  const [params, setParams] = useState({
    searchTerm: match.params.searchTerm || ''
  })

  const handleFilterChange = e => {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    if (params[name] !== value) {
      setParams({ ...params, [name]: value })
    }
  }

  const resetFilters = e => {
    setParams({})
  }

  return (
    <div className="SitesSearch">
      <Content>
        <Title title="Search" />
        <div className="row">
          <div className="col-12 col-md-3">
            <Card title="Filters">
              <TaskFilterContainer
                searchParams={params}
                handleFilterChange={handleFilterChange}
                resetFilters={resetFilters}
              />
            </Card>
          </div>
          <div className="col-12 col-md-9 mt-4 mt-md-0">
            <BoardTaskContainerSearch searchParams={params} />
          </div>
        </div>
      </Content>
    </div>
  )
}

export default SitesSearch
