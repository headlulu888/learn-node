const fs = require('fs')

const data = `
    Hello from NodeJS
`

fs.writeFileSync('nodejs.txt', data)

const result = fs.readFileSync('nodejs.txt', {
    encoding: "utf-8"
})

console.log(result)
console.log(__dirname)
console.log(__filename)