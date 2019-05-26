# evil_geniuses_may-19

MUSIC INFORMATION LIBRARY

## Contributors:

 Kartikay Gupta <br />
 Arpan Ghoshal <br />
 Kalpit Jain <br />
 Varun Kumar <br />

## Description:

-> Displays the information of albums and songs. <br />
-> Done by scrapping YouTube webpage and displaying the first result. <br />
-> Spotify APIs are manipulated in flask to give the desired result. <br />
-> Tracks can be played by searching the desired song. <br />
<br />
APIs are made in the backend with PUT method in JSON format which is called frontend by making AJAX request to the server using GET method. The information provided by APIs from backend(flask server) are displayed on the website.

## Platform and Modules used
Backend: Flask (Python Web Framework) <br />
Frontend: Javascript, HTML, CSS, AJAX, Bootstrap <br />
Modules: BeautifulSoup, CORS, urllib.request, spotipy, request, jsonify. <br />

## Usage

```console
music@islove:~$ pip3 install -r requirements.txt 
music@islove:~$ export FLASK_APP=app11.py
music@islove:~$ export FLASK_DEBUG=1
music@islove:~$ flask run
```
