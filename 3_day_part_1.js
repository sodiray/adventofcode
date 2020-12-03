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

const nextCoor = (coor) => move(3, 1, coor)

let current = Model.coor(0, 0)
let count = 0
let val = get(input, current)

while (val) {
  current = nextCoor(current)
  val = get(input, current)
  if (val === '#') count++
}

console.log('count => ', count)