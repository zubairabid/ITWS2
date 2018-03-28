from flask import Flask
app = Flask(__name__)

@app.route("/")
def main():
	return "Welcome!"

@app.route("/this")
def this():
	return "Heluu I like this."

if __name__ == "__main__":
	app.run()


