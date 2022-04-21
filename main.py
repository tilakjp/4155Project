from flask import Flask, render_template, request, jsonify
from CalculateFile import TimeCalculator
import pandas as pd
from datetime import datetime

app = Flask(__name__)

original_file = pd.read_csv("merged_stop_data.csv", dtype = str)
calc = TimeCalculator()

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
                        "science": "Aux Services West", ##Science Building
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
                        ##gageUAE: -Gage Undergraduate Admissions Center East doesn't seem to exist in the data we were given.
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
   median = calc.calculate_distance(original_file, firstStop, secondStop, now.hour, now.weekday(), now.month)
   firstStop = dict_key_lookup(routes_internal, firstStop)
   secondStop = dict_key_lookup(routes_internal, secondStop)
   return render_template('Time Calculator.html', result = median, stop1 = firstStop, stop2 = secondStop, calcSuccess = True)

### Helper Functions ###
def dict_key_lookup(dict, val):
   goalKey = ""
   for key in dict.keys():
      if dict[key] == val:
         goalKey = dict[key]
         break
   return goalKey

if __name__ == '__main__':
   app.debug = True
   app.run()