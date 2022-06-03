// {
//     type: 'ADD_MOVIES'
//     movies: [m1,m2]
// }

// actions types
export const ADD_MOVIES = 'ADD_MOVIES';

export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';

export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';

// actions creaters
export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies // shorthand movies : movies
    }
} 

export function addFavourite (movie) {
    return {
        type: ADD_TO_FAVOURITES,
        movie // shorthand movies : movies
    }
} 

export function removeFromFavourites (movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie // shorthand movies : movies
    }
}

export function setShowFavourites (val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val 
    }
}

export function addMovieToList (movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie) {
    const url = `http://www.omdbapi.com/?t=${movie}&apikey=3ca5df7`;

    return function (dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(movie => {
                console.log('movie', movie);
                //dispatch an action
            })
    }
} 