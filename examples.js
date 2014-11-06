
/*
This purpose of this file is to test the generated sb.js file, outside of jasmine,
before deployment to npm.  It (accurately) generates Examples section of the README.md
file based on actual working code and output.
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
 */

(function() {
  var b, b2, sb;

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

  b = new sb.StringBuffer();

  console.log('b = new sb.StringBuffer()');

  console.log('b.is_empty()  -> ' + b.is_empty());

  console.log('b.to_string() -> "' + b.to_string() + '"');

  console.log('');

  b.add("one");

  console.log('b.add("one")');

  console.log('b.is_empty()  -> ' + b.is_empty());

  console.log('');

  b.add(",two");

  console.log('b.add(",two")');

  console.log('b.to_string() -> "' + b.to_string() + '"');

  console.log('');

  b.newline();

  console.log('b.newline()');

  b.add_line("three");

  console.log('b.add_line("three")');

  console.log('');

  console.log('b.to_string() -> "' + b.to_string() + '"');

  console.log('b.as_lines()  -> "' + JSON.stringify(b.as_lines()) + '"');

  console.log('');

  b2 = new sb.StringBuffer("hello world");

  console.log('b2 = new sb.StringBuffer("hello world")');

  console.log('b2.is_empty()  ->  ' + b2.is_empty());

  console.log('b2.to_string() -> "' + b2.to_string() + '"');

  console.log('b2.as_lines()  -> "' + JSON.stringify(b2.as_lines()) + '"');

  console.log('');

  console.log('sb.StringBuffer.VERSION  -> ' + sb.StringBuffer.VERSION);

  console.log('```');

  console.log('');

}).call(this);
