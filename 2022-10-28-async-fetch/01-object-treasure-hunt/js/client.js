/*************/
/* Example 1 */
/*************/

const character = {
  name: 'vestia',
  class: 'bard',
  health: 57,
  stats: {
    strength: 10,
    agility: 14,
    constitution: 11,
    intelligence: 16,
    charisma: 8
  },
  backpack: [
    'rope',
    'rations',
    'bag of holding'
  ],
  equippedItems: {
    head: 'helmet of smarts',
    leftHand: 'dagger',
    rightHand: null,
    armor: 'leather',
    feet: 'steel-toed boots'
  },
  statusEffects: {
    poisoned: true,
    fire: false,
    frozen: false,
    stunned: true,
    enchanted: false
  },
  isEnchanted: function() {
    return this.statusEffects.enchanted;
  }
}

// Character's Intelligence
console.log(character.stats.intelligence); // 16

// Second item in the character's backpack
console.log(character.backpack[1]); // 'rations'

// Character's name, capitalized
console.log(`${character.name.charAt(0).toUpperCase()}${character.name.slice(1).toLowerCase()}`) // Vestia

// The number of items in the character's backpack
console.log(character.backpack.length) // 3

// Is the character's right hand empty? true or false
console.log(!!!character.equippedItems.rightHand) // true

// Is the character enchanted? true or false
console.log(character.isEnchanted()) // false

// Remove rope from the character's backpack
console.log(character.backpack.shift(), character.backpack);