const personSearchDetails = [];
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'personsearchdetails.json'
);

const fetchpersondetails = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class PersonSearchDetails {
    
    static findByGroupName(groupName, cb) 
    {
      fetchpersondetails(persondetails => 
        {
          const personDetails = persondetails.filter(f => f.groupName === groupName); 
          cb(personDetails);
        });  
      
    }
  }
    
    