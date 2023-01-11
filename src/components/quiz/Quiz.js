import React from 'react'

export const Quiz = ({questions, active, setActive, setCorrectSum}) => {

  const progress =  Math.round(active / questions.length * 100)
  
  function changeActiveQuestion(index) {
    if(questions[active].correct === index) setCorrectSum(prev => prev + 1)
    setActive(prev => prev + 1)
  }

  return (
    <>
      <div className="progress">
        <div style={{ width: `${progress}%` }} className="progress__inner"></div>
      </div>
        <h1>{questions[active].title}</h1>
      <ul>
        {questions[active].variants.map((item, index) => <li onClick={() => changeActiveQuestion(index)} key={item}>{item}</li>)}
      </ul>
    </>
  )
}
