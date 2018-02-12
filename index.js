<<<<<<< HEAD
function theBeatlesPlay(musicians, instruments) {
  const array = []
  
  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  const array = []
  
  let i = 0;
  while(i < facts.length) {
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
=======
function theBeatlesPlay(musicians,instruments) {
  const array= []
  
  for (let i= 0; l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
    
  return array
}
function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
>>>>>>> df377f8df457a334c5d87178af469e2ddfe491c5
}

function iLoveTheBeatles(n) {
  const arr = []
<<<<<<< HEAD
  
  do {
    arr.push('I love the Beatles!')
    n++
  }
  while (n < 15)
  
=======

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

>>>>>>> df377f8df457a334c5d87178af469e2ddfe491c5
  return arr
}