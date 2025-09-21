'use client'
export default function LocalStorage() {
  const stamps: { year: string, month: string, day: string }[] = [];
  // ページ読み込み時にローカルストレージからデータを取り出す処理を記述
  function StorageGet(){
    for (let i = 0; i < localStorage.length; i++) {
      const keyName: string = localStorage.key(i);
      const regex: RegExp = /^mush/;

      if (regex.test(keyName)) {
        const dataString: string = localStorage.getItem(keyName)
        const stamp: { year: string, month: string, day: string } = JSON.parse(dataString)
        stamps.push(stamp)
      }
    }
    return stamps;
  }
}