'use client'
import React, { useEffect, useRef } from "react"

export default function MushroomModal({ isOpenModal, setIsOpenModal }: { isOpenModal: boolean, setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) {
  const modalRef = useRef(null);
  const mushroomButton = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !(modalRef.current as HTMLElement).contains(event.target as Node)) {
        setIsOpenModal(false);
      } else if (mushroomButton.current && (mushroomButton.current as HTMLElement).contains(event.target as Node)) {
        console.log("ボタンが押されたよ")
        // ここの下部にカレンダースタンプを押すコンポーネントを指定
        setIsOpenModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [isOpenModal, setIsOpenModal]);

  return (
    <>
      {isOpenModal &&
        <div className="fixed z-10 top-0 left-0 w-full h-full bg-accent/50">
          <div className="relative z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[80vh] md:max-h-[75vh] w-[80vw] md:w-[80vw] p-4 md:p-10 bg-slate-100 border-2 border-neutral-950 shadow-lg rounded-xl overflow-auto" ref={modalRef}>
            <div className="flex justify-center">
              <h3 className="font-bold text-lg">今日も1日頑張りましたね</h3>
            </div>
            <div className="flex justify-center mt-6">
              <button className="btn" ref={mushroomButton}>きのこスタンプを押す</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}