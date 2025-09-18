'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import { useState } from 'react'

// type dateElement = Date | null;
// type dateInput = dateElement | [dateElement, dateElement];

export default function CalendarElement() {
  // const [date, dateChange] = useState<dateInput>(new Date());

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-4xl">きのこ育成の記録</h1>
      </div>
      <div className="flex justify-center mt-15">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
      </div>
    </div>
  )
}