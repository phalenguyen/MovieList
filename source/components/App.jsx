
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
      movies: movies,
      searchUserText: '',
      addMovieText: 'goodwill hunting',
    };
    this.handleAddMovieChange = this.handleAddMovieChange.bind(this);
    this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
    this.baseState = this.state;
  }

  handleChange(event) {
    this.setState({ searchUserText: event.target.value });
  }

  handleAddMovieChange(event) {
    this.setState({ addMovieText: event.target.value });
  }

  // addMovieText = 'good will hunting' 
  // {title: 'mean girls'}

  handleAddMovieSubmit() {   //state is currently null need to fix
    var results = this.state.movies;
    results.push({title: this.state.addMovieText});
    this.setState({ movies: results });
    // this.state.addMovieText = '';
    //AddMovie-clearform;
    document.getElementById('AddMovieButtonVal').value = '';
    //$()
    console.log(this.state.movies)
  }

  handleSubmitSearch() {
    var results = [];
    for (var i = 0; i < this.state.movies.length; i += 1) {
      var currentMovie = this.state.movies[i];
      if (currentMovie.title.toLowerCase().includes(this.state.searchUserText.toLowerCase())) {
        results.push(currentMovie);
      }
    }
    if (results.length === 0) {
      alert('Sorry, title not found');
      return this.setState({ movies });
    }
    this.setState({ movies: results });
  }
  /*
set a variable for found movies
if the text box value that the user submits is included in the movie list, return the list with the tittles matching
*/

  render() {
    return (
        <div>
            <h1>Movie List</h1>
            <AddMovie addMovieText = {this.state.addMovieText} handleAddMovieSubmit = {this.handleAddMovieSubmit} handleAddMovieChange ={this.handleAddMovieChange}></AddMovie>
            <SearchBar searchUserText={this.state.searchUserText} handleSubmitSearch={this.handleSubmitSearch.bind(this)} handleChange={this.handleChange.bind(this)} />
            <MovieList movies={this.state.movies}/>
        </div>
    );
  }
}

export default App;
//if it is a method on this, then the search is the component, this is the app componement 