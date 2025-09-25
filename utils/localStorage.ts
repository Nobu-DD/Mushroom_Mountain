export function StorageGet() {
  const stamps: { year: string, month: string, day: string }[] = [];
  const allStamps: Storage = localStorage
  for (let i = 0; i < allStamps.length; i++) {
    const keyName: string = allStamps.key(i);
    const regex: RegExp = /^mush/;

    if (regex.test(keyName)) {
      const dataString: string = allStamps.getItem(keyName)
      const stamp: { year: string, month: string, day: string } = JSON.parse(dataString)
      stamps.push(stamp)
    }
  }
  return stamps;
}

export function StorageAdd(date: string) {
  console.log({ date })
}