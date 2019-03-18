/*
where components start
constructor sets up app with whatever props are passed down
state goes inside constructor
constructor/super - if you pass props inside construtor call, it passes it down
to the next componenents
this.state = object always with key val pair
more than 1 line of code use parentheses for jsx ex/. line 21
 // props what you pass in from the parent componement (index.js)
//can bind in constructor or below in render

*/

import movies from '../movieData.js';
import MovieList from './MovieList.js';
import SearchBar from './SearchBar.js';
import AddMovie from './AddMovie.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies,
      searchUserText: '',
      addMovieText: '',
      isToggleOn: true,
    };
    this.handleAddMovieChange = this.handleAddMovieChange.bind(this);
    this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
    this.handleWatchClick = this.handleWatchClick.bind(this);
  }

  handleAPI() {
    $.get('https://api.themoviedb.org/3/search/movie', {
      api_key: '2876f55117ee9e9fb74bcb3f8a36ad6b',
      query: 'whales',
    })
      .done(({ data }) => {
        console.log(data);
        console.log('hi');
      })
      .fail((err) => {
        console.log('faileddddd');
      });
  }

  handleWatchClick() {
    console.log(movie.watched);
    console.log(this);
    console.log(this.state.movies);
    // this.setState({ movie.watched: !movie.watched }),
  }

  handleChange(event) {
    this.setState({ searchUserText: event.target.value });
  }

  handleAddMovieChange(event) {
    this.setState({ addMovieText: event.target.value });
  }

  handleAddMovieSubmit() {
    const results = this.state.movies;
    results.push({ title: this.state.addMovieText, watched: false });
    this.setState({ movies: results });
    document.getElementById('AddMovieButtonVal').value = '';
    console.log(this.state.movies);
  }

  handleSubmitSearch() {
    const results = [];
    for (let i = 0; i < this.state.movies.length; i += 1) {
      const currentMovie = this.state.movies[i];
      if (
        currentMovie.title
          .toLowerCase()
          .includes(this.state.searchUserText.toLowerCase())
      ) {
        results.push(currentMovie);
      }
    }
    if (results.length === 0) {
      alert('Sorry, title not found');
      document.getElementById('SearchButtonVal').value = '';
      return this.setState({ movies });
    }
    this.setState({ movies: results });
    document.getElementById('SearchButtonVal').value = '';
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <button onClick={this.handleAPI}>Hello!</button>

        <AddMovie
          addMovieText={this.state.addMovieText}
          handleAddMovieSubmit={this.handleAddMovieSubmit}
          handleAddMovieChange={this.handleAddMovieChange}
        />
        <SearchBar
          searchUserText={this.state.searchUserText}
          handleSubmitSearch={this.handleSubmitSearch.bind(this)}
          handleChange={this.handleChange.bind(this)}
        />
        <MovieList
          movies={this.state.movies}
          handleWatchClick={this.handleWatchClick}
        />
      </div>
    );
  }
}

export default App;
// if it is a method on this, then the search is the component, this is the app componement
