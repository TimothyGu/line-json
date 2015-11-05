exports.parse = function parse (str) {
  var array = str.split('\n')
  var out = []
  for (var i = 0; i < array.length; i++) {
    if (!array[i]) continue
    out.push(JSON.parse(array[i]))
  }
  return out
}

exports.stringify = function stringify (array, replacer) {
  if (!Array.isArray(array)) throw new Error('Input is not an array')

  var out = ''
  for (var i = 0; i < array.length; i++) {
    out = out + JSON.stringify(array[i], replacer) + '\n'
  }
  return out.slice(0, -1)
}
