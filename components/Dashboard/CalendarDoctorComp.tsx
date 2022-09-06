import React,{ useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
const CalendarDoctorComp = () => {
  const [value,onChange] = useState(new Date())
  console.log(value)
  return (
    <div >
      <Calendar value={value} onChange={onChange} calendarType="US"/>
    </div>
  )
}

export default CalendarDoctorComp