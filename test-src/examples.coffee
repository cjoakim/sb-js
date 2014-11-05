###
This purpose of this file is to test the generated sb.js file, outside of jasmine,
before deployment to npm.  It (accurately) generates Examples section of the README.md
file based on actual working code and output.
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
###

sb = require("./lib/string_buffer.js")

console.log('')
console.log('### Examples')
console.log('')
console.log('#### Setup')
console.log('')
console.log('Add sb-js to your project or package.json file:')
console.log('```')
console.log('npm install sb-js')
console.log('```')
console.log('')
console.log('Require sb-js in your code:')
console.log('```')
console.log('sb = require(sb-js")')
console.log('```')
console.log('')

console.log('#### StringBuffer')
console.log('')
console.log('Construct a StringBuffer, optionally provide an initial String value.')
console.log('')
console.log('Methods val(), max_pulse(), add(), subtract() and training_zones() are available.')

sb = sb.StringBuffer()
sb.is_empty()
sb.add_line("Somewhere ages and ages hence:")
sb.add("Two roads diverged in a wood, ")
sb.add("and I -")
sb.newline()
sb.add_line("I took the one less traveled by,")
sb.add("And that has made")
sb.add(" all the difference.")
sb.newline()
poem = sb.to_string()

console.log(sb.to_string())
# Somewhere ages and ages hence:
# Two roads diverged in a wood, and I-
# I took the one less traveled by,
# And that has made all the difference.

console.log('a57 = new sb.Age("57.1")')
console.log('sb.to_string()  ->  ' + sb.to_string())
console.log('```')
console.log('')
