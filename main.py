from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

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
   return render_template('Time Calculator.html', stop1 = firstStop, stop2 = secondStop, calcSuccess = True)



if __name__ == '__main__':
   app.debug = True
   app.run()