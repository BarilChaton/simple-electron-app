import React from 'react'

const DayTile = (props) => {
  const { currentYear, currentMonth, day } = props

  const dayDate = new Date(currentYear, currentMonth, day)
  const dayName = dayDate.toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <div className='calendar-tile'>
      <div className='day'>
        <h4>{day}</h4>
        <h4>{dayName}</h4>
      </div>
    </div>
  )
}

export default DayTile