## sb-js

### Purpose

A Node.js library implementing a simple StringBuffer, much like the Java class.

Efficiently uses an Array internally, rather than continually appending Strings.

### Examples

#### Setup

Add sb-js to your project or package.json file:
```
npm install sb-js
```

Require sb-js in your code:
```
sb = require("sb-js")
```

#### StringBuffer

Construct a StringBuffer, optionally provide an initial String value.

Methods add(), add_line(), newline(), to_string(), as_lines(), and is_empty() are available.
```
b = new sb.StringBuffer()
b.is_empty()  -> true
b.to_string() -> ""

b.add("one")
b.is_empty()  -> false

b.add(",two")
b.to_string() -> "one,two"

b.newline()
b.add_line("three")

b.to_string() -> "one,two
three
"
b.as_lines()  -> "["one,two","three",""]"

b2 = new sb.StringBuffer("hello world")
b2.is_empty()  ->  false
b2.to_string() -> "hello world"
b2.as_lines()  -> "["hello world"]"

sb.StringBuffer.VERSION  -> 0.1.0
```

### Release History

* 2014-11-06   v0.1.0  Initial working version.
* 2014-11-06   v0.0.1  alpha 1
