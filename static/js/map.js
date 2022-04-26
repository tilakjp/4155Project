const apiKey = 'pk.eyJ1IjoiYXBhdGUyMjciLCJhIjoiY2wyOTNvemxxMDM4cTNkcnV6OTJ2YWU4ZSJ9.2Md9glTJJSkravRFWvtH0Q';

const   map = L.map('map').setView([35.306872, -80.734292 ], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
   id: 'mapbox/streets-v11',
   tileSize: 512,
   zoomOffset: -1,
   accessToken: apiKey
}).addTo(map); 

//Union West marker
let unionWestTmp = `

<h3>Union West</h3>
<h4>Routes: Silver and Gold </h4>

`
const unionWest = L.marker([35.308189, -80.732685]).addTo(map);
unionWest.bindPopup(unionWestTmp);

//Union East marker
let unionEastTmp = `

<h3>Union East</h3>
<h4>Routes: Silver and Green </h4>

`
const unionEast = L.marker([35.308034, -80.73285]).addTo(map);
unionEast.bindPopup(unionEastTmp);

//Auxiliary services marker
let auxiliaryServicesTmp = `

<h3>Auxiliary Services</h3>
<h4>Routes: Silver and Green </h4>

`
const auxiliaryServices = L.marker([35.308032, -80.730564]).addTo(map);
auxiliaryServices.bindPopup(auxiliaryServicesTmp);

//Fretwell North marker
let fretwellNorthTmp = `

<h3>Fretwell North</h3>
<h4>Routes: Silver, Green and Gold </h4>

`
const fretwellNorth = L.marker([35.307377, -80.729290]).addTo(map);
fretwellNorth.bindPopup(fretwellNorthTmp);

//Fretwell South marker
let fretwellSouthTmp = `

<h3>Fretwell South</h3>
<h4>Routes: Green and Gold </h4>

`
const fretwellSouth = L.marker([35.306983, -80.729515]).addTo(map);
fretwellSouth.bindPopup(fretwellSouthTmp);

//Cato Hall South marker
let catoHSouthTmp = `

<h3>Cato Hall South</h3>
<h4>Routes: Green and Gold </h4>

`
const catoHSouth = L.marker([35.304976, -80.728401]).addTo(map);
catoHSouth.bindPopup(catoHSouthTmp);

//Cato Hall North marker
let catoHNorthTmp = `

<h3>Cato Hall North</h3>
<h4>Routes: Green and Gold </h4>

`
const catoHNorth = L.marker([35.304993, -80.728107]).addTo(map);
catoHNorth.bindPopup(catoHNorthTmp);

//Science building marker
let scienceBuildingTmp = `

<h3>Science Building</h3>
<h4>Routes: Silver and Gold </h4>

`
const scienceBuilding = L.marker([35.308144, -80.730247]).addTo(map);
scienceBuilding.bindPopup(scienceBuildingTmp);

//Robinson Hall South marker
let robinsonHSouthTmp = `

<h3>Robinson Hall South</h3>
<h4>Routes: Green and Gold </h4>

`
const robinsonHSouth = L.marker([35.303587, -80.729415]).addTo(map);
robinsonHSouth.bindPopup(robinsonHSouth);

//Robinson Hall North marker
let robinsonHNorthTmp = `

<h3>Robinson Hall North</h3>
<h4>Routes: Green and Gold </h4>

`
const robinsonHNorth = L.marker([35.303331, -80.729402]).addTo(map);
robinsonHNorth.bindPopup(robinsonHNorthTmp);

//Levine Hall West marker
let levineHWestTmp = `

<h3>Levine Hall West</h3>
<h4>Routes: Gold </h4>

`
const levineHWest = L.marker([35.302062, -80.733021]).addTo(map);
levineHWest.bindPopup(levineHWestTmp);

//Hunt Hall marker
let huntHallTmp = `

<h3>Hunt Hall</h3>
<h4>Routes: Gold </h4>

`
const huntHall = L.marker([35.301260, -80.735547]).addTo(map);
huntHall.bindPopup(huntHallTmp);

//South Village Deck marker
let soViDeckTmp = `

<h3>South Village Deck</h3>
<h4>Routes: Green </h4>

`
const soViDeck = L.marker([35.301067, -80.735815]).addTo(map);
soViDeck.bindPopup(soViDeckTmp);

//Alumni Way East marker
let alumniWEastTmp = `

<h3>Alumni Way East</h3>
<h4>Routes: Green </h4>

`
const alumniWEast = L.marker([35.302522, -80.737626]).addTo(map);
alumniWEast.bindPopup('<h3>Alumni Way East</h3>');

//Alumni Way West marker
let alumniWWestTmp = `

<h3>Alumni Way West</h3>
<h4>Routes: Gold </h4>

`
const alumniWWest = L.marker([35.302938, -80.737700]).addTo(map);
alumniWWest.bindPopup(alumniWWestTmp);

//Reese West marker
let reeseWestTmp = `

<h3>Reese West</h3>
<h4>Routes: Green </h4>

`
const reeseWest = L.marker([35.304483, -80.732801]).addTo(map);
reeseWest.bindPopup(reeseWestTmp);

//Reese East marker
let reeseEastTmp = `

<h3>Reese East</h3>
<h4>Routes: Gold </h4>

`
const reeseEast = L.marker([35.304287, -80.732822]).addTo(map);
reeseEast.bindPopup(reeseEastTmp);

//Cone Deck marker
let coneDeckTmp = `

<h3>Cone Deck</h3>
<h4>Routes: Green </h4>

`
const coneDeck = L.marker([35.304281, -80.734590]).addTo(map);
coneDeck.bindPopup(coneDeckTmp);

//Student Union Deck marker
let studentUnionDeckTmp = `

<h3>Student Union Deck</h3>
<h4>Routes: Gold </h4>

`
const studentUnionDeck = L.marker([35.309157, -80.736394]).addTo(map);
studentUnionDeck.bindPopup(studentUnionDeckTmp);

//Belk Hall South marker
let belkHSouthTmp = `

<h3>Belk Hall South</h3>
<h4>Routes: Green </h4>

`
const belkHSouth = L.marker([35.310363, -80.736182]).addTo(map);
belkHSouth.bindPopup(belkHSouthTmp);

//Light Rail West marker
let lightRailWTmp = `

<h3>Light Rail West</h3>
<h4>Routes: Green </h4>

`
const lightRailW = L.marker([35.311955, -80.733446]).addTo(map);
lightRailW.bindPopup(lightRailWTmp);

//Light Rail East marker
let lightRailETmp = `

<h3>Light Rail East</h3>
<h4>Routes: Gold </h4>

`
const lightRailE = L.marker([35.311754, -80.733180]).addTo(map);
lightRailE.bindPopup(lightRailETmp);

//North Deck marker
let northDeckTmp = `

<h3>North Deck</h3>
<h4>Routes: Green </h4>

`
const northDeck = L.marker([35.313448, -80.731930]).addTo(map);
northDeck.bindPopup(northDeckTmp);

// FM/PPS marker
let fmpTmp = `

<h3>FM/PPS</h3>
<h4>Routes: Green </h4>

`
const fmp = L.marker([35.311668, -80.730329]).addTo(map);
fmp.bindPopup(fmpTmp);

// Student Health East marker
let studentHealthETmp = `

<h3>Student Health East</h3>
<h4>Routes: Gold </h4>

`
const studentHealthE = L.marker([35.311549, -80.730625]).addTo(map);
studentHealthE.bindPopup(studentHealthETmp);

// Student Health North marker
let studentHealthNTmp = `

<h3>Student Health North</h3>
<h4>Routes: Silver and Green </h4>

`
const studentHealthN = L.marker([35.310579, -80.729380]).addTo(map);
studentHealthN.bindPopup(studentHealthNTmp);

// Martin Hall marker
let martinHallTmp = `

<h3>Hunt Hall</h3>
<h4>Routes: Silver </h4>

`
const martinHall = L.marker([35.310325, -80.726784]).addTo(map);
martinHall.bindPopup(martinHallTmp);

// Lot 6 marker
let lotSixTmp = `

<h3>Lot 6</h3>
<h4>Routes: Silver </h4>

`
const lotSix = L.marker([35.308852, -80.725144]).addTo(map);
lotSix.bindPopup(lotSixTmp);

// Lot 5A marker
let lotFiveATmp = `

<h3>Lot 5A</h3>
<h4>Routes: Silver </h4>

`
const lotFiveA = L.marker([35.307241, -80.725246]).addTo(map);
lotFiveA.bindPopup(lotFiveATmp);

// East Deck 2 marker
let eastDeckTwoTmp = `

<h3>East Deck Two</h3>
<h4>Routes: Silver </h4>

`
const eastDeckTwo = L.marker([35.306392, -80.726783]).addTo(map);
eastDeckTwo.bindPopup(eastDeckTwoTmp);

// Athletics Complex West marker
let athleticsCompWTmp = `

<h3>Hunt Hall</h3>
<h4>Routes: Gold </h4>

`
const athleticsCompW = L.marker([35.307501, -80.739756]).addTo(map);
athleticsCompW.bindPopup(athleticsCompWTmp);

// Athletics Complex East marker
let athleticsCompETmp = `

<h3>Athletics Complex East</h3>
<h4>Routes: Silver </h4>

`
const athleticsCompE = L.marker([35.307383, -80.739870]).addTo(map);
athleticsCompE.bindPopup(athleticsCompETmp);

// EPIC North marker
let epicNorthTmp = `

<h3>EPIC North</h3>
<h4>Routes: Silver </h4>

`
const epicNorth = L.marker([35.309370, -80.741294]).addTo(map);
epicNorth.bindPopup(epicNorthTmp);

// EPIC South marker
let epicSouthTmp = `

<h3>EPIC South</h3>
<h4>Routes: Silver </h4>

`
const epicSouth = L.marker([35.310059, -80.741933]).addTo(map);
epicSouth.bindPopup(epicSouthTmp);

// Grigg Hall marker
let griggHallTmp = `

<h3>Grigg Hall</h3>
<h4>Routes: Silver </h4>

`
const griggHall = L.marker([35.310887, -80.741418]).addTo(map);
griggHall.bindPopup(griggHallTmp);

// Motorsports marker
let motorsportsTmp = `

<h3>Motorsports</h3>
<h4>Routes: Silver </h4>

`
const motorsports = L.marker([35.312843, -80.741028]).addTo(map);
motorsports.bindPopup(motorsportsTmp);

// Duke Centennial Hall marker
let dukeCentennialHallTmp = `

<h3>Duke Centennial Hall</h3>
<h4>Routes: Silver </h4>

`
const dukeCentennialHall = L.marker([35.312252, -80.741665]).addTo(map);
dukeCentennialHall.bindPopup(dukeCentennialHallTmp);

// Portal West marker
let portalWestTmp = `

<h3>Portal West</h3>
<h4>Routes: Silver </h4>

`
const portalWest = L.marker([35.311106, -80.743099]).addTo(map);
portalWest.bindPopup(portalWestTmp);

// CRI Deck marker
let criDeckTmp = `

<h3>CRI Deck</h3>
<h4>Routes: Silver </h4>

`
const criDeck = L.marker([35.309385, -80.744113]).addTo(map);
criDeck.bindPopup(criDeckTmp);

//BUILDINGS OUTLINE

// Student Union

const studentUnion = L.polygon([
   [35.308226, -80.733409],
   [35.308473, -80.733095],
   [35.308987, -80.733327],
   [35.308994, -80.734043],
   [35.308757, -80.734384],
   [35.308521, -80.734375],
   [35.308227, -80.734079]
],{
   color: 'blue',
   fillColor: 'blue',
   fillOpacity: 0.2,

}).addTo(map)  

//Cato College of Education

const catoCollege = L.polygon([
   [35.307783, -80.734438],
   [35.307382, -80.734422],
   [35.307283, -80.734226],
   [35.307264, -80.733923],
   [35.307364, -80.733829],
   [35.307772, -80.733819],
   [35.307903, -80.733913],
   [35.307899, -80.734224]
],{
   color: 'blue',
   fillColor: 'blue',
   fillOpacity: 0.2,

}).addTo(map)  

//College of Health and Human Sciences

const collegeHealth = L.polygon([
   [35.307945, -80.733588],
   [35.307369, -80.733583],
   [35.306973, -80.733645],
   [35.306882, -80.733504],
   [35.306858, -80.733245],
   [35.306896, -80.733088],
   [35.307067, -80.732849],
   [35.307319, -80.733084],
   [35.307853, -80.733126],
   [35.307989, -80.733347],
],{
   color: 'blue',
   fillColor: 'blue',
   fillOpacity: 0.2,

}).addTo(map)  

//Burson

const Burson = L.polygon([
   [35.307775, -80.733069],
   [35.307439, -80.733054],
   [35.307082, -80.732389],
   [35.307057, -80.732174],
   [35.307057, -80.732174],
   [35.307206, -80.731890],
   [35.307752, -80.731923],
],{
   color: 'blue',
   fillColor: 'blue',
   fillOpacity: 0.2,

}).addTo(map)  

//Cameron

const Cameron = L.polygon([
   [35.307920438216186, -80.73160747819938],
   [35.307432432774114, -80.73161170525938],
   [35.30742504763413, -80.73080473815888],
   [35.3079093452525, -80.73079870943644]
   
],{
   color: 'blue',
   fillColor: 'blue',
   fillOpacity: 0.2,

}).addTo(map)  

// Auxiliary Building

const Auxiliary = L.polygon([
    [35.30791379661371, -80.73063616731012],
    [35.30765277727951, -80.73063750858087],
    [35.30765223000746, -80.73056777117525],
    [35.30754442944524, -80.73056643024523],
    [35.30754224019883, -80.73037934640212],
    [35.30785688657982, -80.73037867456777],
    [35.307858528281194, -80.73051479743783],
    [35.30785852828208, -80.73051546799024],
    [35.307912702060186, -80.73051412675815]
],{
    color: 'blue',
   fillColor: 'blue',
   fillOpacity: 0.2,

}).addTo(map)  