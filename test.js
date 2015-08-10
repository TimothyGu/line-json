var assert = require('assert')
var testit = require('testit')
var lineJSON = require('./')

testit('combined', function () {
  function test (array) {
    testit(JSON.stringify(array), function () {
      var stringified = lineJSON.stringify(array)
      assert.deepEqual(lineJSON.parse(stringified), array);
    })
  }

  test(['abc', {'afds': 'adsf'}, 4, null, false])
  test([null, ['a', 'b', null, false]])
})

testit('parse', function () {
  testit('throws on invalid input', function () {
    ['', '\n', '"abc"\n', "'abc'"].forEach(function (input) {
      assert.throws(function () {
        lineJSON.parse(input)
      })
    })
  })
})

testit('stringify', function () {
  testit('throws on non-array input', function () {
    [{}, 'a', undefined, null, false, true, 5].forEach(function (input) {
      assert.throws(function () {
        lineJSON.stringify(input)
      }, /not an array/)
    })
  })
  testit('replacer works', function () {
    var input = [ 'a', 'b', { 'c': 'd' } ]
    var i = 0
    var actual = lineJSON.stringify(input, function (a, original) {
      assert.deepEqual(input[i++], original)
      return 'SENTINEL'
    })
    assert.equal(actual, '"SENTINEL"\n"SENTINEL"\n"SENTINEL"')
  })
})
