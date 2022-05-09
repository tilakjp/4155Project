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
<h4> Silver and Gold </h4>

`
const unionWest = L.marker([35.308189, -80.732685]).addTo(map);
unionWest.bindPopup(unionWestTmp);

//Union East marker
let unionEastTmp = `

<h3>Union East</h3>
<h4> Silver and Green </h4>

`
const unionEast = L.marker([35.308034, -80.73285]).addTo(map);
unionEast.bindPopup(unionEastTmp);

//Auxiliary services marker
let auxiliaryServicesTmp = `

<h3>Auxiliary Services</h3>
<h4> Silver and Green </h4>

`
const auxiliaryServices = L.marker([35.308032, -80.730564]).addTo(map);
auxiliaryServices.bindPopup(auxiliaryServicesTmp);

//Fretwell North marker
let fretwellNorthTmp = `

<h3>Fretwell North</h3>
<h4> Silver, Green and Gold </h4>

`
const fretwellNorth = L.marker([35.307377, -80.729290]).addTo(map);
fretwellNorth.bindPopup(fretwellNorthTmp);

//Fretwell South marker
let fretwellSouthTmp = `

<h3>Fretwell South</h3>
<h4> Green and Gold </h4>

`
const fretwellSouth = L.marker([35.306983, -80.729515]).addTo(map);
fretwellSouth.bindPopup(fretwellSouthTmp);

//Cato Hall South marker
let catoHSouthTmp = `

<h3>Cato Hall South</h3>
<h4> Green and Gold </h4>

`
const catoHSouth = L.marker([35.304976, -80.728401]).addTo(map);
catoHSouth.bindPopup(catoHSouthTmp);

//Cato Hall North marker
let catoHNorthTmp = `

<h3>Cato Hall North</h3>
<h4> Green and Gold </h4>

`
const catoHNorth = L.marker([35.304993, -80.728107]).addTo(map);
catoHNorth.bindPopup(catoHNorthTmp);

//Science building marker
let scienceBuildingTmp = `

<h3>Science Building</h3>
<h4> Silver and Gold </h4>

`
const scienceBuilding = L.marker([35.308144, -80.730247]).addTo(map);
scienceBuilding.bindPopup(scienceBuildingTmp);

//Robinson Hall South marker
let robinsonHSouthTmp = `

<h3>Robinson Hall South</h3>
<h4> Green and Gold </h4>

`
const robinsonHSouth = L.marker([35.303587, -80.729415]).addTo(map);
robinsonHSouth.bindPopup(robinsonHSouth);

//Robinson Hall North marker
let robinsonHNorthTmp = `

<h3>Robinson Hall North</h3>
<h4> Green and Gold </h4>

`
const robinsonHNorth = L.marker([35.303331, -80.729402]).addTo(map);
robinsonHNorth.bindPopup(robinsonHNorthTmp);

//Levine Hall West marker
let levineHWestTmp = `

<h3>Levine Hall West</h3>
<h4> Gold </h4>

`
const levineHWest = L.marker([35.302062, -80.733021]).addTo(map);
levineHWest.bindPopup(levineHWestTmp);

//Hunt Hall marker
let huntHallTmp = `

<h3>Hunt Hall</h3>
<h4> Gold </h4>

`
const huntHall = L.marker([35.301260, -80.735547]).addTo(map);
huntHall.bindPopup(huntHallTmp);

//South Village Deck marker
let soViDeckTmp = `

<h3>South Village Deck</h3>
<h4> Green </h4>

`
const soViDeck = L.marker([35.301067, -80.735815]).addTo(map);
soViDeck.bindPopup(soViDeckTmp);

//Alumni Way East marker
let alumniWEastTmp = `

<h3>Alumni Way East</h3>
<h4> Green </h4>

`
const alumniWEast = L.marker([35.302522, -80.737626]).addTo(map);
alumniWEast.bindPopup('<h3>Alumni Way East</h3>');

//Alumni Way West marker
let alumniWWestTmp = `

<h3>Alumni Way West</h3>
<h4> Gold </h4>

`
const alumniWWest = L.marker([35.302938, -80.737700]).addTo(map);
alumniWWest.bindPopup(alumniWWestTmp);

//Reese West marker
let reeseWestTmp = `

<h3>Reese West</h3>
<h4> Green </h4>

`
const reeseWest = L.marker([35.304483, -80.732801]).addTo(map);
reeseWest.bindPopup(reeseWestTmp);

//Reese East marker
let reeseEastTmp = `

<h3>Reese East</h3>
<h4> Gold </h4>

`
const reeseEast = L.marker([35.304287, -80.732822]).addTo(map);
reeseEast.bindPopup(reeseEastTmp);

//Cone Deck marker
let coneDeckTmp = `

<h3>Cone Deck</h3>
<h4> Green </h4>

`
const coneDeck = L.marker([35.304281, -80.734590]).addTo(map);
coneDeck.bindPopup(coneDeckTmp);

//Student Union Deck marker
let studentUnionDeckTmp = `

<h3>Student Union Deck</h3>
<h4> Gold </h4>

`
const studentUnionDeck = L.marker([35.309157, -80.736394]).addTo(map);
studentUnionDeck.bindPopup(studentUnionDeckTmp);

//Belk Hall South marker
let belkHSouthTmp = `

<h3>Belk Hall South</h3>
<h4> Green </h4>

`
const belkHSouth = L.marker([35.310363, -80.736182]).addTo(map);
belkHSouth.bindPopup(belkHSouthTmp);

//Light Rail West marker
let lightRailWTmp = `

<h3>Light Rail West</h3>
<h4> Green </h4>

`
const lightRailW = L.marker([35.311955, -80.733446]).addTo(map);
lightRailW.bindPopup(lightRailWTmp);

//Light Rail East marker
let lightRailETmp = `

<h3>Light Rail East</h3>
<h4> Gold </h4>

`
const lightRailE = L.marker([35.311754, -80.733180]).addTo(map);
lightRailE.bindPopup(lightRailETmp);

//North Deck marker
let northDeckTmp = `

<h3>North Deck</h3>
<h4> Green </h4>

`
const northDeck = L.marker([35.313448, -80.731930]).addTo(map);
northDeck.bindPopup(northDeckTmp);

// FM/PPS marker
let fmpTmp = `

<h3>FM/PPS</h3>
<h4> Green </h4>

`
const fmp = L.marker([35.311668, -80.730329]).addTo(map);
fmp.bindPopup(fmpTmp);

// Student Health East marker
let studentHealthETmp = `

<h3>Student Health East</h3>
<h4> Gold </h4>

`
const studentHealthE = L.marker([35.311549, -80.730625]).addTo(map);
studentHealthE.bindPopup(studentHealthETmp);

// Student Health North marker
let studentHealthNTmp = `

<h3>Student Health North</h3>
<h4> Silver and Green </h4>

`
const studentHealthN = L.marker([35.310579, -80.729380]).addTo(map);
studentHealthN.bindPopup(studentHealthNTmp);

// Martin Hall marker
let martinHallTmp = `

<h3>Hunt Hall</h3>
<h4> Silver </h4>

`
const martinHall = L.marker([35.310325, -80.726784]).addTo(map);
martinHall.bindPopup(martinHallTmp);

// Lot 6 marker
let lotSixTmp = `

<h3>Lot 6</h3>
<h4> Silver </h4>

`
const lotSix = L.marker([35.308852, -80.725144]).addTo(map);
lotSix.bindPopup(lotSixTmp);

// Lot 5A marker
let lotFiveATmp = `

<h3>Lot 5A</h3>
<h4> Silver </h4>

`
const lotFiveA = L.marker([35.307241, -80.725246]).addTo(map);
lotFiveA.bindPopup(lotFiveATmp);

// East Deck 2 marker
let eastDeckTwoTmp = `

<h3>East Deck Two</h3>
<h4> Silver </h4>

`
const eastDeckTwo = L.marker([35.306392, -80.726783]).addTo(map);
eastDeckTwo.bindPopup(eastDeckTwoTmp);

// Athletics Complex West marker
let athleticsCompWTmp = `

<h3>Hunt Hall</h3>
<h4> Gold </h4>

`
const athleticsCompW = L.marker([35.307501, -80.739756]).addTo(map);
athleticsCompW.bindPopup(athleticsCompWTmp);

// Athletics Complex East marker
let athleticsCompETmp = `

<h3>Athletics Complex East</h3>
<h4> Silver </h4>

`
const athleticsCompE = L.marker([35.307383, -80.739870]).addTo(map);
athleticsCompE.bindPopup(athleticsCompETmp);

// EPIC North marker
let epicNorthTmp = `

<h3>EPIC North</h3>
<h4> Silver </h4>

`
const epicNorth = L.marker([35.309370, -80.741294]).addTo(map);
epicNorth.bindPopup(epicNorthTmp);

// EPIC South marker
let epicSouthTmp = `

<h3>EPIC South</h3>
<h4> Silver </h4>

`
const epicSouth = L.marker([35.310059, -80.741933]).addTo(map);
epicSouth.bindPopup(epicSouthTmp);

// Grigg Hall marker
let griggHallTmp = `

<h3>Grigg Hall</h3>
<h4> Silver </h4>

`
const griggHall = L.marker([35.310887, -80.741418]).addTo(map);
griggHall.bindPopup(griggHallTmp);

// Motorsports marker
let motorsportsTmp = `

<h3>Motorsports</h3>
<h4> Silver </h4>

`
const motorsports = L.marker([35.312843, -80.741028]).addTo(map);
motorsports.bindPopup(motorsportsTmp);

// Duke Centennial Hall marker
let dukeCentennialHallTmp = `

<h3>Duke Centennial Hall</h3>
<h4> Silver </h4>

`
const dukeCentennialHall = L.marker([35.312252, -80.741665]).addTo(map);
dukeCentennialHall.bindPopup(dukeCentennialHallTmp);

// Portal West marker
let portalWestTmp = `

<h3>Portal West</h3>
<h4> Silver </h4>

`
const portalWest = L.marker([35.311106, -80.743099]).addTo(map);
portalWest.bindPopup(portalWestTmp);

// CRI Deck marker
let criDeckTmp = `

<h3>CRI Deck</h3>
<h4> Silver </h4>

`
const criDeck = L.marker([35.309385, -80.744113]).addTo(map);
criDeck.bindPopup(criDeckTmp);

//BUILDINGS OUTLINE

// Student Union
let studentUniontmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const studentUnion = L.polygon([
   [35.308226, -80.733409],
   [35.308473, -80.733095],
   [35.308987, -80.733327],
   [35.308994, -80.734043],
   [35.308757, -80.734384],
   [35.308521, -80.734375],
   [35.308227, -80.734079]
],{
   color: 'green',
   fillColor: 'green',
   fillOpacity: 0.2,

}).addTo(map)
studentUnion.bindPopup(studentUniontmp);

// College of Education
let collegeEduTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const collegeEdu = L.polygon([
   [35.307783, -80.734438],
   [35.307382, -80.734422],
   [35.307283, -80.734226],
   [35.307264, -80.733923],
   [35.307364, -80.733829],
   [35.307772, -80.733819],
   [35.307903, -80.733913],
   [35.307899, -80.734224]
],{
   color: 'green',
   fillColor: 'green',
   fillOpacity: 0.2,

}).addTo(map)  
collegeEdu.bindPopup(collegeEduTmp);

//College of Health and Human Sciences
let collegeHealthTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
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
   color: 'green',
   fillColor: 'green',
   fillOpacity: 0.2,

}).addTo(map)  
collegeHealth.bindPopup(collegeHealthTmp);

//Burson
let bursonTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const Burson = L.polygon([
   [35.307775, -80.733069],
   [35.307439, -80.733054],
   [35.307082, -80.732389],
   [35.307057, -80.732174],
   [35.307057, -80.732174],
   [35.307206, -80.731890],
   [35.307752, -80.731923],
],{
   color: 'green',
   fillColor: 'green',
   fillOpacity: 0.2,

}).addTo(map)  
Burson.bindPopup(bursonTmp);

//Cameron
let CameronTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const Cameron = L.polygon([
   [35.307920438216186, -80.73160747819938],
   [35.307432432774114, -80.73161170525938],
   [35.30742504763413, -80.73080473815888],
   [35.3079093452525, -80.73079870943644]
   
],{
   color: 'green',
   fillColor: 'green',
   fillOpacity: 0.2,

}).addTo(map)  
Cameron.bindPopup(CameronTmp);

// Auxiliary Building
let AuxiliaryTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
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
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
Auxiliary.bindPopup(AuxiliaryTmp);

// McEniry Building
let mcEniryTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const mcEniry = L.polygon([
   [35.30741179606161, -80.73048264303307],
   [35.30733219193872, -80.73048471814926],
   [35.30732596396075, -80.73062779621883],
   [35.307202840781635, -80.73062913708517],
   [35.307201373615605, -80.73063193136919],
   [35.30720192082195, -80.73063863689254],
   [35.30707551434661, -80.73063930720396],
   [35.30707496724174, -80.73042003697404],
   [35.307120386018326, -80.73041869584321],
   [35.307120385783506, -80.73023764690916],
   [35.30685703002433, -80.73023894326923],
   [35.3067871049559, -80.73015952811372],
   [35.30678710422513, -80.72997143901036],
   [35.30685532312694, -80.72987216920508],
   [35.30738208176329, -80.72987587400974]

],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
mcEniry.bindPopup(mcEniryTmp);

// McMillan Greenhouse
let mcMillanTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const mcMillan = L.polygon([
   [35.308010656267236, -80.72985740978937],
   [35.307725035613736, -80.72985972993231],
   [35.30772613002661, -80.72988118758943],
   [35.307637481952064, -80.72988319919082],
   [35.3076358401122, -80.7296096143165],
   [35.30772394098571, -80.72960827299195],
   [35.307725035476594, -80.72964850610977],
   [35.30801154939286, -80.7296486748643]    
],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
mcMillan.bindPopup(mcMillanTmp);

// UREC
let URECTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const urec = L.polygon([
   [35.30847097378254, -80.73625969699798],
   [35.30848993938839, -80.7349312852819],
   [35.308446, -80.734399],
   [35.308126, -80.734445],
   [35.30807607975513, -80.73628190679412]

  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
urec.bindPopup(URECTmp);

// Woodward
let woodwardTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const woodward = L.polygon([
   [35.307683, -80.735981],
   [35.306814, -80.735982],
   [35.306806, -80.735546],
   [35.307320, -80.735492],
   [35.307362, -80.734701],
   [35.307688, -80.734698]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
woodward.bindPopup(woodwardTmp);

// Smith
let smithTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const smith = L.polygon([
   [35.30649613372966, -80.73180784956678],
   [35.307213906505545, -80.73175648736981],
   [35.30721215744189, -80.73111661694864],
   [35.30677967236826, -80.73110619406941],
   [35.306768104804824, -80.73132024761809],
   [35.30649277762102, -80.73132166630218]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
smith.bindPopup(smithTmp);

//Prospector
let prospectorTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const prospector = L.polygon([
   [35.307173078968205, -80.7311068301639],
   [35.30700125337987, -80.73111018303453],
   [35.306704479815245, -80.7310729729924],
   [35.30640118416836, -80.73125457650761],
   [35.30639314109961, -80.73070976733194],
   [35.30687984849608, -80.73056491182602],
   [35.30721912306696, -80.73070438367935]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
prospector.bindPopup(prospectorTmp);

//Halton Arena
let haltonTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const halton = L.polygon([
   [35.30698714379311, -80.73482300394835],
   [35.30698714234626, -80.7338485357297],
   [35.30604579909481, -80.73385441406576],
   [35.30604340261174, -80.73367537216276],
   [35.30592124330843, -80.73365189247845],
   [35.30592363865415, -80.7336606977859],
   [35.30591070394622, -80.73388133533219],
   [35.3057251951262, -80.73388804076079],
   [35.30573473490111, -80.73499812880918],
   [35.30669504202152, -80.73508835510245],
   [35.30673897137526, -80.73481920844317]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
halton.bindPopup(haltonTmp);

//Atkins
let atkinsTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const atkins = L.polygon([
   [35.3061892984254, -80.73295220187923],
   [35.305631324103516, -80.73291131861764],
   [35.30546915235583, -80.73274470884702],
   [35.305410419435525, -80.73221161695373],
   [35.305481572738685, -80.7312608144488],
   [35.30588022865648, -80.73124751735541],
   [35.305903557548795, -80.73187191906914],
   [35.30619055119395, -80.73187191588585]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
atkins.bindPopup(atkinsTmp);

//Kennedy
let kennedyTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const kennedy = L.polygon([
   [35.30614943314596, -80.73123495459573],
   [35.30614403791728, -80.73072544191382],
   [35.305809653462205, -80.73072537600643],
   [35.30580763047439, -80.73122719692806]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
kennedy.bindPopup(kennedyTmp);

//Belk Hall
let belkTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const belk = L.polygon([
   [35.306627, -80.730288],
   [35.305999, -80.730268],
   [35.305992, -80.729659],
   [35.306639, -80.729664]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
belk.bindPopup(belkTmp);

//Fretwell
let fretwellTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const fretwell = L.polygon([
   [35.30650013709477, -80.72945292674801],
   [35.30585137652176, -80.7294514947358],
   [35.305865, -80.728427],
   [35.30609920914804, -80.72842968061042]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
fretwell.bindPopup(fretwellTmp);

//Cato
let catoTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const cato = L.polygon([
   [35.30567958126042, -80.72890394863911],
   [35.30524264000015, -80.72889819149982],
   [35.30523982052007, -80.72856543022267],
   [35.305677701519464, -80.72856312556486]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
cato.bindPopup(catoTmp);

//Denny
let dennyTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const denny = L.polygon([
   [35.30561156427333, -80.72959304661062],
   [35.30560062092841, -80.73003561126166],
   [35.305189107640565, -80.73001951855764],
   [35.30517378407764, -80.72959036721366]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
denny.bindPopup(dennyTmp);

//Barnard
let barnardTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const barnard = L.polygon([
   [35.30589174443227, -80.73022001329541],
   [35.30570733007773, -80.73021934268206],
   [35.305706234929964, -80.72979488345266],
   [35.30589064936214, -80.72979085923329]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
barnard.bindPopup(barnardTmp);

//Garinger
let garingerTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const garinger = L.polygon([
   [35.305084611109535, -80.73022173493898],
   [35.30490183657388, -80.73022106371779],
   [35.30489855353399, -80.72979727517836],
   [35.30508680031482, -80.7297919104727],
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
garinger.bindPopup(garingerTmp);

//Macy
let macyTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const macy = L.polygon([
   [35.30589794461378, -80.7305183217944],
   [35.305468855740656, -80.73051104231267],
   [35.305465886796874, -80.73027270792538],
   [35.305900914576796, -80.73027270869703]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
macy.bindPopup(macyTmp);

//Winningham
let winninghamTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const winningham = L.polygon([
   [35.30533286817984, -80.73052240057575],
   [35.305329899216034, -80.73026587178636],
   [35.30489486912109, -80.73027678714094],
   [35.30489635329612, -80.7305205791606]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
winningham.bindPopup(winninghamTmp);

//King
let kingTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const king = L.polygon([
   [35.30523309060404, -80.73274157613017],
   [35.305229806921425, -80.73235801974067],
   [35.304914055972716, -80.73236003208923],
   [35.30491679249203, -80.73274358758562]    
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
king.bindPopup(kingTmp);

//Reese
let reeseTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const reese = L.polygon([
   [35.30476463295342, -80.73272598424249],
   [35.30455394901659, -80.73272665446478],
   [35.30455394874748, -80.73231761835196],
   [35.304764085490284, -80.73231761767597]    
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
reese.bindPopup(reeseTmp);

//Colvard
let colvardTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const colvard = L.polygon([
   [35.30532256895937, -80.73211345952484],
   [35.30446667404195, -80.73211939506122],
   [35.304462650089704, -80.73135028694665],
   [35.305127266905956, -80.7313471983588],
   [35.30532372121242, -80.73188699329368]    
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
colvard.bindPopup(colvardTmp);

//Rowe
let roweTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const rowe = L.polygon([
   [35.30477311540296, -80.7310851519018],
   [35.30417179786087, -80.73108716789702],
   [35.30416741610219, -80.73055612187808],
   [35.30401418826772, -80.73035764016694],
   [35.30476718430302, -80.73034958108025]    
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
rowe.bindPopup(roweTmp);

//Storrs
let storrsTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const storrs = L.polygon([
   [35.304249511235845, -80.72956596113093],
   [35.30480548828722, -80.72954448930487],
   [35.30507692676128, -80.72945866407221],
   [35.30506378809443, -80.72871568402653],
   [35.304755147823215, -80.72871568954459],
   [35.30424512589641, -80.72873447353248],
   [35.30408971359231, -80.72894368817897],
   [35.30411379544133, -80.72942916694842]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
storrs.bindPopup(storrsTmp);

//Robinson
let robinsonTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const robinson = L.polygon([
   [35.30428015697671, -80.73028747361472],
   [35.30337393222653, -80.73028747061032],
   [35.30336079790243, -80.72956059585347],
   [35.304253889200496, -80.72960350640808]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
robinson.bindPopup(robinsonTmp);

//Belk Gym
let belkGymTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const belkGym = L.polygon([
   [35.30555532513589, -80.7362739125449],
   [35.305219507070504, -80.73623650012652],
   [35.3051625214047, -80.73587986717162],
   [35.30499155952976, -80.73585492710538],
   [35.30498341873897, -80.7352264577582],
   [35.305182874107466, -80.73513667555221],
   [35.305585855901924, -80.7351341797591],
   [35.30578531189834, -80.73522645500685],
   [35.30581176885842, -80.73585492613772],
   [35.30560213746431, -80.73594595593686]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
belkGym.bindPopup(belkGymTmp);

//Cone centre
let coneTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const cone = L.polygon([
   [35.30559686696151, -80.73348183448381],
   [35.30515342591603, -80.73349248857427],
   [35.305086764781734, -80.73354753633619],
   [35.304840407122185, -80.7335528638633],
   [35.30469259268185, -80.73347295542709],
   [35.30464477027572, -80.73327762440023],
   [35.30463752353199, -80.73292958001113],
   [35.30514617916565, -80.73284434105544],
   [35.30558189540412, -80.73286133967657]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
cone.bindPopup(coneTmp);

//Memorial Hall
let memorialTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const memorial = L.polygon([
   [35.30390443987521, -80.73607218854794],
   [35.30377097849122, -80.73607120275717],
   [35.30377178219603, -80.7361539558104],
   [35.30371228735239, -80.73615494063608],
   [35.30365805210302, -80.73613033598929],
   [35.303653023659855, -80.73558113846866],
   [35.303710227323556, -80.73555571964545],
   [35.30376994535382, -80.73555571999636],
   [35.303769945430396, -80.73563813802684],
   [35.30390321083669, -80.73563659738845]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
memorial.bindPopup(memorialTmp);

//SoVi Crossing
let soviCrossingTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const soviCrossing = L.polygon([
   [35.30322230406711, -80.73480577184633],
   [35.30313438305352, -80.73496765688802],
   [35.30320278828954, -80.73501861900534],
   [35.303092244989436, -80.73523051349365],
   [35.30297648302592, -80.73525999708846],
   [35.30270440815328, -80.73508577249876],
   [35.3025276356063, -80.73494733468354],
   [35.30247537210989, -80.73469494502834],
   [35.30252148640846, -80.73459794427062],
   [35.302579898920236, -80.73451695322278],
   [35.30282715398719, -80.73450339300548]

  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
soviCrossing.bindPopup(soviCrossingTmp);

//Sanford
let sanfordTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const sanford = L.polygon([
   [35.303229410230344, -80.73368168632187],
   [35.30291937142064, -80.73367867882719],
   [35.30291119077253, -80.73334889827218],
   [35.303227773988816, -80.73335992350997]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
sanford.bindPopup(sanfordTmp)
//Levine Hall
let levineTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const levine = L.polygon([
   [35.30358515632682, -80.73273726719924],
   [35.30329713895302, -80.73274324933692],
   [35.3029622574564, -80.73316914149329],
   [35.30219973865044, -80.73317990862307],
   [35.30219778607876, -80.73297533740481],
   [35.30286950624909, -80.73296696268959],
   [35.30321176166885, -80.73251320336016],
   [35.30355211972217, -80.7325366795653],
   [35.30358705734237, -80.73264715737268]

  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
levine.bindPopup(levineTmp);

//Housing and residence 
let housingResidenceTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const housingResidence = L.polygon([
   [35.302342117259805, -80.73387178078654],
   [35.30206247330573, -80.73387379227698],
   [35.30190924362198, -80.73386105161077],
   [35.30190760150973, -80.73334673859763],
   [35.302059737107335, -80.73333332720159],
   [35.302338286376646, -80.73333198581541]

  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
housingResidence.bindPopup(housingResidenceTmp);

//Scott Hall 
let scottTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const scott = L.polygon([
   [35.3018638849098, -80.73546337093251],
   [35.30160624626936, -80.73547407159482],
   [35.30160362624172, -80.73511022937684],
   [35.3018650866854, -80.73513070324063]

  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
scott.bindPopup(scottTmp);

//Laurel Hall
let laurelTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const laurel = L.polygon([
   [35.302478759897966, -80.7368095564767],
   [35.30264078230883, -80.73705018218676],
   [35.302922234809124, -80.73686426921037],
   [35.30302657662974, -80.73632087309807],
   [35.302518155414475, -80.73560480838866],
   [35.3022817784325, -80.73584319136283],
   [35.30261888884117, -80.73643863720395]

  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
laurel.bindPopup(laurelTmp);

//Holshouser Hall
let holshouserTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const holshouser = L.polygon([
   [35.30228674468751, -80.73623464614425],
   [35.30203986695994, -80.73623387046013],
   [35.30200210660296, -80.73588786601238],
   [35.302287770208125, -80.73586305456456]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
holshouser.bindPopup(holshouserTmp);

//Hunt Hall
let huntTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const hunt = L.polygon([
   [35.30211192746607, -80.73664977977556],
   [35.3012833592438, -80.73663749649342],
   [35.30126665231742, -80.73575324913958],
   [35.30155731940369, -80.73575324663837],
   [35.30159407236946, -80.73636321572481],
   [35.302071835558266, -80.73638368406345]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
hunt.bindPopup(huntTmp);

//Facilities Operations and Science
let scienceTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const science = L.polygon([
   [35.30874454335414, -80.73032121658436],
   [35.30820289685767, -80.73031956560726],
   [35.30820424383823, -80.73003557824116],
   [35.30874723778102, -80.7300388783917]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
science.bindPopup(scienceTmp);

//Sycamore
let sycamoreTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const sycamore = L.polygon([
   [35.30904621019996, -80.72884190884258],
   [35.308742803102234, -80.729215645473],
   [35.30866063055309, -80.72911204489128],
   [35.3089671978324, -80.72873637178274]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
sycamore.bindPopup(sycamoreTmp);

//Hickory 
let hickoryTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const hickory = L.polygon([
   [35.30911179011983, -80.72919724947772],
   [35.30903119796649, -80.72909655363253],
   [35.30932828235992, -80.72874024410109],
   [35.30940255385661, -80.7288390035585]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
hickory.bindPopup(hickoryTmp);

//Cedar 
let cedarTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const cedar = L.polygon([
   [35.30947621092879, -80.72918031755816],
   [35.30976913674545, -80.72882149087035],
   [35.30968924582562, -80.72872291973472],
   [35.30939868363032, -80.7290863591104]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
cedar.bindPopup(cedarTmp);

//Cafe Activities Building
let cabTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const cab = L.polygon([
   [35.309239491212594, -80.72852138590501],
   [35.30895052269496, -80.72850501015554],
   [35.308838610156535, -80.72837401069408],
   [35.30883693985838, -80.72825938642184],
   [35.30886366524465, -80.72817546505122],
   [35.309024017449254, -80.72798510627888],
   [35.30908414956414, -80.72795644991699],
   [35.30918102918286, -80.72795440267575],
   [35.30928626077131, -80.72808540213913],
   [35.30938648120534, -80.7282532456766],
   [35.30931131587211, -80.72844974554542]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
cab.bindPopup(cabTmp);

//Martin Hall
let martinTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const martin = L.polygon([
   [35.310609994724594, -80.72788023179908],
   [35.31017010950789, -80.72815330117749],
   [35.309640061237324, -80.7269152299441],
   [35.31007932599642, -80.72663172525382]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
martin.bindPopup(martinTmp);

//Hawthorn Hall
let hawthornTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const hawthorn = L.polygon([
   [35.31137182177533, -80.72794564338241],
   [35.31136212350505, -80.72692500227143],
   [35.31152448653013, -80.72693176832537],
   [35.31158139392438, -80.72709672436912],
   [35.31163501790069, -80.7272616802409],
   [35.311636659326886, -80.72762176662886],
   [35.31158139379511, -80.72779007538158],
   [35.31153105270674, -80.72794765508145]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
hawthorn.bindPopup(hawthornTmp);

//Price 
let priceTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const price = L.polygon([
   [35.310364511120284, -80.73031030120602],
   [35.31035380584848, -80.72977904282158],
   [35.31011295887423, -80.72977576483987],
   [35.310123664185824, -80.73032997724643]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
price.bindPopup(priceTmp);

//SHC
let shcTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const shc = L.polygon([
   [35.3109034160578, -80.72987218855623],
   [35.31074637258851, -80.72991979793468],
   [35.31066757688972, -80.72968845774645],
   [35.31026429651046, -80.72968175215236],
   [35.31026484359642, -80.72943364787415],
   [35.310671276014325, -80.72943386748783],
   [35.31081135681827, -80.72943990239425],
   [35.31086990596775, -80.729732933774]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
shc.bindPopup(shcTmp);

//Witherspoon Hall
let witherspoonTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const witherspoon = L.polygon([
   [35.31103462367928, -80.73324007212359],
   [35.31080029549852, -80.73325407979254],
   [35.31030020259531, -80.73197938186767],
   [35.31042879820773, -80.73173774957833],
   [35.3114346946229, -80.7317955312046],
   [35.31154614260238, -80.73204066541119]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
witherspoon.bindPopup(witherspoonTmp);

//Wallis Hall
let wallisTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const wallis = L.polygon([
   [35.31110021664566, -80.73371163106256],
   [35.310830665354246, -80.73379895744455],
   [35.310824468762284, -80.73429633814196],
   [35.311608333878866, -80.7343267125357],
   [35.31163002173853, -80.73316868877454],
   [35.3111157080719, -80.7331572983769]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
wallis.bindPopup(wallisTmp);

//Lynch Hall
let lynchTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const lynch = L.polygon([
   [35.31076587414013, -80.73432540074259],
   [35.310069845374166, -80.73431467190707],
   [35.31008297804783, -80.73317205092432],
   [35.310669568630146, -80.73317205092432],
   [35.31076587414013, -80.73404108660135]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
lynch.bindPopup(lynchTmp);

//Belk Hall
let belkHallTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const belkHall = L.polygon([
   [35.31078652817023, -80.73558268620388],
   [35.31019720245745, -80.73570338561261],
   [35.30995753116271, -80.73453930692241],
   [35.31076394962458, -80.73448535282716],
   [35.31075102185289, -80.73508735993735],
   [35.31080014737428, -80.73532816278141]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
belkHall.bindPopup(belkHallTmp);

//Miltimore Hall
let miltimoreTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const miltimore = L.polygon([
   [35.3116587247041, -80.73562189788551],
   [35.31098918132086, -80.73557580264216],
   [35.31088063523724, -80.7350819250087],
   [35.31087956052285, -80.73465389774898],
   [35.31166302352051, -80.73466970182913],
   [35.31169633933738, -80.73557975366887]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
miltimore.bindPopup(miltimoreTmp);

//Oak Hall
let oakTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const oak = L.polygon([
   [35.309342171086655, -80.73236495637336],
   [35.3087352724797, -80.73236362356698],
   [35.308734184843686, -80.73179451524071],
   [35.30935413499191, -80.73179184962794],
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
oak.bindPopup(oakTmp);

//Pine Hall
let pineTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const pine = L.polygon([
   [35.30935413499191, -80.73179184962794],
   [35.30944315926096, -80.73101804163376],
   [35.3092385065688, -80.73101133611156],
   [35.30916080407415, -80.73178917668669]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
pine.bindPopup(pineTmp);

//Elm Hall
let elmTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const elm = L.polygon([
   [35.308734184843686, -80.73179451524071],
   [35.30864096151553, -80.73100328946593],
   [35.30883686046993, -80.73100060725704],
   [35.308911280060116, -80.73179454108545]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
elm.bindPopup(elmTmp);

//Maple Hall
let mapleTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const maple = L.polygon([
   [35.30905134249567, -80.73167781536577],
   [35.3090152271774, -80.7316751331569],
   [35.30895722375369, -80.73156918590614],
   [35.30895831815828, -80.73101128645915],
   [35.30910168503362, -80.73101799198136],
   [35.30910715704673, -80.73156918590614]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
maple.bindPopup(mapleTmp);

//Irwin Belk Track
let irwinBelkTrackTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const irwinBelkTrack = L.polygon([
   [35.306354344312936, -80.73715589876169],
   [35.3045950511209, -80.73715589876169],
   [35.30462639743635, -80.73875472814223],
   [35.306319080435685, -80.7388267474837]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
irwinBelkTrack.bindPopup(irwinBelkTrack);

//Halton Wagner Tennis Complex
let haltonWagnerCompTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const haltonWagnerComp = L.polygon([
   [35.30694172002362, -80.73660199202175],
   [35.307754262403236, -80.73660841579779],
   [35.307691356187874, -80.73804734163141],
   [35.30693123555249, -80.7380152227512]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
haltonWagnerComp.bindPopup(haltonWagnerCompTmp);

//Hayes Baseball
let hayesBaseballStadiumTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const hayesBaseballStadium = L.polygon([
   [35.30883476675297, -80.73989160657631],
   [35.30751798233495, -80.73982323380382],
   [35.307501243412005, -80.73855833751266],
   [35.30868145530082, -80.73811224841761]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
hayesBaseballStadium.bindPopup(hayesBaseballStadiumTmp);

//Jerry Richardson Stadium
let jerryRichardsonStadiumTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const jerryRichardsonStadium = L.polygon([
   [35.31076967797246, -80.74121184288802],
   [35.31018566118199, -80.74146384249482],
   [35.30935075661672, -80.74029960431137],
   [35.3095810759782, -80.73942768567181],
   [35.310358398981684, -80.73866160686713],
   [35.3106504072804, -80.73858600698509],
   [35.311777302662264, -80.73993672487757],
   [35.311412873939766, -80.74053788836055]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
jerryRichardsonStadium.bindPopup(jerryRichardsonStadium);

//EPIC Building
let epicTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const epic = L.polygon([
   [35.30953213313934, -80.74188417113388],
   [35.308952496759844, -80.74096254208516],
   [35.308255490489586, -80.74157011282747],
   [35.30894531115882, -80.74253283361722]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
epic.bindPopup(epicTmp);

//Duke Centennial Hall Building
let dukeCentHallTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const dukeCentHall = L.polygon([
   [35.311875921875306, -80.74173824671725],
   [35.3114337640111, -80.74122862247675],
   [35.31226110433728, -80.74037031559232],
   [35.31263756327164, -80.7410247745917]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
dukeCentHall.bindPopup(dukeCentHallTmp);

//Motorsports Research
let motoResearchTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const motoResearch = L.polygon([
   [35.31264282278439, -80.7406668422693],
   [35.31233731340297, -80.74020995085694],
   [35.312567128441884, -80.73996050541865],
   [35.31288957321742, -80.74041144786746]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
motoResearch.bindPopup(motoResearchTmp);

//Bioinformatics 
let bioinformaticsTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const bioinformatics = L.polygon([
   [35.31223386479665, -80.74200965400199],
   [35.31257530448414, -80.74246294732532],
   [35.3130558222308, -80.7419616769423],
   [35.31271738879708, -80.74150135778905]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
bioinformatics.bindPopup(bioinformaticsTmp);

//Portal
let portalTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const portal = L.polygon([
   [35.31156691791831, -80.74334948797191],
   [35.31195393847439, -80.74294326234896],
   [35.31173949684979, -80.74263545221199],
   [35.31135162091126, -80.74304272480816]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
portal.bindPopup(portalTmp);

//Grigg
let griggTmp = `

<h2> Student Union </h2>
<h3> Nearby Routes: </h3>
<h4> Silver </h4>
<h4> Green </h4>
<h4> Gold </h4>

`
const grigg = L.polygon([
   [35.31101454694506, -80.74268355822412],
   [35.310665398128755, -80.74203874962862],
   [35.31124567279726, -80.74147228226434],
   [35.31160957173673, -80.74205381525]
  ],{
   color: 'green',
  fillColor: 'green',
  fillOpacity: 0.2,

}).addTo(map)
grigg.bindPopup(griggTmp);