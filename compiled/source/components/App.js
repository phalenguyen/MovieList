
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
  constructor(props) {
    // props what you pass in from the parent componement (index.js)
    super(props);
    this.state = {
      movies: movies,
      searchUserText: '',
      addMovieText: ''
    };
    this.handleAddMovieChange = this.handleAddMovieChange.bind(this);
    this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
    //can bind in constructor or below in render
  }
  handleChange(event) {
    this.setState({ searchUserText: event.target.value });
  }
  handleAddMovieChange(event) {
    console.log(this);
    this.setState({ addMovieText: event.target.value });
  }
  handleAddMovieSubmit() {
    //state is currently null need to fix
    var results = [];
    results.push(this.state.addMovieText);
    this.setState({ movies: results });
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
      alert('Sorry, title not found');
      return this.setState({ movies: movies });
    }
    this.setState({ movies: results });
  }
  /*
  set a variable for found movies
  if the text box value that the user submits is included in the movie list, return the list with the tittles matching
  */

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Movie List'
      ),
      React.createElement(AddMovie, { addMovieText: this.state.addMovieText, handleAddMovieSubmit: this.handleAddMovieSubmit, handleAddMovieChange: this.handleAddMovieChange }),
      React.createElement(SearchBar, { searchUserText: this.state.searchUserText, handleSubmitSearch: this.handleSubmitSearch.bind(this), handleChange: this.handleChange.bind(this) }),
      React.createElement(MovieList, { movies: this.state.movies })
    );
  }
}

export default App;
//if it is a method on this, then the search is the component, this is the app componement
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsibW92aWVzIiwiTW92aWVMaXN0IiwiU2VhcmNoQmFyIiwiQWRkTW92aWUiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaFVzZXJUZXh0IiwiYWRkTW92aWVUZXh0IiwiaGFuZGxlQWRkTW92aWVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlQWRkTW92aWVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0cyIsInB1c2giLCJoYW5kbGVTdWJtaXRTZWFyY2giLCJpIiwibGVuZ3RoIiwiY3VycmVudE1vdmllIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiYWxlcnQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7Ozs7Ozs7QUFXQSxPQUFPQSxNQUFQLE1BQW1CLGlCQUFuQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGVBQXJCO0FBQ0EsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDOUJDLGNBQVlDLEtBQVosRUFBbUI7QUFBQztBQUNoQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1RULGNBQVFBLE1BREM7QUFFVFUsc0JBQWdCLEVBRlA7QUFHVEMsb0JBQWM7QUFITCxLQUFiO0FBS0EsU0FBS0Msb0JBQUwsR0FBNEIsS0FBS0Esb0JBQUwsQ0FBMEJDLElBQTFCLENBQStCLElBQS9CLENBQTVCO0FBQ0EsU0FBS0Msb0JBQUwsR0FBNEIsS0FBS0Esb0JBQUwsQ0FBMEJELElBQTFCLENBQStCLElBQS9CLENBQTVCO0FBQ0E7QUFDSDtBQUNERSxlQUFhQyxLQUFiLEVBQW9CO0FBQ2xCLFNBQUtDLFFBQUwsQ0FBYyxFQUFDUCxnQkFBZ0JNLE1BQU1FLE1BQU4sQ0FBYUMsS0FBOUIsRUFBZDtBQUNEO0FBQ0RQLHVCQUFxQkksS0FBckIsRUFBNEI7QUFDMUJJLFlBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsU0FBS0osUUFBTCxDQUFjLEVBQUNOLGNBQWNLLE1BQU1FLE1BQU4sQ0FBYUMsS0FBNUIsRUFBZDtBQUNEO0FBQ0RMLHlCQUFzQjtBQUNwQjtBQUNBLFFBQUlRLFVBQVUsRUFBZDtBQUNBQSxZQUFRQyxJQUFSLENBQWEsS0FBS2QsS0FBTCxDQUFXRSxZQUF4QjtBQUNBLFNBQUtNLFFBQUwsQ0FBYyxFQUFDakIsUUFBUXNCLE9BQVQsRUFBZDtBQUNEO0FBQ0hFLHVCQUFxQjtBQUNuQjs7QUFFRSxRQUFJRixVQUFVLEVBQWQ7QUFDQSxTQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLaEIsS0FBTCxDQUFXVCxNQUFYLENBQWtCMEIsTUFBdEMsRUFBOENELEdBQTlDLEVBQW1EO0FBQ2pELFVBQUlFLGVBQWUsS0FBS2xCLEtBQUwsQ0FBV1QsTUFBWCxDQUFrQnlCLENBQWxCLENBQW5CO0FBQ0YsVUFBSUUsYUFBYUMsS0FBYixDQUFtQkMsV0FBbkIsR0FBaUNDLFFBQWpDLENBQTBDLEtBQUtyQixLQUFMLENBQVdDLGNBQVgsQ0FBMEJtQixXQUExQixFQUExQyxDQUFKLEVBQXdGO0FBQ3RGUCxnQkFBUUMsSUFBUixDQUFhSSxZQUFiO0FBQ0Q7QUFDRjtBQUNELFFBQUlMLFFBQVFJLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEJLLFlBQU0sd0JBQU47QUFDQSxhQUFPLEtBQUtkLFFBQUwsQ0FBYyxFQUFDakIsUUFBUUEsTUFBVCxFQUFkLENBQVA7QUFDRDtBQUNELFNBQUtpQixRQUFMLENBQWMsRUFBQ2pCLFFBQVFzQixPQUFULEVBQWQ7QUFDRDtBQUNIOzs7OztBQUtJVSxXQUFTO0FBQ0wsV0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREo7QUFFSSwwQkFBQyxRQUFELElBQVUsY0FBZ0IsS0FBS3ZCLEtBQUwsQ0FBV0UsWUFBckMsRUFBbUQsc0JBQXdCLEtBQUtHLG9CQUFoRixFQUFzRyxzQkFBdUIsS0FBS0Ysb0JBQWxJLEdBRko7QUFHSSwwQkFBQyxTQUFELElBQVcsZ0JBQWtCLEtBQUtILEtBQUwsQ0FBV0MsY0FBeEMsRUFBd0Qsb0JBQXNCLEtBQUtjLGtCQUFMLENBQXdCWCxJQUF4QixDQUE2QixJQUE3QixDQUE5RSxFQUFrSCxjQUFnQixLQUFLRSxZQUFMLENBQWtCRixJQUFsQixDQUF1QixJQUF2QixDQUFsSSxHQUhKO0FBSUksMEJBQUMsU0FBRCxJQUFXLFFBQVUsS0FBS0osS0FBTCxDQUFXVCxNQUFoQztBQUpKLEtBREo7QUFRSDtBQXZENkI7O0FBMERsQyxlQUFlSSxHQUFmO0FBQ0EiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKlxud2hlcmUgY29tcG9uZW50cyBzdGFydFxuY29uc3RydWN0b3Igc2V0cyB1cCBhcHAgd2l0aCB3aGF0ZXZlciBwcm9wcyBhcmUgcGFzc2VkIGRvd25cbnN0YXRlIGdvZXMgaW5zaWRlIGNvbnN0cnVjdG9yXG5jb25zdHJ1Y3Rvci9zdXBlciAtIGlmIHlvdSBwYXNzIHByb3BzIGluc2lkZSBjb25zdHJ1dG9yIGNhbGwsIGl0IHBhc3NlcyBpdCBkb3duIHRvIHRoZSBuZXh0IGNvbXBvbmVuZW50cyBcbnRoaXMuc3RhdGUgPSBvYmplY3QgYWx3YXlzIHdpdGgga2V5IHZhbCBwYWlyXG5tb3JlIHRoYW4gMSBsaW5lIG9mIGNvZGUgdXNlIHBhcmVudGhlc2VzIGZvciBqc3ggZXgvLiBsaW5lIDIxXG5tb3ZpZXMgY2FuIGFsc28gd3JpdGUgYXMgbW92aWVzOiBtb3ZpZXMgXG4gXG4qL1xuXG5pbXBvcnQgbW92aWVzIGZyb20gJy4uL21vdmllRGF0YS5qcyc7XG5pbXBvcnQgTW92aWVMaXN0IGZyb20gJy4vTW92aWVMaXN0LmpzJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9TZWFyY2hCYXIuanMnO1xuaW1wb3J0IEFkZE1vdmllIGZyb20gJy4vQWRkTW92aWUuanMnO1xuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykgey8vIHByb3BzIHdoYXQgeW91IHBhc3MgaW4gZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVtZW50IChpbmRleC5qcylcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW92aWVzOiBtb3ZpZXMsXG4gICAgICAgICAgICBzZWFyY2hVc2VyVGV4dDogJycsIFxuICAgICAgICAgICAgYWRkTW92aWVUZXh0OiAnJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUFkZE1vdmllQ2hhbmdlID0gdGhpcy5oYW5kbGVBZGRNb3ZpZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuaGFuZGxlQWRkTW92aWVTdWJtaXQgPSB0aGlzLmhhbmRsZUFkZE1vdmllU3VibWl0LmJpbmQodGhpcylcbiAgICAgICAgLy9jYW4gYmluZCBpbiBjb25zdHJ1Y3RvciBvciBiZWxvdyBpbiByZW5kZXJcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hVc2VyVGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgfVxuICAgIGhhbmRsZUFkZE1vdmllQ2hhbmdlKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWRkTW92aWVUZXh0OiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9XG4gICAgaGFuZGxlQWRkTW92aWVTdWJtaXQoKXtcbiAgICAgIC8vc3RhdGUgaXMgY3VycmVudGx5IG51bGwgbmVlZCB0byBmaXhcbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5zdGF0ZS5hZGRNb3ZpZVRleHQpXG4gICAgICB0aGlzLnNldFN0YXRlKHttb3ZpZXM6IHJlc3VsdHN9KVxuICAgIH1cbiAgaGFuZGxlU3VibWl0U2VhcmNoKCkge1xuICAgIC8vY29uc29sZS5sb2codGhpcylcblxuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGN1cnJlbnRNb3ZpZSA9IHRoaXMuc3RhdGUubW92aWVzW2ldO1xuICAgICAgaWYgKGN1cnJlbnRNb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuc2VhcmNoVXNlclRleHQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGN1cnJlbnRNb3ZpZSk7XG4gICAgICB9IFxuICAgIH1cbiAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGFsZXJ0KCdTb3JyeSwgdGl0bGUgbm90IGZvdW5kJylcbiAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHttb3ZpZXM6IG1vdmllc30pOyBcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW92aWVzOiByZXN1bHRzfSk7XG4gIH1cbi8qXG5zZXQgYSB2YXJpYWJsZSBmb3IgZm91bmQgbW92aWVzXG5pZiB0aGUgdGV4dCBib3ggdmFsdWUgdGhhdCB0aGUgdXNlciBzdWJtaXRzIGlzIGluY2x1ZGVkIGluIHRoZSBtb3ZpZSBsaXN0LCByZXR1cm4gdGhlIGxpc3Qgd2l0aCB0aGUgdGl0dGxlcyBtYXRjaGluZ1xuKi9cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+TW92aWUgTGlzdDwvaDE+XG4gICAgICAgICAgICAgICAgPEFkZE1vdmllIGFkZE1vdmllVGV4dCA9IHt0aGlzLnN0YXRlLmFkZE1vdmllVGV4dH0gaGFuZGxlQWRkTW92aWVTdWJtaXQgPSB7dGhpcy5oYW5kbGVBZGRNb3ZpZVN1Ym1pdH0gaGFuZGxlQWRkTW92aWVDaGFuZ2UgPXt0aGlzLmhhbmRsZUFkZE1vdmllQ2hhbmdlfT48L0FkZE1vdmllPlxuICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgc2VhcmNoVXNlclRleHQgPSB7dGhpcy5zdGF0ZS5zZWFyY2hVc2VyVGV4dH0gaGFuZGxlU3VibWl0U2VhcmNoID0ge3RoaXMuaGFuZGxlU3VibWl0U2VhcmNoLmJpbmQodGhpcyl9IGhhbmRsZUNoYW5nZSA9IHt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXMgPSB7dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4vL2lmIGl0IGlzIGEgbWV0aG9kIG9uIHRoaXMsIHRoZW4gdGhlIHNlYXJjaCBpcyB0aGUgY29tcG9uZW50LCB0aGlzIGlzIHRoZSBhcHAgY29tcG9uZW1lbnQgIl19