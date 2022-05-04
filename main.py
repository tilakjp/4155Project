from xml.etree.ElementTree import tostring
from flask import Flask, render_template, request, jsonify
from CalculateFile import TimeCalculator
from LinkedListLooping import LinkedListLooping
import pandas as pd
from datetime import datetime

app = Flask(__name__)

original_file = pd.read_csv("merged_stop_data.csv", dtype = str)
calc = TimeCalculator()

#Initialize a looping linked list of stops for each of the three routes. Uses shorthand names.
ll_gold = LinkedListLooping(["lightrail", "studenthealth", "fretwellS", "catoS", "robinsonS",
                           "levine", "hunt", "alumni", "reese", "robinsonN", "catoN", "fretwellN",
                           "science", "studentu", "belk"])

ll_green = LinkedListLooping(["lightrailW", "belkS", "unionE", "auxE", "fretwellS", "catoS", "robinsonS",
                           "reeseW", "coneW", "southVillage", "robinsonN", "catoN", "fretwellN", "studenthealthN",
                           "fm/pps", "northdeck"])

ll_silver = LinkedListLooping(["CRIdeck", "dukecentE", "Grigg Hall", "EPIC South", "athleticsE", "unionE",
                              "unionE", "auxE", "alumniW", "studenthealthN", "martin", "lot6", "lot5A", "eastdeck2",
                              "fretwellN", "science", "unionW", "athleticsW", "EPIC North", "motorsports", "PORTALW"])

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
                        #gageUAE: -Gage Undergraduate Admissions Center East doesn't seem to exist in the data we were given.
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

### Site Pages ###
@app.route('/')
def home():
   return render_template('main.html')
@app.route('/Routes/')
def routes():
   return render_template('Routes.html')
@app.route('/Route Updates/')
def route_updates():
   return render_template('Route Updates.html')
@app.route('/Time Calculator/', methods=['GET'])
def time_calculator():
  return render_template('Time Calculator.html')

@app.route('/calc_result/', methods=['POST'])
def calc_result():
   firstStop = request.form['Stop1']
   secondStop = request.form['Stop2']
   firstStop = routes_internal[firstStop]
   secondStop = routes_internal[secondStop]
   now = datetime.now()

   # For route_flag, [0 = gold, 1 = green, 2 = silver]
   route_flag = int(request.form['Route'])
   median = calc.calculate_distance(original_file, firstStop, secondStop, now.hour, now.weekday(), now.month, route_flag, 0)

   # If result is null, attempts a failsafe that will sum the time between every intermediate stop if the original median can't be calculated from end to end.
   if not isinstance(median, int) and not isinstance(median, float):
      print("Failsafe! for route " + str(route_flag) + " on: " + firstStop + " -> " + secondStop)
      median = 0
      if route_flag == 0:
         # Retrieve the current stop using firstStop and the next stop on the route.
         print("Code before ll_gold.findNode()")
         curr = ll_gold.findNode(dict_key_lookup(routes_internal, firstStop))
         print(curr.data)
         next = curr.next
         print (next.data)
         # Loop through each node and calculate each intermediate travel time.
         while next.data != ll_gold.findNode(dict_key_lookup(routes_internal, secondStop)).next.data:
            median += calc.calculate_distance(original_file, curr.data, next.data, now.hour, now.weekday(), now.month, route_flag, 1)
            print(median)
            curr = next
            next = curr.next
      elif route_flag == 1:
         # Retrieve the current stop using firstStop and the next stop on the route.
         curr = ll_green.findNode(dict_key_lookup(routes_internal, firstStop))
         next = curr.next         
         # Loop through each node and calculate each intermediate travel time.
         while not next.data == ll_green.findNode(dict_key_lookup(routes_internal, secondStop)).next.data:
            median += calc.calculate_distance(original_file, curr.data, next.data, now.hour, now.weekday(), now.month, route_flag, 1)            
            curr = next
            next = curr.next
      else:
         # Retrieve the current stop using firstStop and the next stop on the route.
         curr = ll_silver.findNode(dict_key_lookup(routes_internal, firstStop))
         next = curr.next
         # Loop through each node and calculate each intermediate travel time.
         while not next.data == ll_silver.findNode(dict_key_lookup(routes_internal, secondStop)).next.data:
            median += calc.calculate_distance(original_file, curr.data, next.data, now.hour, now.weekday(), now.month, route_flag, 1)            
            curr = next
            next = curr.next   

   # If the two stops are subsequent, check to make sure the calculated median time makes sense and correct it if necessary.
   if route_flag == 0:
      if ll_gold.findNode(dict_key_lookup(routes_internal, firstStop)).next.data == ll_gold.findNode(dict_key_lookup(routes_internal, secondStop)).data and median >= 5:
         median = 2
   elif route_flag == 1:
      if ll_green.findNode(dict_key_lookup(routes_internal, firstStop)).next.data == ll_green.findNode(dict_key_lookup(routes_internal, secondStop)).data and median >= 5:
         median = 2
   else:
      if ll_silver.findNode(dict_key_lookup(routes_internal, firstStop)).next.data == ll_silver.findNode(dict_key_lookup(routes_internal, secondStop)).data and median >= 5:
         median = 2
   ##firstStop = dict_key_lookup(routes_internal, firstStop)
   ##secondStop = dict_key_lookup(routes_internal, secondStop)
   return render_template('Time Calculator.html', result = median, stop1 = firstStop, stop2 = secondStop, calcSuccess = True)

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

if __name__ == '__main__':
   app.debug = True
   app.run()