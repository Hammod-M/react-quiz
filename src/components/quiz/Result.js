import React from 'react'

export const Result = ({questions, correctSum}) => {
  return (
    <div className="result">
      <img src={correctSum === questions.length ? 'https://cdn-icons-png.flaticon.com/512/2278/2278992.png' : 'https://free-png.ru/wp-content/uploads/2021/05/free-png.ru-21-340x340.png' } />
      <h2>Вы отгадали {correctSum} ответа из {questions.length}</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  )
}
