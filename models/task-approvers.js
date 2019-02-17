const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'taskApprovers.json'
);

const fetchtaskApprovers = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(fileContent);
    }
  });
};

module.exports = class TaskApprovers {
    constructor(t) 
    {
        
    }
    
    static gettaskApprovers(cb)
    {
      fetchtaskApprovers(cb);
    }
};