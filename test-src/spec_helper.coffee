
# See https://www.packtpub.com/sites/default/files/downloads/7204OS_The_Future_Jasmine_2_0.pdf

beforeEach ->

  jasmine.Expectation.addMatchers({

    is11: () ->
      {
        compare: (actual) ->
          if actual == 11
            { pass: true, message: '' }
          else
            { pass: false, message: '' + actual + ' is not 11' }
      }
  })
