'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import jaLocale from '@fullcalendar/core/locales/ja'
import interactionPlugin from '@fullcalendar/interaction'

// let calendar = new Calendar(CalendarElement, {
//   locale: jaLocale
// });

export default function CalendarElement() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-4xl">きのこ育成の記録</h1>
      </div>
      <div className="flex justify-center mt-15">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          locale={jaLocale}
          selectable={true}
        />
      </div>
    </div>
  )
}