#Initialize a dictionary to convert each stop's shorthand name to the internal name used in the database.
routes_internal = { "lightrail": "Wallis Hall E/Light Rail",
                        "studenthealth": "Student Health E",
                        "fretwellS": "Fretwell South",
                        "catoS": "Cato Hall S",
                        "robinsonS": "Robinson Hall S",
                        "levine": "Levine Hall W",
                        "hunt": "Hunt Hall",
                        "alumni": "Alumni Way W",
                        "reese": "Reese East",
                        "robinsonN": "Robinson Hall N",
                        "catoN": "Cato Hall N", 
                        "fretwellN": "Fretwell N",
                        "science": "Aux Services West", #Science Building
                        "studentu": "Student Union W",
                        "belk": "Union Deck/Belk N",
                        "lightrailW": "Wallis Hall W/Light Rail",
                        "belkS": "Belk Hall S",
                        "unionE": "Student Union E",
                        "auxE": "Aux Services East",
                        "robinsonS": "Robinson Hall S",
                        "reeseW": "Reese West",
                        "coneW": "Cone Deck W",
                        "southVillage": "South Village Deck",
                        "robinsonN": "Robinson Hall N",
                        "studenthealthN": "Student Health N",
                        "Facilities Management": "FM/Police Building",
                        "northdeck": "North Deck",
                        "CRIdeck": "CRI Deck",
                        "dukecentE": "Duke Centennial Hall East",
                        "Grigg Hall": "Grigg Hall E",
                        "EPIC South": "EPIC S",
                        "athleticsE": "Athletics Complex E",
                        "martin": "Martin Hall",
                        "lot6": "Lot 6",
                        "lot5A": "Lot 5A",
                        "eastdeck2": "East Deck 2",
                        "unionW": "Student Union W",
                        "athleticsW": "Athletics Complex W",
                        "EPIC North": "EPIC N",
                        "motorsports": "Motor Sports",
                        "PORTALW": "PORTAL W"

                        }
 
### Helper Functions ###
# Given a dictionary and a value, finds the key associated with that value in the dictionary.
# Used for reverese lookups.
def dict_key_lookup(dict, val):
   goalKey = ""
   for key in dict.keys():
      if dict[key] == val:
         goalKey = key
         break
   return goalKey                       