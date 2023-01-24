import React from 'react'

const Stats = ({wpm,accuracy}) => {
  return (
    <div>
        <h1>{wpm()}</h1>
        <h1>{!Number.isNaN(accuracy()) && accuracy().toFixed(1)+'%'}</h1>
    </div>
  )
}

export default Stats