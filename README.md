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
sb = require(sb-js")
```

#### StringBuffer

Construct a StringBuffer, optionally provide an initial String value.

Methods add(), add_line(), newline(), to_string(), as_lines(), and is_empty() are available.

```
sb = new sb.StringBuffer()
sb.is_empty()  ->  false
sb.to_string() ->  ''
```

### Release History

* 2014-11-05   v0.0.1  alpha 1
