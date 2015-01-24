###
Copyright 2015, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
###

os = require('os')


class StringBuffer

  @VERSION: '0.1.1'

  constructor: (s)->
    @data = []
    if s
      @data.push(s)

  add: (s) ->
    @data.push(s)

  add_line: (s) ->
    @data.push(s)
    @data.push(os.EOL)

  newline:  ->
    @data.push(os.EOL)

  to_string: (trim=false) ->
    if trim
      @data.join('').trim()
    else
      @data.join('')

  as_lines: ->
    this.to_string().split(os.EOL)

  is_empty: ->
    this.data.length == 0


root = exports ? this
root.StringBuffer = StringBuffer
