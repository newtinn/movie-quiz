from flask import Flask
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
import imdb
import random
import datetime

app = Flask(__name__, static_folder='./builds/build 1', static_url_path='/')
CORS(app)

ia = imdb.IMDb()
now = datetime.datetime.now()

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

@app.route("/sixdegreesAPI")
def sixdegrees():
    # opening file
    with open('movies.txt', 'r') as f:
        moviesList = [line.strip() for line in f]

    pickedMovie = moviesList[random.randint(0,len(moviesList)-1)]
    #pickedMovie = moviesList[0]

    # picking the starting actor
    origmovie = ia.search_movie(pickedMovie)
    origmovie = origmovie[0]
    origmovieDup = ia.get_movie(int(origmovie.movieID))
    
    cast = origmovieDup['cast']
    
    personOneNum = random.randint(0,4)
    personOne = cast[personOneNum]
    name = personOne['name']
    
    personSearch = ia.search_person(name)
    personCode = personSearch[0].personID

    # getting which film/series to focus on
    films = []
    personNew = ia.get_person(personCode)
    sex = ""

    for job in personNew['filmography'].keys():
        if ("actor" in job):
            sex = "actor"
        elif ("actress" in job):
            sex = "actress"
        else:
            pass

        if ("actor" in job) or ("actress" in job):
            num = 0
            for movie in personNew['filmography'][sex]:
                if (num >= 10):
                    break
                
                if ('year' in movie):
                    if (int(movie['year']) < int(now.year)):
                        films.append(movie)
                        num += 1
                        
    
    # finding the top 3 actors in the series

    movieIndex = random.randint(0,len(films)-1)

    currentMovie = films[movieIndex]
    print(currentMovie['title'])
    movie = ia.get_movie(currentMovie.movieID)
    cast = movie.get('cast')
    topActors = 3
    actors = []

    for i in range(0,len(cast)):
        if ("Self" in cast[i].currentRole) or (cast[i]['name'] == cast[i].currentRole):
            del cast[i]
    for actor in cast[:topActors]:
        #print(actor.currentRole," played by ",actor['name'])
        if (actor.personID != personCode):
            actors.append(actor)
        #else:
            #print("person removed")

    personTwoFilm = None
    personTwoFilms = []
    #print(actors)
    numPick = random.randint(0,len(actors)-1)
    print(actors[numPick])
    if (len(actors)-1 > 0):
        personTwo = actors[numPick]
        personTwoRole = personTwo.currentRole
        print(personTwo, " ### ", personTwoRole)

        # getting information
        series = ia.get_movie(currentMovie.movieID)
        
        # getting gerne of the series
        genre = series.data['genres']
        
        # printing the object i.e name
        #print(genre)

        personTwoInfo = ia.get_person(int(personTwo.personID))
        sex2 = ""
    else:
        return

    # finding other movie for the other person
    for job in personTwoInfo['filmography'].keys():
        if ("actor" in job):
            sex2 = "actor"
        elif ("actress" in job):
            sex2 = "actress"
        else:
            pass

        if ("actor" in job) or ("actress" in job):
            num = 0
            for movie in personTwoInfo['filmography'][sex2]:

                if (num >= 10):
                    break

                movieCast = movie.get("cast")

                if movieCast:
                    for x in range(0, len(movieCast)):
                        if (movieCast[x]['name'] == personTwo['name']) and ("Self" in movieCast[x].currentRole):
                            pass
                
                if ('year' in movie):
                    if (int(movie['year']) < int(now.year)):
                        if (int(movie.movieID) != int(currentMovie.movieID)):
                            personTwoFilms.append(movie)
                            num += 1
    
    #numPick2 = 
    #print(personTwoFilms)
    if (len(personTwoFilms) > 0):
        personTwoFilm = personTwoFilms[random.randint(0,len(personTwoFilms)-1)]
    else:
        return
    #print(personTwoFilm)

    # getting information
    series2 = ia.get_movie(personTwoFilm.movieID)
    
    # getting gerne of the series
    genre2 = series.data['genres']
    
    # printing the object i.e name
    #print(genre2)
    if ("Talk-Show" in genre2):
        genre2 = genre2[0]

    yearReleased = int(personTwoFilm['year'])
    print(personTwo['name'])

    question = "What "+str(sex2)+", who has been in a "+str(genre[0])+" released in "+str(yearReleased)+", links "+str(personNew['name'])+" to "+str(personTwoFilm['title'])+"? "
    '''answer = input(question)
    if (answer == personTwo['name']):
        print("correct")
        makeQuestion(personTwo['name'])
    else:
        print("wrong")'''
    print("returned")
    #print(question)

    # showing the link for movie cover

    personTwoFilmDup = ia.get_movie(personTwoFilm.movieID)
    movieCover = personTwoFilmDup['full-size cover url'] 
    '''movieCover = movieDup['full-size cover url']'''
    # getting portrait
    personCover = getActorCover(personCode)

    return {"question":question,"answer":personTwo['name'],"cover1":movieCover,"cover2":personCover,"answerCover":getActorCover(personTwo.personID)}
    

@app.route("/")
def index():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if (__name__ == "__main__"):
    removeDuplicateLines()
    app.run(debug=True)
