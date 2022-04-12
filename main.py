from flask import Flask, render_template, request, jsonify
from CalculateFile import TimeCalculator
import pandas as pd
from datetime import datetime

app = Flask(__name__)

original_file = pd.read_csv("merged_stop_data.csv", dtype = str)
calc = TimeCalculator()

route_dict = {"lightrail": "Wallis Hall E/Light Rail",
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
              "belk": "Union Deck/Belk N"
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
   firstStop = route_dict[firstStop]
   secondStop = route_dict[secondStop]
   now = datetime.now()
   median = calc.calculate_distance(original_file, firstStop, secondStop, now.hour, now.weekday(), now.month)
   return render_template('Time Calculator.html', result = median, stop1 = firstStop, stop2 = secondStop, calcSuccess = True)



if __name__ == '__main__':
   app.debug = True
   app.run()