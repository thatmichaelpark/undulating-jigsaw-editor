'use strict';
const fs = require('fs');
const path = '/Users/michaelpark/Projects/galvanize/q4/react-puzzle/app/assets/images/';

const readImageDirectory = (done) => {
  fs.readdir(path, function(err, items) {
    done(items);
  });
};

module.exports = readImageDirectory;
