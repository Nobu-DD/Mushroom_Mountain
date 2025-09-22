export function StorageGet() {
  const stamps: { year: string, month: string, day: string }[] = [];
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