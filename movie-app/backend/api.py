from flask import Flask
from flask_cors import CORS
import imdb
import random

app = Flask(__name__)
CORS(app)

ia = imdb.IMDb()

def removeDuplicateLines():
    lines_seen = set() # holds lines already seen

    with open("movies.txt", "r+") as f:
        d = f.readlines()
        f.seek(0)
        for i in d:
            if i not in lines_seen:
                f.write(i)
                lines_seen.add(i)
        f.truncate()

def getActorCover(id):
    actorNew = ia.get_person(id)
    cover = actorNew['full-size headshot']
    return cover

@app.route('/getActorAPI')
def getActor():

    # opening file
    with open('movies.txt', 'r') as f:
        moviesList = [line.strip() for line in f]

    pickedMovie = moviesList[random.randint(0,len(moviesList)-1)]

    # getting the movie from imdb
    movieSearch = ia.search_movie(pickedMovie)
    movieObject = movieSearch[0]
    movieRetreive = ia.get_movie(movieObject.movieID)
    actor = movieRetreive['cast'][random.randint(0,4)]
    '''for i in range(0, 4):
        print(movieRetreive['cast'][i])'''
    print(actor)
    sex=""

    person = ia.get_person(actor.personID)

    for job in person['filmography'].keys():
        if ("actor" in job):
            sex = "actor"
            break
        elif ("actress" in job):
            sex = "actress"
            break


    cover = getActorCover(actor.personID)

    return {'actor': str(actor['name']), 'cover': str(cover), 'sex': str(sex)}


if (__name__ == "__main__"):
    removeDuplicateLines()
    app.run(debug=True)
