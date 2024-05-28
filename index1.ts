function findMaxPathSum(triangle: number[][]): number {
  for (let row = triangle.length - 2; row >= 0; row--) {
    for (let col = 0; col < triangle[row].length; col++) {
      triangle[row][col] += Math.max(
        triangle[row + 1][col],
        triangle[row + 1][col + 1]
      )
    }
  }

  return triangle[0][0]
}

const triangle = [[59], [73, 41], [52, 40, 53], [26, 53, 6, 34]]

console.log('findMaxPathSum', findMaxPathSum(triangle))
