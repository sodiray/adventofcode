import input from './data/3_day.js'

/**
 * Model to store coordinates
 * in x, y fashion
 */
const Model = {
  coor: (x, y) => ({ x, y })
}

/**
 * Given a coor set move traverse
 * the given x and y count
 */
const move = (x, y, coor) => Model.coor(coor.x + x, coor.y + y)

const get = (map, coor) => {
  const { x, y } = coor
  const lines = map.split('\n')
  if (y >= lines.length) return null
  const line = lines[y]
  if (x < line.length) return line[x]
  const relX = x % line.length
  return line[relX]
}

const traverse = (map, next) => {

  let current = Model.coor(0, 0)
  let count = 0
  let val = get(input, current)

  while (val) {
    current = next(current)
    val = get(input, current)
    if (val === '#') count++
  }

  return count

}

const next_1_1 = (coor) => move(1, 1, coor)
const next_3_1 = (coor) => move(3, 1, coor)
const next_5_1 = (coor) => move(5, 1, coor)
const next_7_1 = (coor) => move(7, 1, coor)
const next_1_2 = (coor) => move(1, 2, coor)

const results = [
  traverse(input, next_1_1),
  traverse(input, next_3_1),
  traverse(input, next_5_1),
  traverse(input, next_7_1),
  traverse(input, next_1_2)
]

console.log('results: ', results)
console.log('total: ', results.reduce((acc, r) => acc * r, 1))