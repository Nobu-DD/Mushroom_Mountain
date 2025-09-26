export function StorageGet() {
  const stamps: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const keyName: string = localStorage.key(i);
    const regex: RegExp = /^mush/;

    if (regex.test(keyName)) {
      const dataString: string = localStorage.getItem(keyName)
      stamps.push(dataString)
    }
  }
  return stamps;
}

export function StorageAdd(date: string) {
  localStorage.setItem("mush-" + date, date)
}