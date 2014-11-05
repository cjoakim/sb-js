# Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>

describe 'StringBuffer', ->

  it "should construct an empty buffer with no argument", ->
    sb = new StringBuffer()
    expect(sb.is_empty()).toBe(true)
