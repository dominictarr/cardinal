#!/usr/bin/env node
var cardinal = require('..')
  , utl = require('../utl')
  , args = process.argv
  , highlighted
  , options = require('rc')('cardinal', {theme: 'simple'})
  , path = require('path')
  ;

if(options.theme) {
  options.theme = require(path.join(__dirname, '..', 'themes', options.theme))
}

function usage() {
  var msg = [ 
      'Usage: cdl <filename.js> [options]'
    , ''
    , 'Options (~/.cardinalrc overrides):'
    , '  --nonum: turn off line printing'
    , ''
    , 'Unix Pipe Example: cat filename.js | grep console | cdl'
    , ''
  ].join('\n');
  console.log(msg);
}

if(!process.stdin.isTTY) {
  var data = ''
  process.stdin.on('data', function (d) {
    data += d
  })
  .on('end', function () {
    process.stdout.write(cardinal.highlight(data, options))
  })
}
else
  try {
    console.log(cardinal.highlightFileSync(options._[0], options));
  } catch (e) {
    console.trace();
    console.error(e);
  }

