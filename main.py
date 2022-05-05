from xml.etree.ElementTree import tostring
from flask import Flask, render_template, request, jsonify
from CalculateFile import TimeCalculator
from RoutesDict import routes_internal, dict_key_lookup
from LinkedListLooping import LinkedListLooping
import pandas as pd
from datetime import datetime
import json
import html

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
   # For route_flag, [0 = gold, 1 = green, 2 = silver]
   route_flag = int(request.form['Route'])
   if route_flag == 0:
      firstStop = request.form['Stop1Gold']
      secondStop = request.form['Stop2Gold']
   elif route_flag == 1:
      firstStop = request.form['Stop1Green']
      secondStop = request.form['Stop2Green']
   else:
      firstStop = request.form['Stop1Silver']
      secondStop = request.form['Stop2Silver']
      
   firstStop = routes_internal[firstStop]
   secondStop = routes_internal[secondStop]
   now = datetime.now()

   
   filter = calc.route_filter(original_file, firstStop, secondStop, route_flag)
   median = calc.calculate_distance(filter, firstStop, secondStop, now.hour, now.weekday(), now.month, route_flag, 0)
   ch = calc.save_forcast_graph(original_file, firstStop, secondStop, route_flag)
   # Creating the json graph

   # If the two stops are subsequent, check to make sure the calculated median time makes sense and correct it if necessary.
   if route_flag == 0:
      if ll_gold.findNode(dict_key_lookup(routes_internal, firstStop)).next.data == ll_gold.findNode(dict_key_lookup(routes_internal, secondStop)).data and median >= 5:
         median = 1
   elif route_flag == 1:
      if ll_green.findNode(dict_key_lookup(routes_internal, firstStop)).next.data == ll_green.findNode(dict_key_lookup(routes_internal, secondStop)).data and median >= 5:
         median = 1
   else:
      if ll_silver.findNode(dict_key_lookup(routes_internal, firstStop)).next.data == ll_silver.findNode(dict_key_lookup(routes_internal, secondStop)).data and median >= 5:
         median = 1
   ##firstStop = dict_key_lookup(routes_internal, firstStop)
   ##secondStop = dict_key_lookup(routes_internal, secondStop)
   return render_template('Time Calculator.html', result = median, stop1 = firstStop, stop2 = secondStop, calcSuccess = True, route = route_flag, chart=ch)


if __name__ == '__main__':
   app.debug = True
   app.run()