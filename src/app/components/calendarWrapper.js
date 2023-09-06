import React from 'react'

import DayTile from './dayTile'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const CalendarWrapper = () => {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth)
  const daysArray = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1)

  return (
    <div className='calendar-wrapper'>
      <div className='month-label'>
        <h1>{`${MONTHS[currentMonth]} - ${currentYear}`}</h1>
      </div>
      <div className='calendar-grid'>
        {daysArray.map((day) => (
          <DayTile {...{
            key: `Tile-${day}`,
            currentYear,
            currentMonth,
            day
          }} />
        ))}
      </div>
    </div>
  )
}

export default CalendarWrapper