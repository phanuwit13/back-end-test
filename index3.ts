interface Result {
  beef: {
    [key: string]: number
  }
}

const groupBeef = (str: String) => {
  const result: Result = {
    beef: {},
  }
  let rawWord = str
  rawWord = rawWord.replace(/[.,]/g, ' ') //แทน จุดและคอมมา ด้วย ช่องว่าง
  rawWord = rawWord.replace(/\s+/g, ' ') //แทน ช่องว่างทั้งหมด ด้วย 1 ช่องว่าง
  const arrBeef = rawWord.trim().split(' ')//ลบช่องว่างหน้าหลัง และ แปลงเป็น array
  for (let i = 0; i < arrBeef.length; i++) {
    if (result.beef[arrBeef[i]]) {
      result.beef[arrBeef[i]] = result.beef[arrBeef[i]] + 1
    } else {
      result.beef[arrBeef[i]] = 1
    }
  }
  console.log(result)
}

const main = async () => {
  const response = await fetch(
    'https://baconipsum.com/api/?type=meat-and-filler&paras=99&format=text'
  )
  const data = await response.text()
  groupBeef(data)
}
main()
