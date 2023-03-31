const { readFileSync, writeFileSync } = require('fs')
const { syncBuiltinESMExports } = require('module')
console.log('start')
const first = readFileSync('../content/first.txt', 'utf8')
const second = readFileSync('../content/second.txt', 'utf8')

//console.log(first, second)

//flag a indicates where the next text start 
writeFileSync(
    '../content/result-syncBuiltinESMExports.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}
    )

console.log('done with this task')
console.log('starting the next one')