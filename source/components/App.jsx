
/*
where components start
constructor sets up app with whatever props are passed down
state goes inside constructor
constructor/super - if you pass props inside construtor call, it passes it down to the next componenents 
this.state = object always with key val pair
more than 1 line of code use parentheses for jsx ex/. line 21
movies can also write as movies: movies 
 
*/

import movies from '../movieData.js';
import MovieList from './MovieList.js';
import SearchBar from './SearchBar.js';
import AddMovie from './AddMovie.js';
class App extends React.Component {
    constructor(props) {// props what you pass in from the parent componement (index.js)
        super(props);
        this.state = {
            movies: movies,
            searchUserText: '', 
            addMovieText: ''
        };
        this.handleAddMovieChange = this.handleAddMovieChange.bind(this)
        this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this)
        //can bind in constructor or below in render
    }
    handleChange(event) {
      this.setState({searchUserText: event.target.value});
    }
    handleAddMovieChange(event) {
      console.log(this)
      this.setState({addMovieText: event.target.value});
    }
    handleAddMovieSubmit(){
      //state is currently null need to fix
      var results = [];
      results.push(this.state.addMovieText)
      this.setState({movies: results})
    }
  handleSubmitSearch() {
    //console.log(this)

      var results = [];
      for (var i = 0; i < this.state.movies.length; i++) {
        var currentMovie = this.state.movies[i];
      if (currentMovie.title.toLowerCase().includes(this.state.searchUserText.toLowerCase())) {
        results.push(currentMovie);
      } 
    }
    if (results.length === 0) {
      alert('Sorry, title not found')
      return this.setState({movies: movies}); 
    }
    this.setState({movies: results});
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
                <SearchBar searchUserText = {this.state.searchUserText} handleSubmitSearch = {this.handleSubmitSearch.bind(this)} handleChange = {this.handleChange.bind(this)}/>
                <MovieList movies = {this.state.movies}/>
            </div>
        )
    }
}

export default App;
//if it is a method on this, then the search is the component, this is the app componement 