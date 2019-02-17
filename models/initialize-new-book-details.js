const bookDetails = [];
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'initializenewbook.json'
);

module.exports = class InitializeNewBookDetails {
    
    constructor(bookOpeningType,
      riskBook,
      caseId,
      dataRequested,
      businessArea,
      requestedBy,
      bookSourceSysAttributes
    ) 
    {
      this.bookOpeningType = bookOpeningType;
      this.riskBook = riskBook;
      this.caseId = caseId;
      this.dataRequested = dataRequested;
      this.businessArea = businessArea;
      this.requestedBy = requestedBy;
      this.bookSourceSysAttributes = bookSourceSysAttributes;
    }

    save ()
    {
        bookDetails.push(this);
        fs.writeFile(p, JSON.stringify(bookDetails));
    }
};