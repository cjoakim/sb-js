###
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
###

root = exports ? this

class StringBuffer

  @VERSION: '0.1.0'

  constructor: (s)->
    @data = []
    if s
      @data.push(s)

  add: (s) ->
    @data.push(s)

  add_line: (s) ->
    @data.push(s)
    @data.push("\n")

  newline:  ->
    @data.push("\n")

  to_string: (trim=false) ->
    if trim
      @data.join('').trim()
    else
      @data.join('')

  as_lines: ->
    this.to_string().split("\n")

  is_empty: ->
    this.data.length == 0

root.StringBuffer = StringBuffer
