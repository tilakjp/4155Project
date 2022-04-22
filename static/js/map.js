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

const unionWest = L.marker([35.308189, -80.732685]).addTo(map);
unionWest.bindPopup('<h1>Union West</h1>');

//Union East marker

const unionEast = L.marker([35.308034, -80.73285]).addTo(map);
unionEast.bindPopup('<h1>Union East</h1>');

//Auxiliary services marker

const auxiliaryServices = L.marker([35.308032, -80.730564]).addTo(map);
auxiliaryServices.bindPopup('<h1>Auxiliary Services</h1>');

//Fretwell North marker

const fretwellNorth = L.marker([35.307377, -80.729290]).addTo(map);
fretwellNorth.bindPopup('<h1>Fretwell North</h1>');

//Fretwell South marker

const fretwellSouth = L.marker([35.306983, -80.729515]).addTo(map);
fretwellSouth.bindPopup('<h1>Fretwell South</h1>');

//Cato Hall South marker

const catoHSouth = L.marker([35.304976, -80.728401]).addTo(map);
catoHSouth.bindPopup('<h1>Cato Hall South</h1>');

//Cato Hall North marker

const catoHNorth = L.marker([35.304993, -80.728107]).addTo(map);
catoHNorth.bindPopup('<h1>Cato Hall North</h1>');

//Science building marker

const scienceBuilding = L.marker([35.308144, -80.730247]).addTo(map);
scienceBuilding.bindPopup('<h1>Science Building</h1>');

//Robinson Hall South marker

const robinsonHSouth = L.marker([35.303587, -80.729415]).addTo(map);
robinsonHSouth.bindPopup('<h1>Robinson Hall South</h1>');

//Robinson Hall North marker

const robinsonHNorth = L.marker([35.303331, -80.729402]).addTo(map);
robinsonHNorth.bindPopup('<h1>Robinson Hall North</h1>');

//Levine Hall West marker

const levineHWest = L.marker([35.302062, -80.733021]).addTo(map);
levineHWest.bindPopup('<h1>Levine Hall West</h1>');

//Levine Hall East marker

const levineHEast = L.marker([35.302017, -80.732758]).addTo(map);
levineHEast.bindPopup('<h1>Levine Hall East</h1>');

//Hunt Hall marker

const huntHall = L.marker([35.301260, -80.735547]).addTo(map);
huntHall.bindPopup('<h1>Hunt Hall</h1>');

//South Village Deck marker

const soViDeck = L.marker([35.301067, -80.735815]).addTo(map);
soViDeck.bindPopup('<h1>South Village Deck</h1>');

//Alumni Way East marker

const alumniWEast = L.marker([35.302522, -80.737626]).addTo(map);
alumniWEast.bindPopup('<h1>Alumni Way East</h1>');

//Alumni Way West marker

const alumniWWest = L.marker([35.302938, -80.737700]).addTo(map);
alumniWWest.bindPopup('<h1>Alumni Way West</h1>');

//Resse West marker

const reeseWest = L.marker([35.304483, -80.732801]).addTo(map);
reeseWest.bindPopup('<h1>Reese West</h1>');

//Resse East marker

const reeseEast = L.marker([35.304287, -80.732822]).addTo(map);
reeseEast.bindPopup('<h1>Reese East</h1>');

//Cone Deck marker

const coneDeck = L.marker([35.304281, -80.734590]).addTo(map);
coneDeck.bindPopup('<h1>Cone Deck</h1>');

//Student Union marker

const studentUnion = L.marker([35.309157, -80.736394]).addTo(map);
studentUnion.bindPopup('<h1>Student Union</h1>');

//Belk Hall South marker

const belkHSouth = L.marker([35.310363, -80.736182]).addTo(map);
belkHSouth.bindPopup('<h1>Belk Hall South</h1>');

//Light Rail West marker

const lightRailW = L.marker([35.311955, -80.733446]).addTo(map);
lightRailW.bindPopup('<h1>Light Rail West</h1>');

//Light Rail East marker

const lightRailE = L.marker([35.311754, -80.733180]).addTo(map);
lightRailE.bindPopup('<h1>Light Rail East</h1>');

//North Deck marker

const northDeck = L.marker([35.313448, -80.731930]).addTo(map);
northDeck.bindPopup('<h1>North Deck</h1>');

// FM/PPS marker

const fmp = L.marker([35.311668, -80.730329]).addTo(map);
fmp.bindPopup('<h1>FM/PPS</h1>');

// Student Health East marker

const studentHealthE = L.marker([35.311549, -80.730625]).addTo(map);
studentHealthE.bindPopup('<h1>Student Health East</h1>');

// Student Health North marker

const studentHealthN = L.marker([35.310579, -80.729380]).addTo(map);
studentHealthN.bindPopup('<h1>Student Health North</h1>');

// Martin Hall marker

const martinHall = L.marker([35.310325, -80.726784]).addTo(map);
martinHall.bindPopup('<h1>Martin Hall</h1>');

// Lot 6 marker

const lotSix = L.marker([35.308852, -80.725144]).addTo(map);
lotSix.bindPopup('<h1>Lot 6</h1>');

// Lot 5A marker

const lotFiveA = L.marker([35.307241, -80.725246]).addTo(map);
lotFiveA.bindPopup('<h1>Lot 5A</h1>');

// East Deck 2 marker

const eastDeckTwo = L.marker([35.306392, -80.726783]).addTo(map);
eastDeckTwo.bindPopup('<h1>East Deck 2</h1>');

// Athletics Complex West marker

const athleticsCompW = L.marker([35.307501, -80.739756]).addTo(map);
athleticsCompW.bindPopup('<h1>Athletics Complex West</h1>');

// Athletics Complex East marker

const athleticsCompE = L.marker([35.307383, -80.739870]).addTo(map);
athleticsCompE.bindPopup('<h1>Athletics Complex East</h1>');

// EPIC North marker

const epicNorth = L.marker([35.309370, -80.741294]).addTo(map);
epicNorth.bindPopup('<h1>EPIC North</h1>');

// EPIC South marker

const epicSouth = L.marker([35.310059, -80.741933]).addTo(map);
epicSouth.bindPopup('<h1>EPIC South</h1>');

// Grigg Hall marker

const griggHall = L.marker([35.310887, -80.741418]).addTo(map);
griggHall.bindPopup('<h1>Grigg Hall</h1>');

// Motorsports marker

const motorsports = L.marker([35.312843, -80.741028]).addTo(map);
motorsports.bindPopup('<h1>Motorsports</h1>');

// Duke Centennial Hall marker

const dukeCentennialHall = L.marker([35.312252, -80.741665]).addTo(map);
dukeCentennialHall.bindPopup('<h1>Duke Centennial Hall</h1>');

// Portal West marker

const portalWest = L.marker([35.311106, -80.743099]).addTo(map);
portalWest.bindPopup('<h1>Portal West</h1>');

// CRI Deck marker

const criDeck = L.marker([35.309385, -80.744113]).addTo(map);
criDeck.bindPopup('<h1>CRI Deck</h1>');

