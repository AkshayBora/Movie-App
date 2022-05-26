// {
//     type: 'ADD_MOVIES'
//     movies: [m1,m2]
// }

// actions types
export const ADD_MOVIES = 'ADD_MOVIES';

// actions creaters
export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies // shorthand movies : movies
    }
} 