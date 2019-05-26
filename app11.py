from flask import Flask,request,jsonify,render_template
from flask_cors import CORS
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials 
import wikipedia
import urllib.request
from bs4 import BeautifulSoup

app=Flask(__name__)
CORS(app)

client_id = "f25ca164f4be46c3b3ee7717d200bb7c"
client_secret = "dda0905887ab4cf29bbf17c4f7325201"
client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager) 



@app.route("/",methods=['GET'])
def main():
    return "Hello Guys!"



@app.route("/search/<string:name>",methods=['GET'])

def search4(name):
    query = urllib.parse.quote(name)
    url = "https://www.youtube.com/results?search_query=" + query
    response = urllib.request.urlopen(url)
    html = response.read()
    soup = BeautifulSoup(html, 'html.parser')
    for vid in soup.findAll(attrs={'class':'yt-uix-tile-link'}):
        xxx = 'https://www.youtube.com' + vid['href']
        break
    return jsonify({"search":xxx})


@app.route("/wiki/<string:name>",methods=['GET'])

def search5(name):
    xyzz = (wikipedia.summary(name, sentences=4))
    return jsonify({"search":xyzz})

    
@app.route("/album/<string:name>",methods=['GET'])

def search1(name):
    #return name
    result = sp.search(name) 
    result['tracks']['items'][0]['artists']


    artist_uri = result['tracks']['items'][0]['artists'][0]['uri']
    sp_albums = sp.artist_albums(artist_uri, album_type='album')
    album_names = []
    album_uris = []
    for i in range(len(sp_albums['items'])):
        album_names.append(sp_albums['items'][i]['name'])
        album_uris.append(sp_albums['items'][i]['uri'])
    return jsonify({"name":album_names})



@app.route("/track/<string:name>",methods=['GET'])

def search2(name):
    
    result = sp.search(name) 
    result['tracks']['items'][0]['artists']

    nami=[]
    po =len(result['tracks']['items'])
    for i in range(0,po):
        nami.append(result['tracks']['items'][i]['name'])
    return jsonify({"name":nami})






@app.route("/<string:name>",methods=['GET'])

def search3(name):
    result = sp.search(name) 
    nami=[]
    namo=[]
    album_data=[]
    final=[]
    artist = result['tracks']['items'][0]['album']['artists'][0]['name']
    io=len(result['tracks']['items'])
    for i in range(0,io):
        album={
            'name':result['tracks']['items'][i]['name'],
            'duration':result['tracks']['items'][i]['duration_ms'],
            'release_date':result['tracks']['items'][i]['album']['release_date'],
        }
        final.append(album)

    img_url=result['tracks']['items'][0]['album']['images'][0]['url'] 
    song_data={
        'data':final,
        'artist_name':artist,
        'img_url':img_url
    }
    for i in range(0,io):
        nami.append(result['tracks']['items'][i]['name'])
    return jsonify(song_data)


