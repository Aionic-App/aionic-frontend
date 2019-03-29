import React from 'react'

import Fetcher from 'components/Utility/Fetcher'

import CardDeck from 'components/Deck'

const TaskProjectsContainer = props => (
  <Fetcher url={`tasks/${props.taskId}/projects`}>
    {projects => (
      <div className="TaskProjectsContainer">
        <CardDeck deckType="Project" itemList={projects} itemsPerRow={3} />
      </div>
    )}
  </Fetcher>
)

export default TaskProjectsContainer