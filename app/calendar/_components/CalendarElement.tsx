'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import jaLocale from '@fullcalendar/core/locales/ja'
import interactionPlugin from '@fullcalendar/interaction'
import MushroomModal from '@/app/calendar/_components/MushroomModal'
import {useState, useEffect} from "react";
import { StorageGet } from '@/utils/localStorage'

export default function CalendarElement() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);


  useEffect(() => {
    const stamps: { year: string, month: string, day: string }[] = StorageGet();
    const events = stamps.map(stamp => (
      {
        title: 'きのこスタンプ',
        start: `${stamp.year}-${stamp.month}-${stamp.day}`,
        backgroundColor: 'transparent',
        borderColor: 'transparent'
      }
    ));
    setCalendarEvents(events);
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-4xl">きのこ育成の記録</h1>
      </div>
      <div className="mx-20 mt-15 relative">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={(info) => {
            setIsOpenModal(true)
            setSelectedDate(info.dateStr)
          }}
          // eventClick={()}
          locale={jaLocale}
          events={calendarEvents}
          selectable={true}
          eventContent={(eventInfo) => (
            <img src="/mushroom.png" alt={eventInfo.event.title || 'きのこ'} className="" />
          )}
          fixedWeekCount={false}
          dayMaxEvents={1}
        />
      </div>
      <MushroomModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        selectedDate={selectedDate}
      />
    </div>
  )
}