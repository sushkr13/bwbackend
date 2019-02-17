const bookDetails = [];
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'bookdetailsstagethree.json'
);

const fetchRequestDetails = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };
  

module.exports = class RequestSummaryDetails {
    
    constructor(
        bookOpeningType, 
        riskBook, 
        caseId, 
        dateRequested, 
        businessArea, 
        requestedBy, 
        bookSourceSysAttributes,
        costCentreId, 
        costCentreDescription, 
        activeIndicator, 
        walkerBusinessUnit,
        tradingBankingIndicator, 
        countryTradingLocation, 
        ledgerSetsBookId,
        legalEntityLevel, 
        bookBalanceSheetEntity, 
        balanceSheetCity,
        division, 
        frontOffice, 
        financeCostCentreOwner, 
        delegateCostCentreOwner,
        traderId, 
        secondaryTrader, 
        sourceBookOwner, 
        personSearchViewResult,
        effectiveDate, 
        comments
    ) 
    {
      this.bookOpeningType=bookOpeningType; 
      this.riskBook=riskBook; 
      this.caseId=caseId;
      this.dateRequested=dateRequested; 
      this.businessArea=businessArea;
      this.requestedBy=requestedBy;
      this.bookSourceSysAttributes=bookSourceSysAttributes;
      this.costCentreId = costCentreId;
      this.costCentreDescription = costCentreDescription;
      this.activeIndicator = activeIndicator;
      this.walkerBusinessUnit = walkerBusinessUnit;
      this.tradingBankingIndicator = tradingBankingIndicator;
      this.countryTradingLocation = countryTradingLocation;
      this.ledgerSetsBookId = ledgerSetsBookId;
      this.legalEntityLevel = legalEntityLevel;
      this.bookBalanceSheetEntity = bookBalanceSheetEntity;
      this.balanceSheetCity = balanceSheetCity;
      this.division = division;
      this.frontOffice = frontOffice;
      this.financeCostCentreOwner = financeCostCentreOwner;
      this.delegateCostCentreOwner = delegateCostCentreOwner;
      this.traderId = traderId;
      this.secondaryTrader = secondaryTrader;
      this.sourceBookOwner = sourceBookOwner;
      this.personSearchViewResult = personSearchViewResult;
      this.effectiveDate = effectiveDate;
      this.comments= comments;
    }

    static findById(id, cb) 
    {
        fetchRequestDetails(requestDetails => 
        {
          const cc = requestDetails.find(f => f.caseId === id); 
          cb(cc);
        });  
      
    }
};