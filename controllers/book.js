const CostCentreDetails = require('../models/cost-centre-search');
const PersonDetails = require('../models/person-search')
const InitialBookDetails = require('../models/initial-book-details');
const RequestSummaryDetails = require('../models/request-summary-details');

exports.getCostCentre = (req, res) => 
{  
  const id = req.query.costCentreId;
  CostCentreDetails.findAll(id, costCentre => {
    res.send(JSON.stringify(costCentre));
  }
);
};

exports.postinitialbookdetails = (req, res) => 
{  
    const bookOpeningType = req.body.bookopeningtype;
    const riskBook = req.body.riskBook;
    InitialBookDetails.save(bookOpeningType, riskBook);
};

exports.getCostCentreById = (req, res) => 
{  
  const id = req.query.costCentreId;
  CostCentreDetails.findById(id, costCentre => {
    res.send(JSON.stringify(costCentre));
  }
);
};

exports.getRequestDetails = (req, res) => 
{  
  const id = "12345";
  RequestSummaryDetails.findById(id, summaryDetails => {
    res.send(JSON.stringify(summaryDetails));
  }
);
};


exports.getPersonDetails = (req, res) => 
{  
  const groupName = req.query.groupName;

  PersonDetails.findByGroupName(groupName, personDetails => {
    res.send(JSON.stringify(personDetails));
  }
);
};

