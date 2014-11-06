## sb-js

### Purpose

A Node.js library implementing a simple StringBuffer, much like the Java class.

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
sb = new sb.StringBuffer()
sb.is_empty()  -> true
sb.add("line one")
sb.is_empty()  -> false
sb.add(",two")
sb.to_string()  -> "one,two"
sb.newline()
sb.add_line("three")

sb.to_string()  -> "one,two
three
"

sb.as_lines()  -> "["one,two","three",""]"
```


### Release History

* 2014-11-06   v0.0.1  alpha 1
