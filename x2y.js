/**
 * TODO: add options to process more file types
 */
var fs = require('fs');
var converter = require('converter');

console.log("Converting " + process.argv[2] + "to yaml");
var reader = fs.createReadStream(process.argv[2]);
var convert = converter({
  from: 'xml',
  to: 'yml'
})

reader.pipe(convert).pipe(process.stdout);
