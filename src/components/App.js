import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from '../actions';
import { data as moviesList } from '../data';

class App extends React.Component {
  componentDidMount () {
    // const { store } = this.props;
    // store.subscribe(() => {
    //   console.log('UPDATED');
    //   this.forceUpdate(); //not use this update
    // });
    // //make api call
    // //dispatch action
    // store.dispatch(addMovies(data));

    // console.log('STATE', this.props.store.getState());
    // this.props.store.subscribe(() => this.forceUpdate());
    this.props.dispatch(addMovies(moviesList));
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const index = movies.favourites.indexOf(movie);

    if( index !== -1) {
      // found the movie
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val))
  }
  render () {
    const { movies, search } = this.props;//{movies:{},search:{}}
    console.log('movies', movies);
    const { list, favourites = [], showFavourites = [] } = movies; 
    // console.log('RENDER', this.props.store.getState());
    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>

          <div id="list">
            {displayMovies.map((movie) => (
              <MovieCard 
                movie={movie} 
                // key={`movies-${index}`} 
                key={movie.imdbID} 
                dispatch={this.props.dispatch} 
                isFavourite = {this.isMovieFavourite(movie)}  
              />
            ))}
            { displayMovies.length === 0 ? <div className="no-movies"> No movies to display!</div> : null }
          </div>
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function callback(state) {
  return {
    movies: state.movies,
    search: state.movies,
  };
}
const connectedComponent = connect(callback)(App);

// export default App;
export default connectedComponent;