'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import jaLocale from '@fullcalendar/core/locales/ja'
import interactionPlugin from '@fullcalendar/interaction'
import MushroomModal from '@/app/calendar/_components/MushroomModal'
import {useState} from "react";

// let calendar = new Calendar(CalendarElement, {
//   locale: jaLocale
// });

export default function CalendarElement() {
  // const handleDateClick = (arg) => {
  //   // モーダルで「きのこを繁殖させますか？」と確認用メッセージを表示させる

  // }
  // モーダルの表示、非表示を判定するReactHooks
  const [isOpenModal, setIsOpenModal] = useState(false);

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
          selectable={true}
          fixedWeekCount={false}
        />
      </div>
      <MushroomModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </div>
  )
}