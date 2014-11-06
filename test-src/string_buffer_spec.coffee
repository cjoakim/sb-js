###
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
###

describe 'StringBuffer', ->

  it 'defines VERSION', ->
    expect(StringBuffer.VERSION).toBe('0.1.0')

  it "should construct an empty instance with no constructor argument", ->
    sb = new StringBuffer()
    expect(sb.to_string()).toEqual('')
    expect(sb.is_empty()).toEqual(true)
    expect(sb.to_string()).toEqual('')
    sb.add('x')
    expect(sb.is_empty()).toEqual(false)
    expect(sb.to_string()).toEqual('x')

  it "should construct a populated instance with a constructor String argument", ->
    sb = new StringBuffer('git')
    expect(sb.is_empty()).toEqual(false)
    expect(sb.to_string()).toEqual('git')
    sb.add(' push')
    expect(sb.to_string()).toEqual('git push')

  it "should implement method 'as_lines'", ->
    sb = new StringBuffer("first\nsecond")
    sb.newline()
    sb.add_line("third")
    expect(sb.as_lines()).toEqual(['first', 'second', 'third', ''])
