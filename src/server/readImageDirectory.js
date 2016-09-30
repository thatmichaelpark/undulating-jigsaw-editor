'use strict';
const fs = require('fs');
const path =
  '/Users/michaelpark/Projects/galvanize/q4/react-puzzle/app/assets/images/';

const readImageDirectory = (done) => {
  fs.readdir(path, done);
};

module.exports = readImageDirectory;
