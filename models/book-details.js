const bookDetails = [];
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'bookdetailsstagethree.json'
);

module.exports = class BookDetails {
    
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
        comments,
        workflowStage
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
      this.workflowStage="Front Office";
    }

    save ()
    {
        console.log('csd' + bookDetails);
        console.log('csd1' + this);
        bookDetails.push(this);
        fs.writeFile(p, JSON.stringify(bookDetails));
    }
};