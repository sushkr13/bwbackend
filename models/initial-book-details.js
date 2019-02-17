const bookDetails = [];
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'initialbookdetails.json'
);

module.exports = class InitialBookDetails {
    
    constructor(bookopeningtype, riskBook) 
    {
        this.bookopeningtype = bookopeningtype;
        this.riskBook = riskBook;
    }

    static save (bookOpeningType, riskBook)
    {
        this.bookopeningtype= bookOpeningType;
        this.riskBook = riskBook;
        bookDetails.push(this);        
        fs.writeFile(p, JSON.stringify(bookDetails));
    }

};

