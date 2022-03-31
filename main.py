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
@app.route('/Time Calculator/')
def time_calculator():
  return render_template('Time Calculator.html')

### Fetch Example ###
@app.route('/test/', methods=['GET', 'POST'])
def testfn():
   if request.method == 'POST':
      return 1
   else:
      message = {'greeting':'Hello from Flask!'}
      return jsonify(message)

if __name__ == '__main__':
   app.run()