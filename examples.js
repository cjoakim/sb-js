
/*
This purpose of this file is to test the generated sb.js file, outside of jasmine,
before deployment to npm.  It (accurately) generates Examples section of the README.md
file based on actual working code and output.
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
 */

(function() {
  var sb;

  sb = require("./lib/string_buffer.js");

  console.log('');

  console.log('### Examples');

  console.log('');

  console.log('#### Setup');

  console.log('');

  console.log('Add sb-js to your project or package.json file:');

  console.log('```');

  console.log('npm install sb-js');

  console.log('```');

  console.log('');

  console.log('Require sb-js in your code:');

  console.log('```');

  console.log('sb = require("sb-js")');

  console.log('```');

  console.log('');

  console.log('#### StringBuffer');

  console.log('');

  console.log('Construct a StringBuffer, optionally provide an initial String value.');

  console.log('');

  console.log('Methods add(), add_line(), newline(), to_string(), as_lines(), and is_empty() are available.');

  console.log('```');

  sb = new sb.StringBuffer();

  console.log('sb = new sb.StringBuffer()');

  console.log('sb.is_empty()  -> ' + sb.is_empty());

  sb.add("one");

  console.log('sb.add("line one")');

  console.log('sb.is_empty()  -> ' + sb.is_empty());

  sb.add(",two");

  console.log('sb.add(",two")');

  console.log('sb.to_string()  -> "' + sb.to_string() + '"');

  sb.newline();

  console.log('sb.newline()');

  sb.add_line("three");

  console.log('sb.add_line("three")');

  console.log('');

  console.log('sb.to_string()  -> "' + sb.to_string() + '"');

  console.log('');

  console.log('sb.as_lines()  -> "' + JSON.stringify(sb.as_lines()) + '"');

  console.log('```');

  console.log('');

}).call(this);
