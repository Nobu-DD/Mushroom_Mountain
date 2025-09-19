'use client'
import React, { useEffect, useRef } from "react"

export default function MushroomModal({ isOpenModal, setIsOpenModal }: { isOpenModal: boolean, setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) {

  const modalRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !(modalRef.current as HTMLElement).contains(event.target as Node)) {
        setIsOpenModal(false);
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [setIsOpenModal]);

  return (
    <>
      {isOpenModal &&
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">今日も1日頑張りましたね</h3>
            <p className="py-4">きのこスタンプを押す</p>
          </div>
        </dialog>
      }
    </>
  )
}