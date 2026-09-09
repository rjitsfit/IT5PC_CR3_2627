from flask import Flask, render_template

app = Flask (__name__)

@app.route('/')
def genericFunction ():
    return render_template ('index.html')

@app.route ('/flask/<name>', methods=['GET'])
def secondFunction (name):
    return render_template ('flaskFile.html', n=name)

@app.route ('/list')
def displayList ():
    genericList = ['Bruce', 'Tony', 'Peter']
    return render_template ('listShows.html', gl = genericList)

if __name__ == '__main__':
    app.run (debug=True)