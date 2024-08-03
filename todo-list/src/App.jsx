import React, { useState } from 'react'
import GoalList from './component/GoalList/GoalList'
import NewGoal from './component/NewGoal/NewGoal'
import './App.css'
// import T from './component/T';

const App = () => {
 const [courseGoals, setCourseGoals] = useState([
    {id:1,text:'task1'},
    {id:2,text:'task2'},
  ]);
  
  // const courseGoals='';

  const addNewGoalHandler = newGoal => {
    // setCourseGoals(courseGoals.contact(newGoal));
    setCourseGoals(prevCourseGoals =>prevCourseGoals.concat(newGoal))
  }
  return (
    <div className='course-goals'>
      <h2 style={{fontSize:'24px'}}>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goal={courseGoals}/>

    </div>

    // <>
    // <T/>
    // </>
  )
}

export default App
