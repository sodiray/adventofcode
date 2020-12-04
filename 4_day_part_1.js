import input from './data/4_day.js'

// Split the input by the empty line seperating
// card content
const cards = input.split('\n\n').map(str => {

  // find all the {key}:{value} looking parts
  const regex = /([\w\d]+?)\:([\#\w\d]+?)[\n\s]/g
  const matches = Array.from((`${str}\n`).matchAll(regex))

  // every match is a {key}:{value} so parse the
  // key, value from the regex match and add it
  // to the new card object
  return matches.reduce((acc, match) => {
    const [,key,val,...rest] = match
    return {
      ...acc,
      [key]: val
    }
  }, { /** new card object **/})

})


const isValid = (card) => {
  // Card is invalid if any of the following
  // fields are missing
  if (card.byr === undefined) return false
  if (card.iyr === undefined) return false
  if (card.eyr === undefined) return false
  if (card.hcl === undefined) return false
  if (card.ecl === undefined) return false
  if (card.pid === undefined) return false
  return true
}

const validCount = cards.filter(isValid).length

console.log('count: ', validCount)