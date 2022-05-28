// {
//     type: 'ADD_MOVIES'
//     movies: [m1,m2]
// }

// actions types
export const ADD_MOVIES = 'ADD_MOVIES';

export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';

export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

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