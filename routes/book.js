const path = require('path');

const express = require('express');

const controller = require('../controllers/book');

const InitializeNewBook = require('../models/initialize-new-book');
const InitializeNewBookDetails = require('../models/initialize-new-book-details');
const BookDetails = require('../models/book-details');
const ApproverDetails = require('../models/task-approvers');

const router = express.Router();

router.post('/authenticateUser', (req, res) => {
    switch(req.body.userId)
    {
    case 'krissht':
    {
      res.send({isAuthenticated:'true',userName:'Sushant Krishnia',ringFenceMarker:'OTRF'});
      break;
    }
    case 'sachdas':
    {
      res.send({isAuthenticated:'true',userName:'Ashish Sachdev',ringFenceMarker:'ITRF'});
      break;
    }
    case 'bansasq':
    {
      res.send({isAuthenticated:'true'});
      break;
    }
    case 'senrb':
    {
      res.send({isAuthenticated:'true'});
      break;
    }
    default:
    {
      res.send({isAuthenticated:'false'});
      break;
    }
  }
 }
)

router.post('/initializeNewBook', (req, res) => {
    let newBookDetails = new InitializeNewBookDetails (        
        req.body.bookOpeningType,
        req.body.riskBook,
        req.body.caseId,
        req.body.dateRequested,
        req.body.businessArea,
        req.body.requestedBy, 
        req.body.bookSourceSysAttributes
    );
    newBookDetails.save();
    console.log(req.body.bookSourceSysAttributes);
    res.send({caseId:'12345', dateRequested:new Date().toLocaleDateString(), requestedBy:'krissht', 
    businessArea:req.body.businessArea, bookSourceSysAttributes:req.body.bookSourceSysAttributes});
});

router.post('/saveBookDetails', (req, res) => {
    console.log(req.body);
    console.log(req.body.ledgerSetsBookId);
    let bookDetails = new BookDetails ( 
        req.body.bookOpeningType, 
        req.body.riskBook, 
        req.body.caseId, 
        req.body.dateRequested, 
        req.body.businessArea, 
        req.body.requestedBy, 
        req.body.bookSourceSysAttributes,       
        req.body.costCentreId, 
        req.body.costCentreDescription, 
        req.body.activeIndicator, 
        req.body.walkerBusinessUnit,
        req.body.tradingBankingIndicator, 
        req.body.countryTradingLocation, 
        req.body.ledgerSetsBookId,
        req.body.legalEntityLevel, 
        req.body.bookBalanceSheetEntity, 
        req.body.balanceSheetCity,
        req.body.division, 
        req.body.frontOffice, 
        req.body.financeCostCentreOwner, 
        req.body.delegateCostCentreOwner,
        req.body.traderId, 
        req.body.secondaryTrader, 
        req.body.sourceBookOwner, 
        req.body.personSearchViewResult,
        req.body.effectiveDate, 
        req.body.comments,
        req.body.workflowStage
    );
    console.log(bookDetails);
    bookDetails.save();    
    res.send({
    bookOpeningType:req.body.bookOpeningType, 
    riskBook:req.body.riskBook, 
    caseId:req.body.caseId, 
    dateRequested:req.body.dateRequested, 
    businessArea:req.body.businessArea, 
    requestedBy:req.body.requestedBy, 
    bookSourceSysAttributes:req.body.bookSourceSysAttributes,    
    costCentreId:req.body.costCentreId, 
    costCentreDescription:req.body.costCentreDescription, 
    activeIndicator:req.body.activeIndicator, 
    walkerBusinessUnit:req.body.walkerBusinessUnit,
    tradingBankingIndicator:req.body.tradingBankingIndicator, 
    countryTradingLocation:req.body.countryTradingLocation, 
    ledgerSetsBookId:req.body.ledgerSetsBookId, 
    legalEntityLevel:req.body.legalEntityLevel, 
    bookBalanceSheetEntity:req.body.bookBalanceSheetEntity, 
    balanceSheetCity:req.body.balanceSheetCity,
    division:req.body.division, 
    frontOffice:req.body.frontOffice, 
    financeCostCentreOwner:req.body.financeCostCentreOwner, 
    delegateCostCentreOwner:req.body.delegateCostCentreOwner, 
    traderId:req.body.traderId, 
    secondaryTrader:req.body.secondaryTrader, 
    sourceBookOwner:req.body.sourceBookOwner, 
    personSearchViewResult:req.body.personSearchViewResult,
    effectiveDate:req.body.effectiveDate, 
    comments:req.body.comments,
    workflowStage:"Front Office"
});
});



router.post('/initiateNewBook', (req, res) => {
    let newBookDetails = new InitializeNewBook (        
        req.body.isPrimary,
        req.body.isNewLedger,
        req.body.bookName,
        req.body.sourceSystem, 
        req.body.sourceSystemLocation,
        req.body.valuationAdjustmentBookType,
        req.body.bookClassification,    
        req.body.glPostingStatus,
        req.body.walkerPostingIndicator,
        req.body.walkerPostingSource,
        req.body.crFeed,
        req.body.mrFeed,
        req.body.confirmationFlag,
        req.body.settlementFlag
    );
    newBookDetails.save();
});


router.get('/costcentresearch', controller.getCostCentre);

router.get('/costcentresearchbyid', controller.getCostCentreById);

router.post('/getRequestDetails', controller.getRequestDetails);


router.get('/userstasks', (req, res) => 
{
res.json([{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78949", "SLA": "Red", "workflowStage": "BOOK_REQUESTER", "requestedBy": "sachdas", 
"bookName": "GDS456", "workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "GDS"},
{"requestId": "78990", "SLA": "Amber", "workflowStage": "BOOK_REQUESTER", "requestedBy": "bansasq", 
"bookName": "GTE456", "workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "GTE"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"}
] ) } );

router.get('/departmentstasks', (req, res) => 
{
res.json([{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78949", "SLA": "Red", "workflowStage": "BOOK_REQUESTER", "requestedBy": "sachdas", 
"bookName": "GDS456", "workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "GDS"},
{"requestId": "78990", "SLA": "Amber", "workflowStage": "BOOK_REQUESTER", "requestedBy": "bansasq", 
"bookName": "GTE456", "workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "GTE"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"}
] ) } );

router.get('/initiatedtasks', (req, res) => 
{
res.json([{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78949", "SLA": "Red", "workflowStage": "BOOK_REQUESTER", "requestedBy": "sachdas", 
"bookName": "GDS456", "workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "GDS"},
{"requestId": "78990", "SLA": "Amber", "workflowStage": "BOOK_REQUESTER", "requestedBy": "bansasq", 
"bookName": "GTE456", "workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "GTE"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"}
] ) } );

router.get('/uninitiatedtasks', (req, res) => 
{
res.json([{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78949", "SLA": "Red", "workflowStage": "BOOK_REQUESTER", "requestedBy": "sachdas", 
"bookName": "GDS456", "workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "GDS"},
{"requestId": "78990", "SLA": "Amber", "workflowStage": "BOOK_REQUESTER", "requestedBy": "bansasq", 
"bookName": "GTE456", "workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "GTE"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"},
{"requestId": "78969", "SLA": "Green", 
"workflowStage": "BOOK_REQUESTER", "requestedBy": "krissht", "bookName": "CALB456",
"workflowStatus": "PENDING", "bookType": "BOOK_OPEN", "sourceSystem": "Calypso"}
] ) } );


router.get('/sourcesystemcombinations', (req, res) => res.json([{"parentsourcesystem": "ECO", "additionalsourcesystem": "Wall Street Global, Wallstreet Natwest CLS, Wall Street RBS, Wall Street Natwest, Wallstreet CLS"},
{"parentsourcesystem": "Apex", "additionalsourcesystem": "Apex"},
{"parentsourcesystem": "Wall Street Global", "additionalsourcesystem": "Wallstreet Natwest CLS, Wall Street RBS, Wall Street Natwest, Wallstreet CLS"},
{"parentsourcesystem": "Treasury Management System (Murex)", "additionalsourcesystem": "Treasury Management System (Murex)"},
{"parentsourcesystem": "Calypso", "additionalsourcesystem": "Anvil, Bloomberg, GDS, ARCHER"},
{"parentsourcesystem": "System-X", "additionalsourcesystem": "Wall Street Global, Wallstreet Natwest CLS, Wall Street RBS, Wall Street Natwest, Wallstreet CLS, Rolfe & Nolan"},
{"parentsourcesystem": "GTE", "additionalsourcesystem": "GTE, ADP, FNX, Bloomberg (TOMS), Calypso, GDS, GFX, ICE, Ronnie, System-X, Wall Street Global, Wallstreet Natwest CLS, Wall Street RBS, Wall Street Natwest, Wallstreet CLS"},
{"parentsourcesystem": "GDS", "additionalsourcesystem": "Links - Futures, ICE, Calypso, Sigma, NPP, Bloomberg, CAF, Rolfe & Nolan"}
, {"parentsourcesystem": "Treasury Management System (Murex)", "additionalsourcesystem": "Treasury Management System (Murex)"},
{"parentsourcesystem": "Calypso", "additionalsourcesystem": "Anvil, Bloomberg, GDS, ARCHER"},
{"parentsourcesystem": "System-X", "additionalsourcesystem": "Wall Street Global, Wallstreet Natwest CLS, Wall Street RBS, Wall Street Natwest, Wallstreet CLS, Rolfe & Nolan"},
{"parentsourcesystem": "GTE", "additionalsourcesystem": "GTE, ADP, FNX, Bloomberg (TOMS), Calypso, GDS, GFX, ICE, Ronnie, System-X, Wall Street Global, Wallstreet Natwest CLS, Wall Street RBS, Wall Street Natwest, Wallstreet CLS"},
{"parentsourcesystem": "GDS", "additionalsourcesystem": "Links - Futures, ICE, Calypso, Sigma, NPP, Bloomberg, CAF, Rolfe & Nolan"}]

));

router.get('/businessareas', (req, res) => res.json([{"description": "Client Management (Banking)"},
{"description": "Client Management 2 (Banking)"}]
));

router.get('/bookopeningtypes', (req, res) => res.json([{"description": "New Source and Ledger Books"},
{"description": "Existing Source and Ledger Books"},
{"description": "Finance Book Only"}]
));

router.get('/ledgerSetsBookId', (req, res) => res.json([{"description": "USD Manhattan"},
{"description": "USD London"},{"description": "GBP Germany"}]
));

router.get('/countryTradingLocation', (req, res) => res.json([{"description": "United Kingdom"},
{"description": "United States of America"},{"description": "Germany"},{"description": "Argentina"}]
));

router.get('/personsearch', controller.getPersonDetails);

router.post('/initialbookdetails', controller.postinitialbookdetails);

router.get('/getApproverDetails', (req, res) => res.json([
{"displayName": "micheat", "userName": "Miachel Thynes", "role": "Controller"},
{"displayName": "sachdas", "userName": "Ashish Sachdev", "role": "FrontOffice"},
{"displayName": "krissht", "userName": "Sushant Krishnia", "role": "FrontOffice"},
{"displayName": "bansasq", "userName": "Sachin Bansal", "role": "FrontOffice"},
{"displayName": "aliberc", "userName": "Christian Albert", "role": "FrontOffice"},
{"displayName": "barrypb", "userName": "Paul Barry", "role": "FrontOffice"},
{"displayName": "nuppona", "userName": "Aniti Nuppona", "role": "FrontOffice"},
{"displayName": "daintyg", "userName": "Grant Daniel", "role": "FrontOffice"},
{"displayName": "haridaa", "userName": "Awasthy Hariharan", "role": "Controller"},
{"displayName": "micheat", "userName": "Miachel Thynes", "role": "Controller"},
{"displayName": "sachdas", "userName": "Ashish Sachdev", "role": "FrontOffice"},
{"displayName": "krissht", "userName": "Sushant Krishnia", "role": "FrontOffice"},
{"displayName": "bansasq", "userName": "Sachin Bansal", "role": "FrontOffice"},
{"displayName": "aliberc", "userName": "Christian Albert", "role": "FrontOffice"},
{"displayName": "barrypb", "userName": "Paul Barry", "role": "FrontOffice"},
{"displayName": "nuppona", "userName": "Aniti Nuppona", "role": "FrontOffice"},
{"displayName": "daintyg", "userName": "Grant Daniel", "role": "FrontOffice"},
{"displayName": "haridaa", "userName": "Awasthy Hariharan", "role": "Controller"}]

));



module.exports = router;