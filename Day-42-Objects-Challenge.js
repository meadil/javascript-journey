// Day 42: Objects Challenge - Advanced Movie Database

// Part 1: Enhanced movie data structure


let movies = [

    {

        id: 1,

        title: "Inception",

        director: "Christopher Nolan",

        year: 2010,

        rating: 8.8,

        genre: ["Sci-Fi", "Thriller"],

        duration: 148,

        watched: true

    },

    {

        id: 2,

        title: "The Matrix",

        director: "Watchowski Sisters",

        year: 1999,

        rating: 8.7,

        genre: ["Sci-Fi", "Action"],

        duration: 136,

        watched: true

    },

    {

        id: 3,

        title: "Intersteller",

        director: "Christopher Nolan",

        year: 2014,

        rating: 8.6,

        genre: ["Sci-Fi", "Drama"],

        duration: 169,

        watched: false

    },

    {

        id: 4,

        title: "The Dark Knight",

        director: "Christopher Nolan",

        year: 2008,

        rating: 9.0,

        genre: ["Action", "Crime"],

        duration: 152,

        watched: true

    },

    {

        id: 5,

        title: "Pulp Fiction",

        director: "Quentin Tarantino",

        year: 1994,

        rating: 8.9,

        genre: ["Crime", "Drama"],

        duration: 154,

        watched: false

    }

];


console.log("Movie Database Created!");
console.log(`Total movies: ${movies.length}`);



// Part 2: Build the Movie Manager Object


let movieManager = {

    movies: movies,

    displayAll: function() {

        console.log("\n=== ALL MOVIES ===");

        for (let i = 0; i < this.movies.length; i++) {

            let movie = this.movies[i];

            let watchedIcon = movie.watched ? "✅" : "⏳";

            console.log(`${watchedIcon} ${movie.title} (${movie.year})`);
            console.log(`   Director: ${movie.director}`);
            console.log(`   Rating: ${movie.rating}/10 ⭐`);
            console.log(`   Genres: ${movie.genre.join(", ")}`);
            console.log("");

        }

    },

    addMovie: function(title, director, year, rating, genres, duration) {

        let newMovie = {

            id: this.movies.length + 1,

            title: title,

            director: director,

            year: year,

            rating: rating,

            genre: genres,

            duration: duration,

            watched: false

        }

        this.movies.push(newMovie);

        console.log(`\n✅ Added "${title}" to database!`);

    },

    getAverageRating: function() {

        let sum = 0;

        for (let i = 0; i < this.movies.length; i++) {

            sum+= this.movies[i].rating;

        }

        return (sum / this.movies.length).toFixed(2);

    },

    findByDirector: function(directorName) {

        let moviesFromThisDirector = [];

        for (let i = 0; i < this.movies.length; i++) {

            if (directorName === this.movies[i].director) {

                moviesFromThisDirector.push(this.movies[i]);

            }

        }

        return moviesFromThisDirector;

    },

    findByGenre: function(genreName) {

        let moviesFromThisGenre = [];

        for (let i = 0; i < this.movies.length; i++) {

            if (this.movies[i].genre.includes(genreName)) {

                moviesFromThisGenre.push(this.movies[i]);

            }

        }

        return moviesFromThisGenre;

    },

    markAsWatched: function(movieId) {

        for (let i = 0; i < this.movies.length; i++) {

            if (movieId === this.movies[i].id) {

                this.movies[i].watched = true;
                
                console.log(`\n✅ "${this.movies[i].title}" is wacthed!`)
            }

        }

    },

    getUnwatched: function() {

        let unwatchedMovies = [];

        for (let i = 0; i < this.movies.length; i++) {

            if (this.movies[i].watched === false) {

                unwatchedMovies.push(this.movies[i]);

            }

        }

        return unwatchedMovies;

    },

    getHighestRated: function() {

        let theHighestRatedMovieObject = this.movies[0];

        for (let i = 1; i < this.movies.length; i++) {

            if (this.movies[i].rating > theHighestRatedMovieObject.rating) {

                theHighestRatedMovieObject = this.movies[i];

            }

        }

        return theHighestRatedMovieObject;

    },

    getRecomendations: function(movieId) {

        let theMovie = null;

        for (let i = 0; i < this.movies.length; i++) {

            if (movieId === this.movies[i].id) {

                theMovie = this.movies[i];

                break;

            }

        }

        let recomendations = [];

        for (let i = 0; i < this.movies.length; i++) {

            if (this.movies[i].id === movieId) {

                continue;

            }

            let hasMatchingGenre = false;

            for (let j = 0; j < theMovie.genre.length; j++) {

                if (this.movies[i].genre.includes(theMovie.genre[j])) {

                    hasMatchingGenre = true;

                    break;

                }
            
            }

            if (hasMatchingGenre) {

                recomendations.push(this.movies[i]);

            }

        }

        return recomendations;

    },

    getTotalWatchtime: function() {

        let totalMinutes = 0;

        for (let i = 0; i < this.movies.length; i++) {

            if (this.movies[i].watched) {

                totalMinutes+= this.movies[i].duration;

            }

        }

        let hours = Math.floor(totalMinutes / 60);

        let minutes = totalMinutes % 60;

        return `${hours} hours and ${minutes} minutes`;

    },

    getByDecade: function(decade) {

        let moviesFromDecade = [];

        for (let i = 0; i < this.movies.length; i++) {

            if (this.movies[i].year >= decade && this.movies[i].year < decade + 10) {

                moviesFromDecade.push(this.movies[i]);

            }

        }

        return moviesFromDecade;

    },

    searchByTitle: function(searchTerm) {

        let results = [];

        for (let i = 0; i < this.movies.length; i++) {

            if (this.movies[i].title.toLowerCase().includes(searchTerm.toLowerCase())) {

                results.push(this.movies[i]);

            }

        }

        return results;

    }

}


console.log("\n🎬 TESTING TIME!\n");

movieManager.displayAll();

console.log(`Average Rating: ${movieManager.getAverageRating()}/10\n`);


let nolanMovies = movieManager.findByDirector("Christopher Nolan");

console.log(`Christopher Nolan has ${nolanMovies.length} movies:`);

for (let i = 0; i < nolanMovies.length; i++) {
    
    console.log(`- ${nolanMovies[i].title}`);

}

console.log("");


let sciFiMovies = movieManager.findByGenre("Sci-Fi");

console.log(`Found ${sciFiMovies.length} Sci-Fi movies:`);

for (let i = 0; i < sciFiMovies.length; i++) {

    console.log(`- ${sciFiMovies[i].title}`);

}

console.log("");


movieManager.markAsWatched(5);


let unwatched = movieManager.getUnwatched();

console.log(`\n⏳ Unwatched movies: ${unwatched.length}`);

for (let i = 0; i < unwatched.length; i++) {

    console.log(`- ${unwatched[i].title}`);

}

console.log("");


let best = movieManager.getHighestRated();

console.log(`🏆 Highest rated: ${best.title} (${best.rating}/10)\n`);


let recs = movieManager.getRecomendations(1);

console.log(`If you liked ${movieManager.movies[1].title}, watch:`);

for (let i = 0; i < recs.length; i++) {

    console.log(`- ${recs[i].title} (${recs[i].genre.join(", ")})`);

}

console.log("");


console.log(`⌛ Total watch time: ${movieManager.getTotalWatchtime()}\n`);


let movies2010s = movieManager.getByDecade(2010);

console.log(`🎬 Movies from 2010s:`);

for (let i = 0; i < movies2010s.length; i++) {

    console.log(`- ${movies2010s[i].title} (${movies2010s[i].year})`);

}

console.log("");


let darkMovies = movieManager.searchByTitle("dark");

console.log(`🔍 Search results for "dark":`);

for (let i = 0; i < darkMovies.length; i++) {

    console.log(`- ${darkMovies[i].title}`);

}