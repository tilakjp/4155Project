from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
   return render_template('main.html')
@app.route('/Routes/')
def routes():
   return render_template('Routes.html')
@app.route('/Route Updates/')
def route_updates():
   return render_template('Route Updates.html')
@app.route('/Time Calculator/')
def time_calculator():
  return render_template('Time Calculator.html')



if __name__ == '__main__':
   app.run()