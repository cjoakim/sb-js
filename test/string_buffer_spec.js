(function() {
  describe('StringBuffer', function() {
    return it("should construct an empty buffer with no argument", function() {
      var sb;
      sb = new StringBuffer();
      return expect(sb.is_empty()).toBe(true);
    });
  });

}).call(this);
