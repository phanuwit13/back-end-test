const decodeValue = (code: string): string => {
  const array = code.split('')
  const result = new Array(array.length + 1).fill(0)

  for (let i = 0; i < array.length; i++) {
    if (array[i] === '=') {
      result[i + 1] = result[i]
    } else if (array[i] === 'R') {
      result[i + 1] = result[i] + 1
    } else if (array[i] === 'L') {
      if (i === 0) {
        result[i] = 1
      } else if (result[i] === 0) {
        result[i] = 1
        for (let j = i; j > 0; j--) {
          if (array[j - 1] === 'L') {
            result[j - 1]++
          } else if (array[j - 1] === '=') {
            result[j - 1] = result[j]
          }
        }
      }
    }
  }

  return result.join('')
}
console.log('LLRR= : ', decodeValue('LLRR='))
console.log('==RLL : ', decodeValue('==RLL'))
console.log('=LLRR : ', decodeValue('=LLRR'))
console.log('RRL=R : ', decodeValue('RRL=R'))
