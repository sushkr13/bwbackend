const costCentreDetails = [];
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'costcentredetails.json'
);

const q = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'costcentreinformation.json'
);

const fetchCostCentres = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

const fetchCostCentre = cb => {
  fs.readFile(q, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class CostCentreDetails {
    
    static findById(id, cb) 
    {
      fetchCostCentre(costCentres => 
        {
          const cc = costCentres.find(f => f.costCentreId === id); 
          cb(cc);
        });  
      
    }

    static findAll(id, cb) 
    {
      fetchCostCentres(costCentres => 
        {
          const cc = costCentres.filter(f => f.costCentreId === id); 
          cb(cc);
        });  
      
    }

  }
    
    