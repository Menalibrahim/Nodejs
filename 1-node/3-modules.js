/*const secret = 'SUPER SECRET'
const nati = 'nati'
const ela = 'ela'

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}
*/

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')
sayHi('suzan')
sayHi(names.nati)
sayHi(names.ela)