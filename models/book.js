const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'sourcesystemcombinations.json'
);

const fetchsscomb = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(fileContent);
    }
  });
};

module.exports = class Book {
    constructor(t) 
    {
        this.description = t;
    }
    
    static sourcesystemcombinations(cb)
    {
        fetchsscomb(cb);
    }
};