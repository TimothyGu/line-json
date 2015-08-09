# line-json

Parses and stringifies JSON arrays delimited by lines.

[![Build Status](https://img.shields.io/travis/TimothyGu/line-json/master.svg)](https://travis-ci.org/TimothyGu/line-json)
[![devDependencies Status](https://img.shields.io/david/dev/TimothyGu/line-json.svg)](https://david-dm.org/TimothyGu/line-json#info=devDependencies)
[![NPM version](https://img.shields.io/npm/v/line-json.svg)](https://www.npmjs.org/package/line-json)

This is useful when you have a large amount of data in an array, and you feel that the bracket expression is too clumsy.

## Installation

    npm install line-json

## Usage

```js
var lineJSON = require('line-json')

var result = lineJSON.stringify([ 'a', 'b', { c: 'd' } ])
// '"a"\n"b"\n{"c":"d"}'

lineJSON.parse(result)
// [ 'a', 'b', { c: 'd' } ]
```

## License

MIT
