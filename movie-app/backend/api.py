from flask import Flask
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
import imdb
import random

app = Flask(__name__, static_folder='../build', static_url_path='/')
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
@cross_origin()
def getActor():

    # opening file
    with open('movies.txt', 'r') as f:
        moviesList = [line.strip() for line in f]

    pickedMovie = moviesList[random.randint(0,len(moviesList)-1)]
    #pickedMovie = moviesList[0]

    # getting the movie from imdb
    movieSearch = ia.search_movie(pickedMovie)
    movieObject = movieSearch[0]
    movieRetreive = ia.get_movie(movieObject.movieID)
    actor = movieRetreive['cast'][random.randint(0,2)]
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

    return {'actor': str(actor['name']), 'cover': str(cover), 'sex': str(sex), 'actorID': actor.personID}

@app.route('/getMovieAPI')
@cross_origin()
def GuessMovie():

    # opening file
    with open('movies.txt', 'r') as f:
        moviesList = [line.strip() for line in f]

    pickedMovie = moviesList[random.randint(0,len(moviesList)-1)]
    #pickedMovie = moviesList[0]

    movie = ia.search_movie(pickedMovie)
    movie = movie[0]
    movieDup = ia.get_movie(int(movie.movieID))
    
    cast = movieDup['cast']
    genre = movieDup['genre'][0]
    year = movieDup['year']
    movieCover = movieDup['full-size cover url']

    personOneNum = random.randint(0,4)
    personTwoNum = random.randint(0,4)
    while (personTwoNum == personOneNum):
        personTwoNum = random.randint(0,4)

    personOne = cast[personOneNum]['name']
    personTwo = cast[personTwoNum]['name']

    personOneID= cast[personOneNum].personID
    personTwoID = cast[personTwoNum].personID

    personOneCover = getActorCover(ia.search_person(personOne)[0].personID)
    personTwoCover = getActorCover(ia.search_person(personTwo)[0].personID)

    print(movie['title'])
    pickedMovie = movie['title']
    return {'movie': pickedMovie, 'movieCover': movieCover,
            'actor1': personOne, 'actor2': personTwo, 
            'actor1Cover': personOneCover, 'actor2Cover': personTwoCover,
            'actor1ID': personOneID, 'actor2ID': personTwoID, 'movieID': movie.movieID, 
            'genre': genre, 'year': year}

@app.route("/")
def index():
    return app.send_static_file('index.html')

if (__name__ == "__main__"):
    removeDuplicateLines()
    app.run(debug=True)
