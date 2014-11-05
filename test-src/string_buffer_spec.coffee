# Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>

describe 'StringBuffer', ->

  it "should construct an empty instance with no constructor argument", ->
    sb = new StringBuffer()
    expect(sb.is_empty()).toBe(true)
    expect(sb.to_string()).toBe('')
    sb.add('x')
    expect(sb.is_empty()).toBe(false)
    expect(sb.to_string()).toBe('x')


  it "should construct a populated instance with a constructor String argument", ->
    sb = new StringBuffer('git')
    expect(sb.is_empty()).toBe(false)
    expect(sb.to_string()).toBe('git')
    sb.add('push')
    expect(sb.to_string()).toBe('gitpush')