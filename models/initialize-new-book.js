const bookDetails = [];
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'initializenewbook.json'
);

module.exports = class InitializeNewBook {
    
    constructor(isPrimary,
      isNewLedger,
      bookName,
      sourceSystem,
      sourceSystemLocation,
      valuationAdjustmentBookType,
      bookClassification,    
      glPostingStatus,
      walkerPostingIndicator,
      walkerPostingSource,
      crFeed,
      mrFeed,
      confirmationFlag,
      settlementFlag) 
    {
      this.isPrimary=isPrimary;
      this.isNewLedger=isNewLedger;
      this.bookName=bookName;
      this.sourceSystem=sourceSystem;
      this.sourceSystemLocation=sourceSystemLocation;
      this.valuationAdjustmentBookType=valuationAdjustmentBookType;
      this.bookClassification=bookClassification;
      this.glPostingStatus=glPostingStatus;
      this.walkerPostingIndicator=walkerPostingIndicator;
      this.walkerPostingSource=walkerPostingSource;
      this.crFeed=crFeed;
      this.mrFeed=mrFeed;
      this.confirmationFlag=confirmationFlag;
      this.settlementFlag=settlementFlag;
    }

    save ()
    {
        bookDetails.push(this);
        fs.writeFile(p, JSON.stringify(bookDetails));
    }
};