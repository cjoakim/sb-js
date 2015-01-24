###
Copyright 2015, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
###

# grunt ; mocha test/string_buffer_test.js

assert = require("assert")
should = require('should')
os     = require('os')

StringBuffer = require('../lib/string_buffer.js').StringBuffer


describe 'StringBuffer', ->

  describe 'constructor methods', ->

    it 'defines VERSION', ->
      (StringBuffer.VERSION).should.eql('0.1.1')

    it "should construct an empty instance with no constructor argument", ->
      sb = new StringBuffer()
      (sb.to_string()).should.eql('')
      (sb.is_empty()).should.eql(true)
      sb.add('x')
      (sb.to_string()).should.eql('x')
      (sb.is_empty()).should.eql(false)


    it "should construct a populated instance with a constructor String argument", ->
      sb = new StringBuffer('git')
      (sb.is_empty()).should.eql(false)
      (sb.to_string()).should.eql('git')
      sb.add(' push')
      (sb.to_string()).should.eql('git push')

    it "should implement method 'as_lines'", ->
      sb = new StringBuffer("first" + os.EOL + "second")
      sb.newline()
      sb.add_line("third")
      (sb.as_lines()).should.eql(['first', 'second', 'third', ''])

    it "should optionally trim the result of to_string", ->
      sb1 = new StringBuffer('  git  ')
      (sb1.to_string()).should.eql('  git  ')
      sb2 = new StringBuffer('  git  ')
      (sb1.to_string(true)).should.eql('git')
