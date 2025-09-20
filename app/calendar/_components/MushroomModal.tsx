'use client'
import React, { useEffect, useRef } from "react"

export default function MushroomModal({ isOpenModal, setIsOpenModal }: { isOpenModal: boolean, setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) {

  // ------------------------------
  // 外部クリック時にモーダルを閉じる処理
  // ------------------------------
  // モーダル外のhtml要素を取得しておく為のhooksを定義(htmlタグに指定するので、最初はnullにしておく)
  const modalRef = useRef(null);
  // Propsを渡すことで起動する関数を定義(useEffect)
  useEffect(() => {
    // 画面外クリックでモーダルを閉じる処理が書かれている関数を定義(引数にMouseEventイベントを指定)
    function handleClickOutside(event: MouseEvent) {
      // modalRefに値が格納されている(モーダルが無ければnullのまま) かつ modalRefにhtml要素が含まれている場合
      if (modalRef.current && !(modalRef.current as HTMLElement).contains(event.target as Node)) {
        setIsOpenModal(false);
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
    };
  }, [isOpenModal,setIsOpenModal]);

  return (
    <>
      {isOpenModal &&
        <div className="fixed z-10 top-0 left-0 w-full h-full bg-accent/50">
          <div className="relative z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[95vh] md:max-h-[90vh] w-[80vw] md:w-[80vw] p-4 md:p-10 md:pb-20 bg-slate-100 border-2 border-neutral-950 shadow-lg rounded-xl overflow-auto" ref={modalRef}>
            <div className="flex justify-center">
              <h3 className="font-bold text-lg">今日も1日頑張りましたね</h3>
            </div>
            <div className="flex justify-center">
              <p className="py-4">きのこスタンプを押す</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}