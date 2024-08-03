import React from 'react'
import './GoalList.css'

const GoalList = props => {

  return (
    <div>
      <ul className='goal-list'>
        {props.goal.map(goal=>{
            return <li key={goal.id}>{goal.text}</li>
        })}
      </ul>
    </div>
  )
}

export default GoalList
