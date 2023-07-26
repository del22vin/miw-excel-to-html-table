
var editor;
			
ClassicEditor
.create( document.querySelector( '#editor1' ),{
    toolbar: [ 'bold', 'italic']
} )
 .then( newEditor => {
    editor = newEditor;
} )
.catch( error => {
    console.error( error );
} );


const excel_file = document.getElementById('excel_file');

excel_file.addEventListener('change', (event) => {

if(!['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'].includes(event.target.files[0].type))
{
document.getElementById('excel_data').innerHTML = '<div class="alert alert-danger">Only .xlsx or .xls file format are allowed</div>';

excel_file.value = '';

return false;
}

var reader = new FileReader();

reader.readAsArrayBuffer(event.target.files[0]);

reader.onload = function(event){

var data = new Uint8Array(reader.result);
var work_book = XLSX.read(data, {type:'array'});
var sheet_name = work_book.SheetNames;
var sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[0]], {header:1});
console.log(sheet_data);

var firstTimeBuyer_data_2YearTerm = [];
var firstTimeBuyer_data_3YearTerm = [];
var firstTimeBuyer_data_5YearTerm = [];
var firstTimeBuyer_data_10YearTerm = [];


var remortgage_data_2YearTerm = [];
var remortgage_data_3YearTerm = [];
var remortgage_data_5YearTerm = [];
var remortgage_data_10YearTerm = [];


var movingHome_data_2YearTerm = [];
var movingHome_data_3YearTerm = [];
var movingHome_data_5YearTerm = [];
var movingHome_data_10YearTerm = [];


var buyToLet_data_2YearTerm = [];
var buyToLet_data_3YearTerm = [];
var buyToLet_data_5YearTerm = [];
var buyToLet_data_10YearTerm = [];


var existingCustomers_data_barclays_2YearTerm  = [];
var existingCustomers_data_barclays_3YearTerm  = [];
var existingCustomers_data_barclays_5YearTerm  = [];
var existingCustomers_data_barclays_10YearTerm  = [];

var existingCustomers_data_coventryBuildingSociety_2YearTerm  = [];
var existingCustomers_data_coventryBuildingSociety_3YearTerm  = [];
var existingCustomers_data_coventryBuildingSociety_5_10YearTerm  = [];

var existingCustomers_data_hsbc_2YearTerm  = [];
var existingCustomers_data_hsbc_3YearTerm  = [];
var existingCustomers_data_hsbc_5YearTerm  = [];
var existingCustomers_data_hsbc_10YearTerm  = [];		

var existingCustomers_data_tsb_2YearTerm  = [];
var existingCustomers_data_tsb_5YearTerm  = [];
var existingCustomers_data_tsb_10YearTerm  = [];		
    
var oneYearFixedRate_data = [];

var twoYearFixedRate_data_barclays = [];
var twoYearFixedRate_data_coventryBS = [];
var twoYearFixedRate_data_hsbc = [];
var twoYearFixedRate_data_lloyds = [];
var twoYearFixedRate_data_nationwideBS = [];
var twoYearFixedRate_data_natwestGroup = [];
var twoYearFixedRate_data_santander = [];
var twoYearFixedRate_data_tsb = [];
var twoYearFixedRate_data_virginMoney = [];

var threeYearFixedRate_data_barclays = [];
var threeYearFixedRate_data_coventryBS = [];
var threeYearFixedRate_data_hsbc = [];
var threeYearFixedRate_data_nationwideBS = [];
var threeYearFixedRate_data_tsb = [];
var threeYearFixedRate_data_virginMoney = [];		
var threeYearFixedRate_data_yorkshireBuildingSociety = [];		


var fiveYearFixedRate_data_barclays = [];
var fiveYearFixedRate_data_coventryBS = [];
var fiveYearFixedRate_data_hsbc = [];
var fiveYearFixedRate_data_lloyds = [];
var fiveYearFixedRate_data_nationwideBS = [];
var fiveYearFixedRate_data_natwestGroup = [];
var fiveYearFixedRate_data_santander = [];
var fiveYearFixedRate_data_tsb = [];
var fiveYearFixedRate_data_virginMoney = [];
var fiveYearFixedRate_data_yorkshireBuildingSociety = [];

var sevenYearFixedRateMortgages_data = [];

var tenYearFixedRate_data_barclays = [];
var tenYearFixedRate_data_coventryBS = [];
var tenYearFixedRate_data_hsbc = [];
var tenYearFixedRate_data_lloyds = [];
var tenYearFixedRate_data_nationwideBS = [];
var tenYearFixedRate_data_tsb = [];
var tenYearFixedRate_data_virginMoney = [];
var tenYearFixedRate_data_yorkshireBuildingSociety = [];

var fifteenYearFixedRateMortgages_data = [];

var barclaysTrackerMortgages_data_twoYear = [];
var barclaysTrackerMortgages_data_fiveYear = [];

var hsbcTrackerMortgages_data_twoYear = [];


var twoYearTrackerMortgages_data_barclays = [];
var twoYearTrackerMortgages_data_coventryBS = [];
var twoYearTrackerMortgages_data_hsbc = [];
var twoYearTrackerMortgages_data_nationwideBS = [];
var twoYearTrackerMortgages_data_natwestGroup = [];
var twoYearTrackerMortgages_data_santander = [];
var twoYearTrackerMortgages_data_tsb = [];
var twoYearTrackerMortgages_data_virginMoney = [];
var twoYearTrackerMortgages_data_yorkshireBuildingSociety = [];

var fiveYearTracker_data = [];

var tenYearTrackerMortgages_data = [];

//var lifetimeVariableMortgages_data = [];

var alternativeMortgageRates_data = [];   //other types

var greenMortgageRates_data = [];   //other types

var familySpringboardMortgageRates_data = [];   //other types

var mortgageGuaranteeMortgageRates_data = [];   //other types


var barclays_data_trackerMortgages = [];
var barclays_data_fixedRateResidential = [];
var barclays_data_greenHomeMortgages = [];
var barclays_data_familySpringboardMortgages = [];
var barclays_data_mortgageGuaranteeScheme = [];
var barclays_data_residentialRemortgageFixedRate = [];
var barclays_data_buyToLet = [];
var barclays_data_existingMortgageCustomers = [];

var lloyds_data_buyToLet = [];
var lloyds_data_firstTimeBuyer = [];
var lloyds_data_movingHome = [];
var lloyds_data_remortgageFixedRate = [];

var nationwideBS_data_buyToLet = [];
var nationwideBS_data_firstTimeBuyer = [];
var nationwideBS_data_movingHome = [];
var nationwideBS_data_remortgageFixedRate = [];

var natwestGroup_data_firstTimeBuyer = [];
var natwestGroup_data_movingHome = [];
var natwestGroup_data_remortgage = [];
var natwestGroup_data_buyToLet = [];

var hsbc_data_firstTimeBuyer = [];
var hsbc_data_remortgage = [];
var hsbc_data_buyToLet = [];
var hsbc_data_movingHome = [];
var hsbc_data_existingCustomer = [];

var virginMoney_data_firstTimeBuyer = [];
var virginMoney_data_movingHome = [];
var virginMoney_data_remortgage = [];
var virginMoney_data_buyToLet = [];


var santander_data_firstTimeBuyer = [];
var santander_data_remortgage = [];
var santander_data_movingHome = [];


var coventryBS_data_firstTimeBuyer = [];
var coventryBS_data_movingHome = [];
var coventryBS_data_remortgage = [];
var coventryBS_data_existingCustomer = [];


var tsb_data_firstTimeBuyer = [];
var tsb_data_movingHome = [];
var tsb_data_remortgage = [];
var tsb_data_existingCustomer = [];
var tsb_data_buyToLet = [];


var yorkshireBuildingSociety_data_firstTimeBuyer = [];
var yorkshireBuildingSociety_data_movingHome = [];
var yorkshireBuildingSociety_data_remortgage = [];





firstTimeBuyer_data_2YearTerm = getTableDataByFilter(sheet_data, 'first time', '2 years', '', '');
firstTimeBuyer_data_3YearTerm = getTableDataByFilter(sheet_data, 'first time', '3 years', '', '');
firstTimeBuyer_data_5YearTerm = getTableDataByFilter(sheet_data, 'first time', '5 years', '', '');
firstTimeBuyer_data_10YearTerm = getTableDataByFilter(sheet_data, 'first time', '10 years', '', '');


remortgage_data_2YearTerm = getTableDataByFilter(sheet_data, 'remortgage', '2 years', '', '');
remortgage_data_3YearTerm = getTableDataByFilter(sheet_data, 'remortgage', '3 years', '', '');
remortgage_data_5YearTerm = getTableDataByFilter(sheet_data, 'remortgage', '5 years', '', '');
remortgage_data_10YearTerm = getTableDataByFilter(sheet_data, 'remortgage', '10 years', '7 years', ''); //also include 7 years here



movingHome_data_2YearTerm = getTableDataByFilter(sheet_data, 'moving home', '2 years', '', '');
movingHome_data_3YearTerm = getTableDataByFilter(sheet_data, 'moving home', '3 years', '', '');
movingHome_data_5YearTerm = getTableDataByFilter(sheet_data, 'moving home', '5 years', '', '');
movingHome_data_10YearTerm = getTableDataByFilter(sheet_data, 'moving home', '10 years', '7 years', ''); //also include 7 years here



buyToLet_data_2YearTerm = getTableDataByFilter(sheet_data, 'buy to let', '2 years', 'limited variable', '');//also include Limited Variable
buyToLet_data_3YearTerm = getTableDataByFilter(sheet_data, 'buy to let', '3 years', '', '');
buyToLet_data_5YearTerm = getTableDataByFilter(sheet_data, 'buy to let', '5 years', '', '');
buyToLet_data_10YearTerm = getTableDataByFilter(sheet_data, 'buy to let', '10 years', '', ''); 



existingCustomers_data_barclays_2YearTerm  = getTableDataByFilter(sheet_data, 'existing', '2 years', '', 'barclays');
existingCustomers_data_barclays_3YearTerm  = getTableDataByFilter(sheet_data, 'existing', '3 years', '', 'barclays');
existingCustomers_data_barclays_5YearTerm  = getTableDataByFilter(sheet_data, 'existing', '5 years', '', 'barclays');
existingCustomers_data_barclays_10YearTerm  = getTableDataByFilter(sheet_data, 'existing', '10 years', '7 years', 'barclays');

existingCustomers_data_coventryBuildingSociety_2YearTerm  = getTableDataByFilter(sheet_data, 'existing', '2 years', '', 'coventry bs');
existingCustomers_data_coventryBuildingSociety_3YearTerm  = getTableDataByFilter(sheet_data, 'existing', '3 years', '', 'coventry bs');
existingCustomers_data_coventryBuildingSociety_5_10YearTerm  = getTableDataByFilter(sheet_data, 'existing', '10 years', '5 years', 'coventry bs');

existingCustomers_data_hsbc_2YearTerm  = getTableDataByFilter(sheet_data, 'existing', '2 years', '', 'hsbc');
existingCustomers_data_hsbc_3YearTerm = getTableDataByFilter(sheet_data, 'existing', '3 years', '', 'hsbc');
existingCustomers_data_hsbc_5YearTerm  = getTableDataByFilter(sheet_data, 'existing', '5 years', '', 'hsbc');
existingCustomers_data_hsbc_10YearTerm  = getTableDataByFilter(sheet_data, 'existing', '10 years', '', 'hsbc');

existingCustomers_data_tsb_2YearTerm = getTableDataByFilter(sheet_data, 'existing', '2 years', '', 'tsb');
existingCustomers_data_tsb_5YearTerm = getTableDataByFilter(sheet_data, 'existing', '5 years', '', 'tsb');
existingCustomers_data_tsb_10YearTerm = getTableDataByFilter(sheet_data, 'existing', '10 years', '', 'tsb');

oneYearFixedRate_data = getTableDataByFilter(sheet_data, 'fixed', '1 year', '', '');

twoYearFixedRate_data_barclays = getTableDataByFilter(sheet_data, 'fixed', '2 years', '', 'barclays');
twoYearFixedRate_data_coventryBS = getTableDataByFilter(sheet_data, 'fixed', '2 years', '', 'coventry bs');
twoYearFixedRate_data_hsbc = getTableDataByFilter(sheet_data, 'fixed', '2 years', '', 'hsbc');
twoYearFixedRate_data_lloyds = getTableDataByFilter(sheet_data, 'fixed', '2 years', '', 'lloyds bank');
twoYearFixedRate_data_nationwideBS = getTableDataByFilter(sheet_data, 'fixed', '2 years', '', 'nationwide bs');
twoYearFixedRate_data_natwestGroup = getTableDataByFilter(sheet_data, 'fixed', '2 years', '', 'natwest bank plc');
twoYearFixedRate_data_santander = getTableDataByFilter(sheet_data, 'fixed', '2 years', '', 'santander uk plc.');
twoYearFixedRate_data_tsb = getTableDataByFilter(sheet_data, 'fixed', '2 years', '', 'tsb');
twoYearFixedRate_data_virginMoney = getTableDataByFilter(sheet_data, 'fixed', '2 years', '', 'virgin money');


threeYearFixedRate_data_barclays = getTableDataByFilter(sheet_data, 'fixed', '3 years', '', 'barclays');
threeYearFixedRate_data_coventryBS = getTableDataByFilter(sheet_data, 'fixed', '3 years', '', 'coventry bs');
threeYearFixedRate_data_hsbc = getTableDataByFilter(sheet_data, 'fixed', '3 years', '', 'hsbc');
threeYearFixedRate_data_nationwideBS = getTableDataByFilter(sheet_data, 'fixed', '3 years', '', 'nationwide bs');
threeYearFixedRate_data_tsb = getTableDataByFilter(sheet_data, 'fixed', '3 years', '', 'tsb');
threeYearFixedRate_data_virginMoney = getTableDataByFilter(sheet_data, 'fixed', '3 years', '', 'virgin money');
threeYearFixedRate_data_yorkshireBuildingSociety = getTableDataByFilter(sheet_data, 'fixed', '3 years', '', 'yorkshire bs');

fiveYearFixedRate_data_barclays = getTableDataByFilter(sheet_data, 'fixed', '5 years', '', 'barclays');
fiveYearFixedRate_data_coventryBS = getTableDataByFilter(sheet_data, 'fixed', '5 years', '', 'coventry bs');
fiveYearFixedRate_data_hsbc = getTableDataByFilter(sheet_data, 'fixed', '5 years', '', 'hsbc');
fiveYearFixedRate_data_lloyds = getTableDataByFilter(sheet_data, 'fixed', '5 years', '', 'lloyds bank');
fiveYearFixedRate_data_nationwideBS = getTableDataByFilter(sheet_data, 'fixed', '5 years', '', 'nationwide bs');
fiveYearFixedRate_data_natwestGroup = getTableDataByFilter(sheet_data, 'fixed', '5 years', '', 'natwest bank plc');
fiveYearFixedRate_data_santander = getTableDataByFilter(sheet_data, 'fixed', '5 years', '', 'santander uk plc.');
fiveYearFixedRate_data_tsb = getTableDataByFilter(sheet_data, 'fixed', '5 years', '', 'tsb');
fiveYearFixedRate_data_virginMoney = getTableDataByFilter(sheet_data, 'fixed', '5 years', '', 'virgin money');
fiveYearFixedRate_data_yorkshireBuildingSociety = getTableDataByFilter(sheet_data, 'fixed', '5 years', '', 'yorkshire bs');

sevenYearFixedRateMortgages_data = getTableDataByFilter(sheet_data, 'fixed', '7 years', '', '');

tenYearFixedRate_data_barclays = getTableDataByFilter(sheet_data, 'fixed', '10 years', '', 'barclays');
tenYearFixedRate_data_coventryBS = getTableDataByFilter(sheet_data, 'fixed', '10 years', '', 'coventry bs');
tenYearFixedRate_data_hsbc = getTableDataByFilter(sheet_data, 'fixed', '10 years', '', 'hsbc');
tenYearFixedRate_data_lloyds = getTableDataByFilter(sheet_data, 'fixed', '10 years', '', 'lloyds bank');
tenYearFixedRate_data_nationwideBS = getTableDataByFilter(sheet_data, 'fixed', '10 years', '', 'nationwide bs');
tenYearFixedRate_data_tsb = getTableDataByFilter(sheet_data, 'fixed', '10 years', '', 'tsb');
tenYearFixedRate_data_virginMoney = getTableDataByFilter(sheet_data, 'fixed', '10 years', '', 'virgin money');
tenYearFixedRate_data_yorkshireBuildingSociety = getTableDataByFilter(sheet_data, 'fixed', '10 years', '', 'yorkshire bs');

fifteenYearFixedRateMortgages_data = getTableDataByFilter(sheet_data, 'fixed', '15 years', '', '');

barclaysTrackerMortgages_data_twoYear = getTableDataByFilter(sheet_data, 'tracker', '2 years', '', 'barclays');
barclaysTrackerMortgages_data_fiveYear = getTableDataByFilter(sheet_data, 'tracker', '5 years', '', 'barclays');

hsbcTrackerMortgages_data_twoYear = getTableDataByFilter(sheet_data, 'tracker', '2 years', '', 'hsbc');

twoYearTrackerMortgages_data_barclays = getTableDataByFilter(sheet_data, 'tracker', '2 years', '', 'barclays');
twoYearTrackerMortgages_data_coventryBS = getTableDataByFilter(sheet_data, 'tracker', '2 years', '', 'coventry bs');
twoYearTrackerMortgages_data_hsbc = getTableDataByFilter(sheet_data, 'tracker', '2 years', '', 'hsbc');
twoYearTrackerMortgages_data_nationwideBS = getTableDataByFilter(sheet_data, 'tracker', '2 years', '', 'nationwide bs');
twoYearTrackerMortgages_data_natwestGroup = getTableDataByFilter(sheet_data, 'tracker', '2 years', '', 'natwest bank plc');
twoYearTrackerMortgages_data_santander = getTableDataByFilter(sheet_data, 'tracker', '2 years', '', 'santander uk plc.');
twoYearTrackerMortgages_data_tsb = getTableDataByFilter(sheet_data, 'tracker', '2 years', '', 'tsb');
twoYearTrackerMortgages_data_virginMoney = getTableDataByFilter(sheet_data, 'tracker', '2 years', '', 'virgin money');
twoYearTrackerMortgages_data_yorkshireBuildingSociety = getTableDataByFilter(sheet_data, 'tracker', '2 years', '', 'yorkshire bs');

fiveYearTracker_data = getTableDataByFilter(sheet_data, 'tracker', '5 years', '', '');

tenYearTrackerMortgages_data = getTableDataByFilter(sheet_data, 'tracker', '10 years', '', '');

//lifetimeVariableMortgages_data = getTableDataByFilter(sheet_data, '', 'lifetime variable', '', '');

var alternativeMortgageRates_row_start = document.getElementById("alternativeMortgageRates-row-start").value; 
var alternativeMortgageRates_row_end = document.getElementById("alternativeMortgageRates-row-end").value; 

alternativeMortgageRates_data = getTableDataByFilter(sheet_data, 'alternativeMortgageRates', '', alternativeMortgageRates_row_start + ',' + alternativeMortgageRates_row_end, '');

greenMortgageRates_data = getTableDataByFilter(sheet_data, 'alternativeMortgageRates-green', '', alternativeMortgageRates_row_start + ',' + alternativeMortgageRates_row_end, '');

familySpringboardMortgageRates_data = getTableDataByFilter(sheet_data, 'alternativeMortgageRates-family springboard', '', alternativeMortgageRates_row_start + ',' + alternativeMortgageRates_row_end, '');

mortgageGuaranteeMortgageRates_data = getTableDataByFilter(sheet_data, 'alternativeMortgageRates-mortgage guarantee', '', alternativeMortgageRates_row_start + ',' + alternativeMortgageRates_row_end, '');


barclays_data_trackerMortgages = getTableDataByFilter(sheet_data, 'tracker', '', '', 'barclays');
barclays_data_fixedRateResidential = getTableDataByFilter(sheet_data, 'fixed rate residential ', '', '', 'barclays');
barclays_data_greenHomeMortgages = getTableDataByFilter(sheet_data, 'green home mortgages', '', '', 'barclays');
barclays_data_familySpringboardMortgages = getTableDataByFilter(sheet_data, 'family springboard mortgages', '', '', 'barclays');
barclays_data_mortgageGuaranteeScheme = getTableDataByFilter(sheet_data, 'mortgage guarantee scheme', '', '', 'barclays');
barclays_data_residentialRemortgageFixedRate = getTableDataByFilter(sheet_data, 'residential remortgage fixed rate', '', '', 'barclays');
barclays_data_buyToLet = getTableDataByFilter(sheet_data, 'buy to let', '', '', 'barclays');
barclays_data_existingMortgageCustomers = getTableDataByFilter(sheet_data, 'existing mortgage customers', '', '', 'barclays');

lloyds_data_buyToLet = getTableDataByFilter(sheet_data, 'buy to let', '', '', 'lloyds bank');
lloyds_data_firstTimeBuyer = getTableDataByFilter(sheet_data, 'first time', '', '', 'lloyds bank');
lloyds_data_movingHome = getTableDataByFilter(sheet_data, 'moving home', '', '', 'lloyds bank');
lloyds_data_remortgageFixedRate = getTableDataByFilter(sheet_data, 'remortgage fixed rate', '', '', 'lloyds bank');

nationwideBS_data_buyToLet = getTableDataByFilter(sheet_data, 'buy to let', '', '', 'nationwide bs');
nationwideBS_data_firstTimeBuyer = getTableDataByFilter(sheet_data, 'first time', '', '', 'nationwide bs');
nationwideBS_data_movingHome = getTableDataByFilter(sheet_data, 'moving home', '', '', 'nationwide bs');
nationwideBS_data_remortgageFixedRate = getTableDataByFilter(sheet_data, 'remortgage fixed rate', '', '', 'nationwide bs');

natwestGroup_data_firstTimeBuyer = getTableDataByFilter(sheet_data, 'first time', '', '', 'natwest bank plc');
natwestGroup_data_movingHome = getTableDataByFilter(sheet_data, 'moving home', '', '', 'natwest bank plc');
natwestGroup_data_remortgage= getTableDataByFilter(sheet_data, 'remortgage', '', '', 'natwest bank plc');
natwestGroup_data_buyToLet = getTableDataByFilter(sheet_data, 'buy to let', '', '', 'natwest bank plc');

hsbc_data_firstTimeBuyer = getTableDataByFilter(sheet_data, 'first time', '', '', 'hsbc');
hsbc_data_remortgage= getTableDataByFilter(sheet_data, 'remortgage', '', '', 'hsbc');
hsbc_data_buyToLet = getTableDataByFilter(sheet_data, 'buy to let', '', '', 'hsbc');
hsbc_data_movingHome = getTableDataByFilter(sheet_data, 'moving home', '', '', 'hsbc');
hsbc_data_existingCustomer = getTableDataByFilter(sheet_data, 'existing', '', '', 'hsbc');

virginMoney_data_firstTimeBuyer = getTableDataByFilter(sheet_data, 'first time', '', '', 'virgin money');
virginMoney_data_movingHome = getTableDataByFilter(sheet_data, 'moving home', '', '', 'virgin money');
virginMoney_data_remortgage= getTableDataByFilter(sheet_data, 'remortgage', '', '', 'virgin money');
virginMoney_data_buyToLet = getTableDataByFilter(sheet_data, 'buy to let', '', '', 'virgin money');

santander_data_firstTimeBuyer = getTableDataByFilter(sheet_data, 'first time', '', '', 'santander uk plc.');
santander_data_remortgage= getTableDataByFilter(sheet_data, 'remortgage', '', '', 'santander uk plc.');
santander_data_movingHome = getTableDataByFilter(sheet_data, 'moving home', '', '', 'santander uk plc.');

coventryBS_data_firstTimeBuyer = getTableDataByFilter(sheet_data, 'first time', '', '', 'coventry bs');
coventryBS_data_movingHome = getTableDataByFilter(sheet_data, 'moving home', '', '', 'coventry bs');
coventryBS_data_remortgage= getTableDataByFilter(sheet_data, 'remortgage', '', '', 'coventry bs');
coventryBS_data_existingCustomer= getTableDataByFilter(sheet_data, 'existing', '', '', 'coventry bs');

tsb_data_firstTimeBuyer = getTableDataByFilter(sheet_data, 'first time', '', '', 'tsb');
tsb_data_movingHome = getTableDataByFilter(sheet_data, 'moving home', '', '', 'tsb');
tsb_data_remortgage= getTableDataByFilter(sheet_data, 'remortgage', '', '', 'tsb');
tsb_data_existingCustomer= getTableDataByFilter(sheet_data, 'existing', '', '', 'tsb');
tsb_data_buyToLet= getTableDataByFilter(sheet_data, 'buy to let', '', '', 'tsb');


yorkshireBuildingSociety_data_firstTimeBuyer = getTableDataByFilter(sheet_data, 'first time', '', '', 'yorkshire bs');
yorkshireBuildingSociety_data_movingHome = getTableDataByFilter(sheet_data, 'moving home', '', '', 'yorkshire bs');
yorkshireBuildingSociety_data_remortgage= getTableDataByFilter(sheet_data, 'remortgage', '', '', 'yorkshire bs');







var heading_firstTimeBuyer_data_2YearTerm = '<h2><a id="first-time-buyer-2years" name="first-time-buyer-2years"><span style="color:#000000;"><strong>First-Time Buyer Mortgage Rates – <br>2-year term </strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_firstTimeBuyer_data_3YearTerm = '<h2><a id="first-time-buyer-3years" name="first-time-buyer-3years"><span style="color:#000000;"><strong>First-Time Buyer Mortgage Rates – <br>3-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
var heading_firstTimeBuyer_data_5YearTerm = '<h2><a id="first-time-buyer-5years" name="first-time-buyer-5years"><span style="color:#000000;"><strong>First-Time Buyer Mortgage Rates – <br>5-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
var heading_firstTimeBuyer_data_10YearTerm = '<h2><a id="first-time-buyer-10years" name="first-time-buyer-10years"><span style="color:#000000;"><strong>First-Time Buyer Mortgage Rates – <br>10-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
document.getElementById("outputCode_firstTimeBuyer").value = heading_firstTimeBuyer_data_2YearTerm + getTableCodeHTML(firstTimeBuyer_data_2YearTerm) + '<p>&nbsp;</p> '  + heading_firstTimeBuyer_data_3YearTerm + getTableCodeHTML(firstTimeBuyer_data_3YearTerm) + '<p>&nbsp;</p> '  + heading_firstTimeBuyer_data_5YearTerm + getTableCodeHTML(firstTimeBuyer_data_5YearTerm) + '<p>&nbsp;</p> '  + heading_firstTimeBuyer_data_10YearTerm + getTableCodeHTML(firstTimeBuyer_data_10YearTerm);
    

var heading_remortgage_data_2YearTerm = '<h2><a id="remortgage-2years" name="remortgage-2years"><span style="color:#000000;"><strong>Remortgage rates – 2-year term </strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_remortgage_data_3YearTerm = '<h2><a id="remortgage-3years" name="remortgage-3years"><span style="color:#000000;"><strong>Remortgage rates – 3-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
var heading_remortgage_data_5YearTerm = '<h2><a id="remortgage-5years" name="remortgage-5years"><span style="color:#000000;"><strong>Remortgage rates – 5-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
var heading_remortgage_data_10YearTerm = '<h2><a id="remortgage-10years" name="remortgage-10years"><span style="color:#000000;"><strong>Remortgage rates – 10-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
document.getElementById("outputCode_remortgage").value = heading_remortgage_data_2YearTerm + getTableCodeHTML(remortgage_data_2YearTerm) + '<p>&nbsp;</p> '  + heading_remortgage_data_3YearTerm + getTableCodeHTML(remortgage_data_3YearTerm) + '<p>&nbsp;</p> '  + heading_remortgage_data_5YearTerm + getTableCodeHTML(remortgage_data_5YearTerm) + '<p>&nbsp;</p> '  + heading_remortgage_data_10YearTerm + getTableCodeHTML(remortgage_data_10YearTerm);
            

var heading_movingHome_data_2YearTerm = '<h2><a id="movingHome-2years" name="movingHome-2years"><span style="color:#000000;"><strong>Moving home mortgage rates – 2-year term </strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_movingHome_data_3YearTerm = '<h2><a id="movingHome-3years" name="movingHome-3years"><span style="color:#000000;"><strong>Moving home mortgage rates – 3-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
var heading_movingHome_data_5YearTerm = '<h2><a id="movingHome-5years" name="movingHome-5years"><span style="color:#000000;"><strong>Moving home mortgage rates – 5-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
var heading_movingHome_data_10YearTerm = '<h2><a id="movingHome-10years" name="movingHome-10years"><span style="color:#000000;"><strong>Moving home mortgage rates – 10-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
document.getElementById("outputCode_movingHome").value = heading_movingHome_data_2YearTerm + getTableCodeHTML(movingHome_data_2YearTerm) + '<p>&nbsp;</p> '  + heading_movingHome_data_3YearTerm + getTableCodeHTML(movingHome_data_3YearTerm) + '<p>&nbsp;</p> '  + heading_movingHome_data_5YearTerm + getTableCodeHTML(movingHome_data_5YearTerm) + '<p>&nbsp;</p> '  + heading_movingHome_data_10YearTerm + getTableCodeHTML(movingHome_data_10YearTerm);
    

var heading_buyToLet_data_2YearTerm = '<h2><a id="buyToLet-2years" name="buyToLet-2years"><span style="color:#000000;"><strong>Buy-to-let mortgage rate – 2-year term </strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_buyToLet_data_3YearTerm = '<h2><a id="buyToLet-3years" name="buyToLet-3years"><span style="color:#000000;"><strong>Buy-to-let mortgage rate – 3-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
var heading_buyToLet_data_5YearTerm = '<h2><a id="buyToLet-5years" name="buyToLet-5years"><span style="color:#000000;"><strong>Buy-to-let mortgage rate – 5-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
var heading_buyToLet_data_10YearTerm = '<h2><a id="buyToLet-10years" name="buyToLet-10years"><span style="color:#000000;"><strong>Buy-to-let mortgage rate – 10-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
document.getElementById("outputCode_buyToLet").value = heading_buyToLet_data_2YearTerm + getTableCodeHTML(buyToLet_data_2YearTerm) + '<p>&nbsp;</p> '  + heading_buyToLet_data_3YearTerm + getTableCodeHTML(buyToLet_data_3YearTerm) + '<p>&nbsp;</p> '  + heading_buyToLet_data_5YearTerm + getTableCodeHTML(buyToLet_data_5YearTerm) + '<p>&nbsp;</p> '  + heading_buyToLet_data_10YearTerm + getTableCodeHTML(buyToLet_data_10YearTerm);
    

var heading_existingCustomers_data_barclays_2YearTerm = '<h2><a id="existingCustomers_barclays-2years" name="existingCustomers_barclays-2years"><span style="color:#000000;"><strong>Barclays mortgage rates for existing customers – 2-year term </strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_existingCustomers_data_barclays_3YearTerm = '<h2><a id="existingCustomers_barclays-3years" name="existingCustomers_barclays-3years"><span style="color:#000000;"><strong>Barclays mortgage rates for existing customers – 3-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
var heading_existingCustomers_data_barclays_5YearTerm = '<h2><a id="existingCustomers_barclays-5years" name="existingCustomers_barclays-5years"><span style="color:#000000;"><strong>Barclays mortgage rates for existing customers – 5-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
var heading_existingCustomers_data_barclays_10YearTerm = '<h2><a id="existingCustomers_barclays-10years" name="existingCustomers_barclays-10years"><span style="color:#000000;"><strong>Barclays mortgage rates for existing customers – 7, 10-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
document.getElementById("outputCode_existingCustomers_barclays").value = heading_existingCustomers_data_barclays_2YearTerm + getTableCodeHTML(existingCustomers_data_barclays_2YearTerm) + '<p>&nbsp;</p> '  + heading_existingCustomers_data_barclays_3YearTerm + getTableCodeHTML(existingCustomers_data_barclays_3YearTerm) + '<p>&nbsp;</p> '  + heading_existingCustomers_data_barclays_5YearTerm + getTableCodeHTML(existingCustomers_data_barclays_5YearTerm) + '<p>&nbsp;</p> '  + heading_existingCustomers_data_barclays_10YearTerm + getTableCodeHTML(existingCustomers_data_barclays_10YearTerm);


var heading_existingCustomers_data_coventryBuildingSociety_2YearTerm = '<h2><a id="existingCustomers_coventryBuildingSociety-2years" name="existingCustomers_coventryBuildingSociety-2years"><span style="color:#000000;"><strong>Coventry Building Society mortgage rates for existing customers – 2-year term </strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_existingCustomers_data_coventryBuildingSociety_3YearTerm = '<h2><a id="existingCustomers_coventryBuildingSociety-3years" name="existingCustomers_coventryBuildingSociety-3years"><span style="color:#000000;"><strong>Coventry Building Society mortgage rates for existing customers – 3-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
var heading_existingCustomers_data_coventryBuildingSociety_5_10YearTerm = '<h2><a id="existingCustomers_coventryBuildingSociety-5-10years" name="existingCustomers_coventryBuildingSociety-5years"><span style="color:#000000;"><strong>Coventry Building Society mortgage rates for existing customers – 5, 10-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
document.getElementById("outputCode_existingCustomers_coventryBuildingSociety").value = heading_existingCustomers_data_coventryBuildingSociety_2YearTerm + getTableCodeHTML(existingCustomers_data_coventryBuildingSociety_2YearTerm) + '<p>&nbsp;</p> '  + heading_existingCustomers_data_coventryBuildingSociety_3YearTerm + getTableCodeHTML(existingCustomers_data_coventryBuildingSociety_3YearTerm) + '<p>&nbsp;</p> '  + heading_existingCustomers_data_coventryBuildingSociety_5_10YearTerm + getTableCodeHTML(existingCustomers_data_coventryBuildingSociety_5_10YearTerm );


var heading_existingCustomers_data_hsbc_2YearTerm = '<h2><a id="existingCustomers_hsbc-2years" name="existingCustomers_hsbc-2years"><span style="color:#000000;"><strong>HSBC mortgage rates for existing customers – 2-year term </strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_existingCustomers_data_hsbc_3YearTerm = '<h2><a id="existingCustomers_hsbc-3years" name="existingCustomers_hsbc-3years"><span style="color:#000000;"><strong>HSBC mortgage rates for existing customers – 3-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
var heading_existingCustomers_data_hsbc_5YearTerm = '<h2><a id="existingCustomers_hsbc-5years" name="existingCustomers_hsbc-5years"><span style="color:#000000;"><strong>HSBC mortgage rates for existing customers – 5-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
var heading_existingCustomers_data_hsbc_10YearTerm = '<h2><a id="existingCustomers_hsbc-10years" name="existingCustomers_hsbc-10years"><span style="color:#000000;"><strong>HSBC mortgage rates for existing customers – 10-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
document.getElementById("outputCode_existingCustomers_hsbc").value = heading_existingCustomers_data_hsbc_2YearTerm + getTableCodeHTML(existingCustomers_data_hsbc_2YearTerm) + '<p>&nbsp;</p> '  + heading_existingCustomers_data_hsbc_3YearTerm + getTableCodeHTML(existingCustomers_data_hsbc_3YearTerm) + '<p>&nbsp;</p> '  + heading_existingCustomers_data_hsbc_5YearTerm + getTableCodeHTML(existingCustomers_data_hsbc_5YearTerm) + '<p>&nbsp;</p> '  + heading_existingCustomers_data_hsbc_10YearTerm + getTableCodeHTML(existingCustomers_data_hsbc_10YearTerm);


var heading_existingCustomers_data_tsb_2YearTerm = '<h2><a id="existingCustomers_tsb-2years" name="existingCustomers_tsb-2years"><span style="color:#000000;"><strong>TSB mortgage rates for existing customers – 2-year term </strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_existingCustomers_data_tsb_5YearTerm = '<h2><a id="existingCustomers_tsb-5years" name="existingCustomers_tsb-5years"><span style="color:#000000;"><strong>TSB mortgage rates for existing customers – 5-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
var heading_existingCustomers_data_tsb_10YearTerm = '<h2><a id="existingCustomers_tsb-10years" name="existingCustomers_tsb-10years"><span style="color:#000000;"><strong>TSB mortgage rates for existing customers – 10-year term </strong></span></a><span style="color:#000000;"> </span></h2>';
document.getElementById("outputCode_existingCustomers_tsb").value = heading_existingCustomers_data_tsb_2YearTerm + getTableCodeHTML(existingCustomers_data_tsb_2YearTerm) + '<p>&nbsp;</p> ' + heading_existingCustomers_data_tsb_5YearTerm + getTableCodeHTML(existingCustomers_data_tsb_5YearTerm) + '<p>&nbsp;</p> '  + heading_existingCustomers_data_tsb_10YearTerm + getTableCodeHTML(existingCustomers_data_tsb_10YearTerm);

var heading_oneYearFixedRate = '<h2><a id="oneYearFixedRate" name="oneYearFixedRate"><span style="color:#000000;"><strong>1 Year Fixed Rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
document.getElementById("outputCode_oneYearFixedRate").value = heading_oneYearFixedRate + getTableCodeHTML(oneYearFixedRate_data);

var heading_twoYearFixedRate_data_barclays = '<h2><a id="twoYearFixedRate_barclays" name="twoYearFixedRate_barclays"><span style="color:#000000;"><strong>Barclays 2-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearFixedRate_data_coventryBS = '<h2><a id="twoYearFixedRate_coventryBS" name="twoYearFixedRate_coventryBS"><span style="color:#000000;"><strong>Coventry BS 2-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearFixedRate_data_hsbc = '<h2><a id="twoYearFixedRate_hsbc" name="twoYearFixedRate_hsbc"><span style="color:#000000;"><strong>HSBC 2-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearFixedRate_data_lloyds = '<h2><a id="twoYearFixedRate_lloyds" name="twoYearFixedRate_lloyds"><span style="color:#000000;"><strong>Lloyds Bank 2-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearFixedRate_data_nationwideBS = '<h2><a id="twoYearFixedRate_nationwideBS" name="twoYearFixedRate_nationwideBS"><span style="color:#000000;"><strong>Nationwide BS 2-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearFixedRate_data_natwestGroup = '<h2><a id="twoYearFixedRate_natwestGroup" name="twoYearFixedRate_natwestGroup"><span style="color:#000000;"><strong>NatWest Bank 2-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearFixedRate_data_santander = '<h2><a id="twoYearFixedRate_santander" name="twoYearFixedRate_santander"><span style="color:#000000;"><strong>Santander Bank BS 2-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearFixedRate_data_tsb = '<h2><a id="twoYearFixedRate_tsb" name="twoYearFixedRate_tsb"><span style="color:#000000;"><strong>TSB 2-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearFixedRate_data_virginMoney = '<h2><a id="twoYearFixedRate_virginMoney" name="twoYearFixedRate_virginMoney"><span style="color:#000000;"><strong>Virgin Money 2-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
document.getElementById("outputCode_twoYearFixedRate").value = heading_twoYearFixedRate_data_barclays + getTableCodeHTML(twoYearFixedRate_data_barclays) + '<p>&nbsp;</p> ' + heading_twoYearFixedRate_data_coventryBS + getTableCodeHTML(twoYearFixedRate_data_coventryBS) + '<p>&nbsp;</p> ' + heading_twoYearFixedRate_data_hsbc + getTableCodeHTML(twoYearFixedRate_data_hsbc) + '<p>&nbsp;</p> ' + heading_twoYearFixedRate_data_lloyds + getTableCodeHTML(twoYearFixedRate_data_lloyds) + '<p>&nbsp;</p> ' + heading_twoYearFixedRate_data_nationwideBS + getTableCodeHTML(twoYearFixedRate_data_nationwideBS) + '<p>&nbsp;</p> ' + heading_twoYearFixedRate_data_natwestGroup + getTableCodeHTML(twoYearFixedRate_data_natwestGroup) + '<p>&nbsp;</p> ' + heading_twoYearFixedRate_data_santander + getTableCodeHTML(twoYearFixedRate_data_santander) + '<p>&nbsp;</p> ' + heading_twoYearFixedRate_data_tsb + getTableCodeHTML(twoYearFixedRate_data_tsb) + '<p>&nbsp;</p> ' + heading_twoYearFixedRate_data_virginMoney + getTableCodeHTML(twoYearFixedRate_data_virginMoney);


var heading_threeYearFixedRate_data_barclays = '<h2><a id="threeYearFixedRate_barclays" name="threeYearFixedRate_barclays"><span style="color:#000000;"><strong>Barclays 3-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_threeYearFixedRate_data_coventryBS = '<h2><a id="threeYearFixedRate_coventryBS" name="threeYearFixedRate_coventryBS"><span style="color:#000000;"><strong>Coventry BS 3-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_threeYearFixedRate_data_hsbc = '<h2><a id="threeYearFixedRate_hsbc" name="threeYearFixedRate_hsbc"><span style="color:#000000;"><strong>HSBC 3-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_threeYearFixedRate_data_nationwideBS = '<h2><a id="threeYearFixedRate_nationwideBS" name="threeYearFixedRate_nationwideBS"><span style="color:#000000;"><strong>Nationwide BS 3-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_threeYearFixedRate_data_tsb = '<h2><a id="threeYearFixedRate_tsb" name="threeYearFixedRate_tsb"><span style="color:#000000;"><strong>TSB 3-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_threeYearFixedRate_data_virginMoney = '<h2><a id="threeYearFixedRate_virginMoney" name="threeYearFixedRate_virginMoney"><span style="color:#000000;"><strong>Virgin Money 3-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_threeYearFixedRate_data_yorkshireBuildingSociety = '<h2><a id="threeYearFixedRate_yorkshireBuildingSociety" name="threeYearFixedRate_yorkshireBuildingSociety"><span style="color:#000000;"><strong>Yorkshire BS 3-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';				
document.getElementById("outputCode_threeYearFixedRateMortgages").value = heading_threeYearFixedRate_data_barclays + getTableCodeHTML(threeYearFixedRate_data_barclays) + '<p>&nbsp;</p> ' + heading_threeYearFixedRate_data_coventryBS + getTableCodeHTML(threeYearFixedRate_data_coventryBS) + '<p>&nbsp;</p> ' + heading_threeYearFixedRate_data_hsbc + getTableCodeHTML(threeYearFixedRate_data_hsbc) + '<p>&nbsp;</p> ' + heading_threeYearFixedRate_data_nationwideBS + getTableCodeHTML(threeYearFixedRate_data_nationwideBS) + '<p>&nbsp;</p> ' + heading_threeYearFixedRate_data_tsb + getTableCodeHTML(threeYearFixedRate_data_tsb) + '<p>&nbsp;</p> ' + heading_threeYearFixedRate_data_virginMoney + getTableCodeHTML(threeYearFixedRate_data_virginMoney) + '<p>&nbsp;</p> ' + heading_threeYearFixedRate_data_yorkshireBuildingSociety + getTableCodeHTML(threeYearFixedRate_data_yorkshireBuildingSociety);


var heading_fiveYearFixedRate_data_barclays = '<h2><a id="fiveYearFixedRate_barclays" name="fiveYearFixedRate_barclays"><span style="color:#000000;"><strong>Barclays 5-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_fiveYearFixedRate_data_coventryBS = '<h2><a id="fiveYearFixedRate_coventryBS" name="fiveYearFixedRate_coventryBS"><span style="color:#000000;"><strong>Coventry BS 5-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_fiveYearFixedRate_data_hsbc = '<h2><a id="fiveYearFixedRate_hsbc" name="fiveYearFixedRate_hsbc"><span style="color:#000000;"><strong>HSBC 5-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_fiveYearFixedRate_data_lloyds = '<h2><a id="fiveYearFixedRate_lloyds" name="fiveYearFixedRate_lloyds"><span style="color:#000000;"><strong>Lloyds Bank 5-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_fiveYearFixedRate_data_nationwideBS = '<h2><a id="fiveYearFixedRate_nationwideBS" name="fiveYearFixedRate_nationwideBS"><span style="color:#000000;"><strong>Nationwide BS 5-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_fiveYearFixedRate_data_natwestGroup = '<h2><a id="fiveYearFixedRate_natwestGroup" name="fiveYearFixedRate_natwestGroup"><span style="color:#000000;"><strong>NatWest Bank 5-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_fiveYearFixedRate_data_santander = '<h2><a id="fiveYearFixedRate_santander" name="fiveYearFixedRate_santander"><span style="color:#000000;"><strong>Santander Bank BS 5-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_fiveYearFixedRate_data_tsb = '<h2><a id="fiveYearFixedRate_tsb" name="fiveYearFixedRate_tsb"><span style="color:#000000;"><strong>TSB 5-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_fiveYearFixedRate_data_virginMoney = '<h2><a id="fiveYearFixedRate_virginMoney" name="fiveYearFixedRate_virginMoney"><span style="color:#000000;"><strong>Virgin Money 5-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_fiveYearFixedRate_data_yorkshireBuildingSociety = '<h2><a id="fiveYearFixedRate_yorkshireBuildingSociety" name="fiveYearFixedRate_yorkshireBuildingSociety"><span style="color:#000000;"><strong>Yorkshire BS 5-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';				
document.getElementById("outputCode_fiveYearFixedRateMortgages").value = heading_fiveYearFixedRate_data_barclays + getTableCodeHTML(fiveYearFixedRate_data_barclays) + '<p>&nbsp;</p> ' + heading_fiveYearFixedRate_data_coventryBS + getTableCodeHTML(fiveYearFixedRate_data_coventryBS) + '<p>&nbsp;</p> ' + heading_fiveYearFixedRate_data_hsbc + getTableCodeHTML(fiveYearFixedRate_data_hsbc) + '<p>&nbsp;</p> ' + heading_fiveYearFixedRate_data_lloyds + getTableCodeHTML(fiveYearFixedRate_data_lloyds) + '<p>&nbsp;</p> ' + heading_fiveYearFixedRate_data_nationwideBS + getTableCodeHTML(fiveYearFixedRate_data_nationwideBS) + '<p>&nbsp;</p> ' + heading_fiveYearFixedRate_data_natwestGroup + getTableCodeHTML(fiveYearFixedRate_data_natwestGroup) + '<p>&nbsp;</p> ' + heading_fiveYearFixedRate_data_santander + getTableCodeHTML(fiveYearFixedRate_data_santander) + '<p>&nbsp;</p> ' + heading_fiveYearFixedRate_data_tsb + getTableCodeHTML(fiveYearFixedRate_data_tsb) + '<p>&nbsp;</p> ' + heading_fiveYearFixedRate_data_virginMoney + getTableCodeHTML(fiveYearFixedRate_data_virginMoney)  + '<p>&nbsp;</p> ' + heading_fiveYearFixedRate_data_yorkshireBuildingSociety + getTableCodeHTML(fiveYearFixedRate_data_yorkshireBuildingSociety);

var heading_sevenYearFixedRateMortgages = '<h2><a id="sevenYearFixedRate" name="sevenYearFixedRate"><span style="color:#000000;"><strong>7 Year Fixed Rate mortgages</strong></span></a><span style="color:#000000;"> </span></h2>';		
document.getElementById("outputCode_sevenYearFixedRateMortgages").value = heading_sevenYearFixedRateMortgages + getTableCodeHTML(sevenYearFixedRateMortgages_data);


var heading_tenYearFixedRate_data_barclays = '<h2><a id="tenYearFixedRate_barclays" name="tenYearFixedRate_barclays"><span style="color:#000000;"><strong>Barclays 10-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_tenYearFixedRate_data_coventryBS = '<h2><a id="tenYearFixedRate_coventryBS" name="tenYearFixedRate_coventryBS"><span style="color:#000000;"><strong>Coventry BS 10-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_tenYearFixedRate_data_hsbc = '<h2><a id="tenYearFixedRate_hsbc" name="tenYearFixedRate_hsbc"><span style="color:#000000;"><strong>HSBC 10-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_tenYearFixedRate_data_lloyds = '<h2><a id="tenYearFixedRate_lloyds" name="tenYearFixedRate_lloyds"><span style="color:#000000;"><strong>Lloyds Bank 10-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_tenYearFixedRate_data_nationwideBS = '<h2><a id="tenYearFixedRate_nationwideBS" name="tenYearFixedRate_nationwideBS"><span style="color:#000000;"><strong>Nationwide BS 10-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_tenYearFixedRate_data_tsb = '<h2><a id="tenYearFixedRate_tsb" name="tenYearFixedRate_tsb"><span style="color:#000000;"><strong>TSB 10-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_tenYearFixedRate_data_virginMoney = '<h2><a id="tenYearFixedRate_virginMoney" name="tenYearFixedRate_virginMoney"><span style="color:#000000;"><strong>Virgin Money 10-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_tenYearFixedRate_data_yorkshireBuildingSociety = '<h2><a id="tenYearFixedRate_yorkshireBuildingSociety" name="tenYearFixedRate_yorkshireBuildingSociety"><span style="color:#000000;"><strong>Yorkshire BS 10-year fixed rate mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';				
document.getElementById("outputCode_tenYearFixedRateMortgages").value  = heading_tenYearFixedRate_data_barclays + getTableCodeHTML(tenYearFixedRate_data_barclays) + '<p>&nbsp;</p> ' + heading_tenYearFixedRate_data_coventryBS + getTableCodeHTML(tenYearFixedRate_data_coventryBS) + '<p>&nbsp;</p> ' + heading_tenYearFixedRate_data_hsbc + getTableCodeHTML(tenYearFixedRate_data_hsbc) + '<p>&nbsp;</p> ' + heading_tenYearFixedRate_data_lloyds + getTableCodeHTML(tenYearFixedRate_data_lloyds) + '<p>&nbsp;</p> ' + heading_tenYearFixedRate_data_nationwideBS + getTableCodeHTML(tenYearFixedRate_data_nationwideBS) + '<p>&nbsp;</p> ' + heading_tenYearFixedRate_data_tsb + getTableCodeHTML(tenYearFixedRate_data_tsb) + '<p>&nbsp;</p> ' + heading_tenYearFixedRate_data_virginMoney + getTableCodeHTML(tenYearFixedRate_data_virginMoney)  + '<p>&nbsp;</p> ' + heading_tenYearFixedRate_data_yorkshireBuildingSociety + getTableCodeHTML(tenYearFixedRate_data_yorkshireBuildingSociety);

var heading_fifteenYearFixedRate = '<h2><a id="fifteenYearFixedRate" name="fifteenYearFixedRate"><span style="color:#000000;"><strong>15 Year Fixed Rate mortgages</strong></span></a><span style="color:#000000;"> </span></h2>';		
document.getElementById("outputCode_fifteenYearFixedRateMortgages").value = heading_fifteenYearFixedRate + getTableCodeHTML(fifteenYearFixedRateMortgages_data);

var heading_barclaysTrackerMortgages_data_twoYear = '<h2><a id="barclaysTrackerMortgagesTwoYear" name="barclaysTrackerMortgagesTwoYear"><span style="color:#000000;"><strong>Barclays tracker mortgage, 2-year term</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_barclaysTrackerMortgages_data_fiveYear = '<h2><a id="barclaysTrackerMortgagesFiveYear" name="barclaysTrackerMortgagesFiveYear"><span style="color:#000000;"><strong>Barclays tracker mortgage, 5-year term</strong></span></a><span style="color:#000000;"> </span></h2>';			
document.getElementById("outputCode_barclaysTrackerMortgages").value = heading_barclaysTrackerMortgages_data_twoYear + getTableCodeHTML(barclaysTrackerMortgages_data_twoYear) + '<p>&nbsp;</p> ' + heading_barclaysTrackerMortgages_data_fiveYear + getTableCodeHTML(barclaysTrackerMortgages_data_fiveYear);


var heading_hsbcTrackerMortgages_data_twoYear = '<h2><a id="hsbcTrackerMortgagesTwoYear" name="hsbcTrackerMortgagesTwoYear"><span style="color:#000000;"><strong>HSBC tracker mortgage, 2-year term</strong></span></a><span style="color:#000000;"> </span></h2>';		
document.getElementById("outputCode_hsbcTrackerMortgages").value = heading_hsbcTrackerMortgages_data_twoYear + getTableCodeHTML(hsbcTrackerMortgages_data_twoYear);



var heading_twoYearTrackerMortgages_data_barclays = '<h2><a id="twoYearTrackerMortgages_barclays" name="twoYearTrackerMortgages_barclays"><span style="color:#000000;"><strong>Barclays 2-year tracker mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearTrackerMortgages_data_coventryBS = '<h2><a id="twoYearTrackerMortgages_coventryBS" name="twoYearTrackerMortgages_coventryBS"><span style="color:#000000;"><strong>Coventry BS 2-year tracker mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearTrackerMortgages_data_hsbc = '<h2><a id="twoYearTrackerMortgages_hsbc" name="twoYearTrackerMortgages_hsbc"><span style="color:#000000;"><strong>HSBC 2-year tracker mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearTrackerMortgages_data_nationwideBS = '<h2><a id="twoYearTrackerMortgages_nationwideBS" name="twoYearTrackerMortgages_nationwideBS"><span style="color:#000000;"><strong>Nationwide BS 2-year tracker mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearTrackerMortgages_data_natwestGroup = '<h2><a id="twoYearTrackerMortgages_natwestGroup" name="twoYearTrackerMortgages_natwestGroup"><span style="color:#000000;"><strong>NatWest Bank 2-year tracker mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearTrackerMortgages_data_santander = '<h2><a id="twoYearTrackerMortgages_santander" name="twoYearTrackerMortgages_santander"><span style="color:#000000;"><strong>Santander 2-year tracker mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearTrackerMortgages_data_tsb = '<h2><a id="twoYearTrackerMortgages_tsb" name="twoYearTrackerMortgages_tsb"><span style="color:#000000;"><strong>TSB 2-year tracker mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearTrackerMortgages_data_virginMoney = '<h2><a id="twoYearTrackerMortgages_virginMoney" name="twoYearTrackerMortgages_virginMoney"><span style="color:#000000;"><strong>Virgin Money 2-year tracker mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_twoYearTrackerMortgages_data_yorkshireBuildingSociety = '<h2><a id="twoYearTrackerMortgages_yorkshireBuildingSociety" name="twoYearTrackerMortgages_yorkshireBuildingSociety"><span style="color:#000000;"><strong>Yorkshire BS 2-year tracker mortgage</strong></span></a><span style="color:#000000;"> </span></h2>';				
document.getElementById("outputCode_twoYearTrackerMortgages").value = heading_twoYearTrackerMortgages_data_barclays + getTableCodeHTML(twoYearTrackerMortgages_data_barclays) + '<p>&nbsp;</p> ' + heading_twoYearTrackerMortgages_data_coventryBS + getTableCodeHTML(twoYearTrackerMortgages_data_coventryBS) + '<p>&nbsp;</p> ' + heading_twoYearTrackerMortgages_data_hsbc + getTableCodeHTML(twoYearTrackerMortgages_data_hsbc) + '<p>&nbsp;</p> ' + heading_twoYearTrackerMortgages_data_nationwideBS + getTableCodeHTML(twoYearTrackerMortgages_data_nationwideBS) + '<p>&nbsp;</p> ' + heading_twoYearTrackerMortgages_data_natwestGroup + getTableCodeHTML(twoYearTrackerMortgages_data_natwestGroup) + '<p>&nbsp;</p> ' + heading_twoYearTrackerMortgages_data_santander + getTableCodeHTML(twoYearTrackerMortgages_data_santander) + '<p>&nbsp;</p> ' + heading_twoYearTrackerMortgages_data_tsb + getTableCodeHTML(twoYearTrackerMortgages_data_tsb) + '<p>&nbsp;</p> ' + heading_twoYearTrackerMortgages_data_virginMoney + getTableCodeHTML(twoYearTrackerMortgages_data_virginMoney)  + '<p>&nbsp;</p> ' + heading_twoYearTrackerMortgages_data_yorkshireBuildingSociety + getTableCodeHTML(twoYearTrackerMortgages_data_yorkshireBuildingSociety);


var heading_fiveYearTracker_data = '<h2><a id="fiveYearTrackerMortgages" name="fiveYearTrackerMortgages"><span style="color:#000000;"><strong>5 Year Tracker Mortgage rates</strong></span></a><span style="color:#000000;"> </span></h2>';		
document.getElementById("outputCode_fiveYearTracker").value = heading_fiveYearTracker_data + getTableCodeHTML(fiveYearTracker_data);


var heading_tenYearTrackerMortgages_data = '<h2><a id="tenYearTrackerMortgages" name="tenYearTrackerMortgages"><span style="color:#000000;"><strong>10 Year Tracker Mortgage rates</strong></span></a><span style="color:#000000;"> </span></h2>';		
document.getElementById("outputCode_tenYearTrackerMortgages").value = heading_tenYearTrackerMortgages_data + getTableCodeHTML(tenYearTrackerMortgages_data);


//document.getElementById("outputCode_lifetimeVariableMortgages").value = getTableCodeHTML(lifetimeVariableMortgages_data);
//console.log(lifetimeVariableMortgages_data);

var heading_alternativeMortgageRates_data = '<h2><a id="alternativeMortgageRates" name="alternativeMortgageRates"><span style="color:#000000;"><strong>Alternative mortgage rates</strong></span></a><span style="color:#000000;"> </span></h2>';		
document.getElementById("outputCode_alternativeMortgageRates").value = heading_alternativeMortgageRates_data + getTableCodeHTML(alternativeMortgageRates_data);

var heading_greenMortgageRates_data = '<h2><a id="greenMortgageRates" name="greenMortgageRates"><span style="color:#000000;"><strong>Green mortgage rate</strong></span></a><span style="color:#000000;"> </span></h2>';		
document.getElementById("outputCode_greenMortgageRates").value = heading_greenMortgageRates_data + getTableCodeHTML(greenMortgageRates_data);

var heading_familySpringboardMortgageRates_data = '<h2><a id="familySpringboardMortgageRates" name="familySpringboardMortgageRates"><span style="color:#000000;"><strong>Family springboard mortgage rate</strong></span></a><span style="color:#000000;"> </span></h2>';		
document.getElementById("outputCode_familySpringboardMortgageRates").value = heading_familySpringboardMortgageRates_data + getTableCodeHTML(familySpringboardMortgageRates_data);

var heading_mortgageGuaranteeMortgageRates_data = '<h2><a id="mortgageGuaranteeMortgageRates" name="mortgageGuaranteeMortgageRates"><span style="color:#000000;"><strong>Mortgage Guarantee Scheme Fixed Mortgage Rates</strong></span></a><span style="color:#000000;"> </span></h2>';		
document.getElementById("outputCode_mortgageGuaranteeMortgageRates").value = heading_mortgageGuaranteeMortgageRates_data + getTableCodeHTML(mortgageGuaranteeMortgageRates_data);


var heading_barclays_data_trackerMortgages = '<h2><a id="trackerMortgages" name="trackerMortgages"><span style="color:#000000;"><strong>Barclays Mortgage Rates: Tracker Mortgages</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_barclays_data_fixedRateResidential = '<h2><a id="fixedRateResidential" name="fixedRateResidential"><span style="color:#000000;"><strong>Barclays Mortgage Rates: Fixed Rate Residential</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_barclays_data_greenHomeMortgages = '<h2><a id="greenHomeMortgages" name="greenHomeMortgages"><span style="color:#000000;"><strong>Barclays Mortgage Rates: Green Home Mortgages</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_barclays_data_familySpringboardMortgages = '<h2><a id="familySpringboardMortgages" name="familySpringboardMortgages"><span style="color:#000000;"><strong>Barclays Mortgage Rates: Family Springboard Mortgages</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_barclays_data_mortgageGuaranteeScheme = '<h2><a id="mortgageGuaranteeScheme" name="mortgageGuaranteeScheme"><span style="color:#000000;"><strong>Barclays Mortgage Rates: Mortgage Guarantee Scheme</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_barclays_data_residentialRemortgageFixedRate = '<h2><a id="residentialRemortgageFixedRate" name="residentialRemortgageFixedRate"><span style="color:#000000;"><strong>Barclays Mortgage Rates: Residential Remortgage Fixed Rate</strong></span></a><span style="color:#000000;"> </span></h2>';		
var heading_barclays_data_buyToLet = '<h2><a id="buyToLet" name="buyToLet"><span style="color:#000000;"><strong>Barclays Mortgage Rates: Buy to Let</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_barclays_data_existingMortgageCustomers= '<h2><a id="existingMortgageCustomers" name="existingMortgageCustomers"><span style="color:#000000;"><strong>Barclays Mortgage Rates: Existing Mortgage Customers</strong></span></a><span style="color:#000000;"> </span></h2>';				
document.getElementById("outputCode_barclays").value = heading_barclays_data_trackerMortgages + getTableCodeHTML(barclays_data_trackerMortgages) + '<p>&nbsp;</p> ' + heading_barclays_data_fixedRateResidential + getTableCodeHTML(barclays_data_fixedRateResidential) + '<p>&nbsp;</p> ' + heading_barclays_data_greenHomeMortgages + getTableCodeHTML(barclays_data_greenHomeMortgages) + '<p>&nbsp;</p> ' + heading_barclays_data_familySpringboardMortgages + getTableCodeHTML(barclays_data_familySpringboardMortgages) + '<p>&nbsp;</p> ' + heading_barclays_data_mortgageGuaranteeScheme + getTableCodeHTML(barclays_data_mortgageGuaranteeScheme) + '<p>&nbsp;</p> ' + heading_barclays_data_residentialRemortgageFixedRate + getTableCodeHTML(barclays_data_residentialRemortgageFixedRate) + '<p>&nbsp;</p> ' + heading_barclays_data_buyToLet + getTableCodeHTML(barclays_data_buyToLet) + '<p>&nbsp;</p> ' + heading_barclays_data_existingMortgageCustomers + getTableCodeHTML(barclays_data_existingMortgageCustomers);



var heading_lloyds_data_buyToLet = '<h2><a id="buyToLet" name="buyToLet"><span style="color:#000000;"><strong>Lloyds Mortgage Rates: Buy to Let</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_lloyds_data_firstTimeBuyer = '<h2><a id="firstTimeBuyer" name="firstTimeBuyer"><span style="color:#000000;"><strong>Lloyds Mortgage Rates: First Time Buyer</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_lloyds_data_movingHome = '<h2><a id="movingHome" name="movingHome"><span style="color:#000000;"><strong>Lloyds Mortgage Rates: Moving Home</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_lloyds_data_remortgageFixedRate = '<h2><a id="remortgageFixedRate" name="remortgageFixedRate"><span style="color:#000000;"><strong>Lloyds Mortgage Rates: Remortgage Fixed Rate</strong></span></a><span style="color:#000000;"> </span></h2>';				
document.getElementById("outputCode_lloyds").value = heading_lloyds_data_buyToLet + getTableCodeHTML(lloyds_data_buyToLet) + '<p>&nbsp;</p> ' + heading_lloyds_data_firstTimeBuyer + getTableCodeHTML(lloyds_data_firstTimeBuyer) + '<p>&nbsp;</p> ' + heading_lloyds_data_movingHome + getTableCodeHTML(lloyds_data_movingHome) + '<p>&nbsp;</p> ' + heading_lloyds_data_remortgageFixedRate + getTableCodeHTML(lloyds_data_remortgageFixedRate);

var heading_nationwideBS_data_buyToLet = '<h2><a id="buyToLet" name="buyToLet"><span style="color:#000000;"><strong>Nationwide Mortgage Rates: Buy to Let</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_nationwideBS_data_firstTimeBuyer = '<h2><a id="firstTimeBuyer" name="firstTimeBuyer"><span style="color:#000000;"><strong>Nationwide Mortgage Rates: First Time Buyer</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_nationwideBS_data_movingHome = '<h2><a id="movingHome" name="movingHome"><span style="color:#000000;"><strong>Nationwide Mortgage Rates: Moving Home</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_nationwideBS_data_remortgageFixedRate = '<h2><a id="remortgageFixedRate" name="remortgageFixedRate"><span style="color:#000000;"><strong>Nationwide Mortgage Rates: Remortgage Fixed Rate</strong></span></a><span style="color:#000000;"> </span></h2>';				
document.getElementById("outputCode_nationwideBS").value = heading_nationwideBS_data_buyToLet + getTableCodeHTML(nationwideBS_data_buyToLet) + '<p>&nbsp;</p> ' + heading_nationwideBS_data_firstTimeBuyer + getTableCodeHTML(nationwideBS_data_firstTimeBuyer) + '<p>&nbsp;</p> ' + heading_nationwideBS_data_movingHome + getTableCodeHTML(nationwideBS_data_movingHome) + '<p>&nbsp;</p> ' + heading_nationwideBS_data_remortgageFixedRate + getTableCodeHTML(nationwideBS_data_remortgageFixedRate);

var heading_natwestGroup_data_firstTimeBuyer = '<h2><a id="firstTimeBuyer" name="firstTimeBuyer"><span style="color:#000000;"><strong>Natwest Mortgage Rates: First Time Buyer</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_natwestGroup_data_movingHome = '<h2><a id="movingHome" name="movingHome"><span style="color:#000000;"><strong>Natwest Mortgage Rates: Moving Home</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_natwestGroup_data_remortgage = '<h2><a id="remortgage" name="remortgage"><span style="color:#000000;"><strong>Natwest Mortgage Rates: Remortgage</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_natwestGroup_data_buyToLet = '<h2><a id="buyToLet" name="buyToLet"><span style="color:#000000;"><strong>Natwest Mortgage Rates: Buy to Let</strong></span></a><span style="color:#000000;"> </span></h2>';				
document.getElementById("outputCode_natwestGroup").value = heading_natwestGroup_data_firstTimeBuyer + getTableCodeHTML(natwestGroup_data_firstTimeBuyer) + '<p>&nbsp;</p> ' + heading_natwestGroup_data_movingHome + getTableCodeHTML(natwestGroup_data_movingHome) + '<p>&nbsp;</p> ' + heading_natwestGroup_data_remortgage + getTableCodeHTML(natwestGroup_data_remortgage) + '<p>&nbsp;</p> ' +  heading_natwestGroup_data_buyToLet + getTableCodeHTML(natwestGroup_data_buyToLet);


var heading_hsbc_data_firstTimeBuyer = '<h2><a id="firstTimeBuyer" name="firstTimeBuyer"><span style="color:#000000;"><strong>HSBC Mortgage Rates: First Time Buyer</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_hsbc_data_remortgage = '<h2><a id="remortgage" name="remortgage"><span style="color:#000000;"><strong>HSBC Mortgage Rates: Remortgage</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_hsbc_data_buyToLet = '<h2><a id="buyToLet" name="buyToLet"><span style="color:#000000;"><strong>HSBC Mortgage Rates: Buy-to-Let</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_hsbc_data_movingHome = '<h2><a id="movingHome" name="movingHome"><span style="color:#000000;"><strong>HSBC Mortgage Rates: Moving Home</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_hsbc_data_existingCustomer = '<h2><a id="existingCustomer" name="existingCustomer"><span style="color:#000000;"><strong>HSBC Mortgage Rates: Existing Customer</strong></span></a><span style="color:#000000;"> </span></h2>';				
document.getElementById("outputCode_hsbc").value = heading_hsbc_data_firstTimeBuyer + getTableCodeHTML(hsbc_data_firstTimeBuyer) + '<p>&nbsp;</p> ' + heading_hsbc_data_remortgage + getTableCodeHTML(hsbc_data_remortgage) + '<p>&nbsp;</p> ' +  heading_hsbc_data_buyToLet + getTableCodeHTML(hsbc_data_buyToLet) + '<p>&nbsp;</p> ' + heading_hsbc_data_movingHome + getTableCodeHTML(hsbc_data_movingHome)  + '<p>&nbsp;</p> ' + heading_hsbc_data_existingCustomer + getTableCodeHTML(hsbc_data_existingCustomer);


var heading_virginMoney_data_firstTimeBuyer = '<h2><a id="firstTimeBuyer" name="firstTimeBuyer"><span style="color:#000000;"><strong>Virgin Money Mortgage Rates: First Time Buyer</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_virginMoney_data_movingHome = '<h2><a id="movingHome" name="movingHome"><span style="color:#000000;"><strong>Virgin Money Mortgage Rates: Moving Home</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_virginMoney_data_remortgage = '<h2><a id="remortgage" name="remortgage"><span style="color:#000000;"><strong>Virgin Money Mortgage Rates: Remortgage</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_virginMoney_data_buyToLet = '<h2><a id="buyToLet" name="buyToLet"><span style="color:#000000;"><strong>Virgin Money Mortgage Rates: Buy-to-Let</strong></span></a><span style="color:#000000;"> </span></h2>';				
document.getElementById("outputCode_virginMoney").value = heading_virginMoney_data_firstTimeBuyer + getTableCodeHTML(virginMoney_data_firstTimeBuyer) + '<p>&nbsp;</p> ' + heading_virginMoney_data_movingHome + getTableCodeHTML(virginMoney_data_movingHome) + '<p>&nbsp;</p> ' + heading_virginMoney_data_remortgage + getTableCodeHTML(virginMoney_data_remortgage) + '<p>&nbsp;</p> ' +  heading_virginMoney_data_buyToLet + getTableCodeHTML(virginMoney_data_buyToLet);


var heading_santander_data_firstTimeBuyer = '<h2><a id="firstTimeBuyer" name="firstTimeBuyer"><span style="color:#000000;"><strong>Santander Mortgage Rates: First Time Buyer</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_santander_data_remortgage = '<h2><a id="remortgage" name="remortgage"><span style="color:#000000;"><strong>Santander Mortgage Rates: Remortgage</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_santander_data_movingHome = '<h2><a id="movingHome" name="movingHome"><span style="color:#000000;"><strong>Santander Mortgage Rates: Moving Home</strong></span></a><span style="color:#000000;"> </span></h2>';				
document.getElementById("outputCode_santander").value = heading_santander_data_firstTimeBuyer + getTableCodeHTML(santander_data_firstTimeBuyer) + '<p>&nbsp;</p> ' + heading_santander_data_remortgage + getTableCodeHTML(santander_data_remortgage) + '<p>&nbsp;</p> ' + heading_santander_data_movingHome + getTableCodeHTML(santander_data_movingHome);


var heading_coventryBS_data_firstTimeBuyer = '<h2><a id="firstTimeBuyer" name="firstTimeBuyer"><span style="color:#000000;"><strong>Coventry Building Society Mortgage Rates: First Time Buyer</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_coventryBS_data_movingHome = '<h2><a id="movingHome" name="movingHome"><span style="color:#000000;"><strong>Coventry Building Society Mortgage Rates: Moving Home</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_coventryBS_data_remortgage = '<h2><a id="remortgage" name="remortgage"><span style="color:#000000;"><strong>Coventry Building Society Mortgage Rates: Remortgage</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_coventryBS_data_existingCustomer = '<h2><a id="existingCustomer" name="existingCustomer"><span style="color:#000000;"><strong>Coventry Building Society Mortgage Rates: Existing Members</strong></span></a><span style="color:#000000;"> </span></h2>';				
document.getElementById("outputCode_coventryBS").value = heading_coventryBS_data_firstTimeBuyer + getTableCodeHTML(coventryBS_data_firstTimeBuyer) + '<p>&nbsp;</p> ' + heading_coventryBS_data_movingHome + getTableCodeHTML(coventryBS_data_movingHome) + '<p>&nbsp;</p> ' + heading_coventryBS_data_remortgage + getTableCodeHTML(coventryBS_data_remortgage) + '<p>&nbsp;</p> ' +  heading_coventryBS_data_existingCustomer + getTableCodeHTML(coventryBS_data_existingCustomer);



var heading_tsb_data_firstTimeBuyer = '<h2><a id="firstTimeBuyer" name="firstTimeBuyer"><span style="color:#000000;"><strong>TSB Mortgage Rates: First Time Buyer</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_tsb_data_movingHome = '<h2><a id="movingHome" name="movingHome"><span style="color:#000000;"><strong>TSB Mortgage Rates: Moving Home</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_tsb_data_remortgage = '<h2><a id="remortgage" name="remortgage"><span style="color:#000000;"><strong>TSB Mortgage Rates: Remortgage</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_tsb_data_existingCustomer = '<h2><a id="existingCustomer" name="existingCustomer"><span style="color:#000000;"><strong>TSB Mortgage Rates: Existing Customers</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_tsb_data_buyToLet = '<h2><a id="buyToLet" name="buyToLet"><span style="color:#000000;"><strong>TSB Mortgage Rates: Buy-to-Let</strong></span></a><span style="color:#000000;"> </span></h2>';				
document.getElementById("outputCode_tsb").value = heading_tsb_data_firstTimeBuyer + getTableCodeHTML(tsb_data_firstTimeBuyer) + '<p>&nbsp;</p> ' + heading_tsb_data_movingHome + getTableCodeHTML(tsb_data_movingHome) + '<p>&nbsp;</p> ' + heading_tsb_data_remortgage + getTableCodeHTML(tsb_data_remortgage) + '<p>&nbsp;</p> ' +  heading_tsb_data_existingCustomer + getTableCodeHTML(tsb_data_existingCustomer) + '<p>&nbsp;</p> ' +  heading_tsb_data_buyToLet + getTableCodeHTML(tsb_data_buyToLet);



var heading_yorkshireBuildingSociety_data_firstTimeBuyer = '<h2><a id="firstTimeBuyer" name="firstTimeBuyer"><span style="color:#000000;"><strong>Yorkshire Building Society Mortgage Rates: First Time Buyer</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_yorkshireBuildingSociety_data_movingHome = '<h2><a id="movingHome" name="movingHome"><span style="color:#000000;"><strong>Yorkshire Building Society Mortgage Rates: Moving Home</strong></span></a><span style="color:#000000;"> </span></h2>';				
var heading_yorkshireBuildingSociety_data_remortgage = '<h2><a id="remortgage" name="remortgage"><span style="color:#000000;"><strong>Yorkshire Building Society Mortgage Rates: Remortgage</strong></span></a><span style="color:#000000;"> </span></h2>';				
document.getElementById("outputCode_yorkshireBuildingSociety").value = heading_yorkshireBuildingSociety_data_firstTimeBuyer + getTableCodeHTML(yorkshireBuildingSociety_data_firstTimeBuyer) + '<p>&nbsp;</p> ' + heading_yorkshireBuildingSociety_data_movingHome + getTableCodeHTML(yorkshireBuildingSociety_data_movingHome) + '<p>&nbsp;</p> ' + heading_yorkshireBuildingSociety_data_remortgage + getTableCodeHTML(yorkshireBuildingSociety_data_remortgage);

















excel_file.value = '';

}

});



function getTableDataByFilter(sheet_data, productType, term, termExtra, company){
//alert(productType);
var filteredTableData = [];
var productType_data_formatedText;
var term_data_formatedText;
var company_data_formatedText;
        


if(sheet_data.length > 0)
{
for(var row = 0; row < sheet_data.length; row++)
{


    if(row != 0 && sheet_data[row] != ""){
        
        if(sheet_data[row][1]){
            var regexPattern = /\s+/g; //use to remove unwanted spacee
            
            productType_data_formatedText = sheet_data[row][1].toLowerCase().replace(/-/g, " ").replace(regexPattern, " ");
        }
        else{
            productType_data_formatedText = '';
            sheet_data[row][1] = '';
        }
        
        if(sheet_data[row][2]){
            term_data_formatedText = sheet_data[row][2].toLowerCase();
        }
        else{
            term_data_formatedText = '';
            sheet_data[row][2] = '';
        }
        
        if(sheet_data[row][0]){
            company_data_formatedText = sheet_data[row][0].toLowerCase();
        }
        else{
            company_data_formatedText = '';
            sheet_data[row][0] = '';
        }
        
        
        

        //if the filter is blank, set the data for comparison to blank as well. so it will be TRUE
        if(productType == ''){
            productType_data_formatedText = '';
        }
        if(term == ''){
            term_data_formatedText = '';
        }
        if(company == ''){
            company_data_formatedText = '';
        }
        
        //check filter. add if all true 
        
        //check first if this is alternativeMortgageRates(others) thru "productType"
        if(productType == 'alternativeMortgageRates' || productType == 'alternativeMortgageRates-green' || productType == 'alternativeMortgageRates-family springboard' || productType == 'alternativeMortgageRates-mortgage guarantee'){
          //check here start and end rows thru "termExtra"
          var alternativeMortgageRates_start = parseInt(termExtra.split(",")[0]);
          var alternativeMortgageRates_end = parseInt(termExtra.split(",")[1]);
          
          if(row >= alternativeMortgageRates_start && row <= alternativeMortgageRates_end ){
            if(productType == 'alternativeMortgageRates'){
                filteredTableData.push(sheet_data[row]);
            }
            else if(productType == 'alternativeMortgageRates-green' && productType_data_formatedText.includes('green')) {
                    filteredTableData.push(sheet_data[row]);
            }
            else if(productType == 'alternativeMortgageRates-family springboard' && productType_data_formatedText.includes('family springboard')) {
                    filteredTableData.push(sheet_data[row]);
            }
            else if(productType == 'alternativeMortgageRates-mortgage guarantee' && productType_data_formatedText.includes('mortgage guarantee')) {
                    filteredTableData.push(sheet_data[row]);
            }
          }
        
        }
        else{
            if(productType_data_formatedText.includes(productType) && term_data_formatedText == term && company_data_formatedText == company){
            filteredTableData.push(sheet_data[row]);
            }
        
            if(termExtra != ''){
                if(productType_data_formatedText.includes(productType) && term_data_formatedText == termExtra && company_data_formatedText == company){
                filteredTableData.unshift(sheet_data[row]);
                }
            }
        }
        
            
        
    }
    
}

}
return filteredTableData;


}



function getTableCodeHTML(sheet_data){

//NOTE!!! check for cells with only 6 cells or less. example in REMORTGAGE, on row 240   DONE!!!!!!!
//NOTE!!!! check for PERCENT  converted to DECIMAL (INITIAL RATE[3] and LOAN TO VALUE[6])  DONE
//NOTE!!!! add £ to PRODUCT FEE[5]   DONE
//NOTE!! check for \n for next line. example is Virgin money  DONE
//NOTE!!  check if no data available for this table (undefined).. should return "<i>There are currently no lenders offering [**] products at the moment.</i>"



if(sheet_data.length > 0)
{
var table_output = '<table style="border-collapse: collapse; border: #d3d3d3 1px dotted; margin-bottom: 0; overflow-x: auto; display: block; width: 100%; overflow: auto; max-height: 640px;" width="100%">';

table_output += '<thead style="width: 100%; display: block; position: sticky; top: 0;"><tr style="display: flex; width: 100%; background-color: #efefef;" bgcolor="#efefef"><th scope="col" style="border: none; line-height: 22px; width: 100%; min-width: 107px; word-break: break-word; padding: 8px; font-size: 11px; white-space: normal; display: flex; background-color: #003067; color: #fff; align-items: center; text-align: left;" align="left" bgcolor="#003067">COMPANY</th><th scope="col" style="border: none; line-height: 22px; width: 100%; min-width: 107px; word-break: break-word; padding: 8px; font-size: 11px; white-space: normal; display: flex; background-color: #003067; color: #fff; align-items: center; text-align: left;" align="left" bgcolor="#003067">TYPE</th><th scope="col" style="border: none; line-height: 22px; width: 100%; word-break: break-word; padding: 8px; font-size: 11px; white-space: normal; min-width: 62px; display: flex; background-color: #003067; color: #fff; align-items: center; text-align: left;" align="left" bgcolor="#003067">TERM</th><th scope="col" style="border: none; line-height: 22px; width: 100%; word-break: break-word; padding: 8px; font-size: 11px; white-space: normal; min-width: 76px; display: flex; background-color: #003067; color: #fff; align-items: center; text-align: left;" align="left" bgcolor="#003067">INITIAL RATE</th><th scope="col" style="border: none; line-height: 22px; width: 100%; word-break: break-word; padding: 8px; font-size: 11px; white-space: normal; min-width: 140px; display: flex; background-color: #003067; color: #fff; align-items: center; text-align: left;" align="left" bgcolor="#003067">THE OVERALL COST FOR COMPARISON IS</th><th scope="col" style="border: none; line-height: 22px; width: 100%; word-break: break-word; padding: 8px; font-size: 11px; white-space: normal; min-width: 76px; display: flex; background-color: #003067; color: #fff; align-items: center; text-align: left;" align="left" bgcolor="#003067">PRODUCT FEE</th><th scope="col" style="border: none; line-height: 22px; width: 100%; min-width: 107px; word-break: break-word; padding: 8px; font-size: 11px; white-space: normal; display: flex; background-color: #003067; color: #fff; align-items: center; text-align: left;" align="left" bgcolor="#003067">LOAN TO VALUE (LTV)</th></tr></thead>';
table_output += '<tbody style="display: block; width: 100%;">';

for(var row = 0; row < sheet_data.length; row++)
{

    var cell_bg_color = '#ffffff';
    if(row % 2 == 0) {
    table_output += '<tr style="display: flex; width: 100%; background-color: #ffffff;" bgcolor="#efefef">';
    cell_bg_color = '#ffffff';
    }
    else{
    table_output += '<tr style="display: flex; width: 100%; background-color: #efefef;" bgcolor="#efefef">';
    cell_bg_color = '#efefef';
    }
    
    for(var cell = 0; cell < 7; cell++)
    {
    
        if(cell >= sheet_data[row].length  ){ //check if empty cell
        table_output += '<td style="background-color:' + cell_bg_color + '; border: none; text-align: left; line-height: 22px; width: 100%; min-width: 62px; word-break: break-word; display: block; padding: 8px; font-size: 11px; white-space: normal;" width="100%" align="left"> </td>';
        }
        else 
        {
            var cellData;
            if(cell ==  1 ){
                cellData = sheet_data[row][cell].replace("\n", "<br>");
            }
            else if(cell ==  3 ){
                cellData = (sheet_data[row][cell] * 100).toFixed(2) + '%';
            }
            else if(cell ==  4){
            //check if string or int
                if(typeof sheet_data[row][cell] == "number"){
                    cellData = (sheet_data[row][cell] * 100).toFixed(2) + '%';
                }
                else{
                cellData = sheet_data[row][cell];
                }
            }
            else if(cell ==  5){
        
                if(typeof sheet_data[row][cell] == "number"){
                cellData = '£' + sheet_data[row][cell].toFixed(2);
                }
                else{
                cellData = sheet_data[row][cell];
                }
            }
            else if(cell ==  6){
        
                if(typeof sheet_data[row][cell] == "number"){
                cellData = (sheet_data[row][cell] * 100) + '%';
                }
                else{
                cellData = sheet_data[row][cell];
                }
            }
            else{
                cellData = sheet_data[row][cell];
            }
        
            if(cell == 2){
                table_output += '<td style="background-color:' + cell_bg_color + '; border: none; text-align: left; line-height: 22px; width: 100%; min-width: 62px; word-break: break-word; display: block; padding: 8px; font-size: 11px; white-space: normal;" width="100%" align="left">'+cellData+'</td>';
            }
            else if(cell == 3){
                table_output += '<td style="background-color:' + cell_bg_color + '; border: none; text-align: left; line-height: 22px; width: 100%; min-width: 76px; word-break: break-word; display: block; padding: 8px; font-size: 11px; white-space: normal;" width="100%" align="left">'+cellData+'</td>';
            }
            else if(cell == 4){
                table_output += '<td style="background-color:' + cell_bg_color + '; border: none; text-align: left; line-height: 22px; width: 100%; min-width: 140px; word-break: break-word; display: block; padding: 8px; font-size: 11px; white-space: normal;" width="100%" align="left">'+cellData+'</td>';
            }
            else if(cell == 5){
                table_output += '<td style="background-color:' + cell_bg_color + '; border: none; text-align: left; line-height: 22px; width: 100%; min-width: 76px; word-break: break-word; display: block; padding: 8px; font-size: 11px; white-space: normal;" width="100%" align="left">'+cellData+'</td>';
            }
            else{
                table_output += '<td style="background-color:' + cell_bg_color + '; border: none; text-align: left; line-height: 22px; width: 100%; min-width: 107px; word-break: break-word; display: block; padding: 8px; font-size: 11px; white-space: normal;" width="100%" align="left">'+cellData+'</td>';
            }
        }
        
    }

    table_output += '</tr>';

}

table_output += '</tbody>';
table_output += '</table>';

//document.getElementById('excel_data').innerHTML = table_output;

return table_output;
}
else{
return '<i>There are currently no lenders offering these products at the moment.</i>';
}
}
