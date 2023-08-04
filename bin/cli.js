const { program } = require('commander')

// action
program.action(cmd => console.log('Hello World'))

program.parse(process.argv)