'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import jaLocale from '@fullcalendar/core/locales/ja'
import interactionPlugin from '@fullcalendar/interaction'
import MushroomModal from '@/app/calendar/_components/MushroomModal'
import {useState} from "react";
import { StorageGet } from '@/utils/localStorage'

// let calendar = new Calendar(CalendarElement, {
//   locale: jaLocale
// });

export default function CalendarElement() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  // 一旦ここにローカルストレージから集めた情報を保存
  const stamps: { year: string, month: string, day: string }[] = StorageGet();
  const calendarEvents = stamps.map(stamp => (
    {
      title: 'きのこスタンプ',
      start: '${stamp.year}-${stamp.month}-${stamp.day}'
    }
  ));


  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-4xl">きのこ育成の記録</h1>
      </div>
      <div className="mx-20 mt-15">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          contentHeight={700}
          dateClick={()=>setIsOpenModal(true)}
          locale={jaLocale}
          events={calendarEvents}
          selectable={true}
          fixedWeekCount={false}
        />
      </div>
      <MushroomModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </div>
  )
}