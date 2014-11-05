(function() {
  var StringBuffer, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  StringBuffer = (function() {
    function StringBuffer(s) {
      this.data = [];
      if (s) {
        this.data.push(s);
      }
    }

    StringBuffer.prototype.add = function(s) {
      return this.data.push(s);
    };

    StringBuffer.prototype.add_line = function(s) {
      this.data.push(s);
      return this.data.push("\n");
    };

    StringBuffer.prototype.newline = function() {
      return this.data.push("\n");
    };

    StringBuffer.prototype.to_string = function(trim) {
      if (trim == null) {
        trim = false;
      }
      if (trim) {
        return this.data.join('').trim();
      } else {
        return this.data.join('');
      }
    };

    StringBuffer.prototype.as_lines = function() {
      return this.to_string().split("\n");
    };

    StringBuffer.prototype.is_empty = function() {
      return this.data.length === 0;
    };

    return StringBuffer;

  })();

  root.StringBuffer = StringBuffer;

}).call(this);
