// complete the challenge here 👇

// Spell Declaration
function createPotion (baseIngredient = 'water', catalystIngredient = 'moonstone dust', powerBooster = 'dragon breath') {
  return `A mystical brew of: ${baseIngredient}, ${catalystIngredient}, ${powerBooster}!`
}

console.log(createPotion())
console.log(createPotion('witch hazel'))
console.log(createPotion('toadstool extract', 'pixie wings'))
console.log(createPotion('shadow essence', 'vampire tears', 'phoenix breath'))

console.log()

// Enhancement Expression
const castCharm = function (name) {
  return `May luck and fortune smile upon: ${name}`
}
console.log(castCharm('Elara the Elf'))

// Arcane Arrow Function
const calculateSpellPower = (age) => {
  return `Spell power: ${age * 10}`
}
console.log(calculateSpellPower(25))

console.log()

// Spellbook Array

const castFireball = (power) => {
  return `Fireball blazes with power ${power}!`
}

const summonWaterSpout = (power) => {
  return `Water spout surges with power ${power}!`
}

const callLightning = (power) => {
  return `Lighting strikes with power ${power}!`
}

const elementalSpells = [
  castFireball,
  summonWaterSpout,
  callLightning
]

for (let i = 0; i < elementalSpells.length; i++) {
  console.log(elementalSpells[i](i + 1))
}

console.log()

// Magical Condition
const determineSpellStrength = (power) => {
  if (power > 100) {
    return 'Strong'
  } else if (power >= 50) {
    return 'Moderate'
  } else {
    return 'Weak'
  }
}

console.log(determineSpellStrength(30))
console.log(determineSpellStrength(75))
console.log(determineSpellStrength(150))
console.log()

// Familiar Task
const transformIngredients = (ingredients, transformation) => {
  const results = []

  for (let i = 0; i < ingredients.length; i++) {
    results.push(transformation(ingredients[i]))
  }
  return results
}

const result = transformIngredients([
  'newt eyes',
  'toe of frog',
  'wool of bat',
  'tongue of dog'
], (ingredient) => `enchanted ${ingredient}`)

console.log(result)

