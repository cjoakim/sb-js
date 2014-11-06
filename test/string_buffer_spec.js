
/*
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
 */

(function() {
  describe('StringBuffer', function() {
    it("should construct an empty instance with no constructor argument", function() {
      var sb;
      sb = new StringBuffer();
      expect(sb.is_empty()).toEqual(true);
      expect(sb.to_string()).toEqual('');
      sb.add('x');
      expect(sb.is_empty()).toEqual(false);
      return expect(sb.to_string()).toEqual('x');
    });
    it("should construct a populated instance with a constructor String argument", function() {
      var sb;
      sb = new StringBuffer('git');
      expect(sb.is_empty()).toEqual(false);
      expect(sb.to_string()).toEqual('git');
      sb.add(' push');
      return expect(sb.to_string()).toEqual('git push');
    });
    return it("should implement method 'as_lines'", function() {
      var sb;
      sb = new StringBuffer("first\nsecond");
      sb.newline();
      sb.add_line("third");
      return expect(sb.as_lines()).toEqual(['first', 'second', 'third', '']);
    });
  });

}).call(this);
