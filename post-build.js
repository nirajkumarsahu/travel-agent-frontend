var fs = require('fs');
var mv = require('mv');

var dirs = ['.next/_next', '.next/_next/static'];

const STATIC_PATH = {
  old: '.next/static',
  new: '.next/_next/static'
};

// create dir
dirs.forEach(item => {
  fs.mkdirSync(item);
});

mv(STATIC_PATH.old, STATIC_PATH.new, { mkdirp: true }, function(err) {
  if (err) console.log(err);
});