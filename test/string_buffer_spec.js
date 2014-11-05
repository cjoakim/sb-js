(function() {
  describe('StringBuffer', function() {
    it("should construct an empty instance with no constructor argument", function() {
      var sb;
      sb = new StringBuffer();
      expect(sb.is_empty()).toBe(true);
      expect(sb.to_string()).toBe('');
      sb.add('x');
      expect(sb.is_empty()).toBe(false);
      return expect(sb.to_string()).toBe('x');
    });
    return it("should construct a populated instance with a constructor String argument", function() {
      var sb;
      sb = new StringBuffer('git');
      expect(sb.is_empty()).toBe(false);
      expect(sb.to_string()).toBe('git');
      sb.add('push');
      return expect(sb.to_string()).toBe('gitpush');
    });
  });

}).call(this);
