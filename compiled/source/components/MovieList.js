import movies from '../movieData.js';

// var MovieList = (props) => {
//     return (
//     <div>{props.movies[0].title}</div>
//     ) props.movies calling the key in the app js page
// } hardcode wiould only send backa set amount
// props.movie is the whole array of movies

const MovieList = props => {
  return React.createElement(
    'div',
    null,
    props.movies.map((movie, index) => {
      return React.createElement(
        'div',
        { key: index },
        movie.title
      );
    })
  );
};

export default MovieList;
//proptypes = tells you what to expect for that specific field should return, extra precaution
//videos: React.PropTypes.array.isRequired, if you give it an object it would throw an error , 
//return always () if mult lines
//when you make a component it should always return a div surrounding everything, whatever you need goes inside the div
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsibW92aWVzIiwiTW92aWVMaXN0IiwicHJvcHMiLCJtYXAiLCJtb3ZpZSIsImluZGV4IiwidGl0bGUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLE1BQVAsTUFBbUIsaUJBQW5COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxZQUFhQyxLQUFELElBQVc7QUFDM0IsU0FDSTtBQUFBO0FBQUE7QUFDSUEsVUFBTUYsTUFBTixDQUFhRyxHQUFiLENBQWlCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixLQUFrQjtBQUNsQyxhQUFPO0FBQUE7QUFBQSxVQUFLLEtBQUtBLEtBQVY7QUFBa0JELGNBQU1FO0FBQXhCLE9BQVA7QUFDRCxLQUZBO0FBREosR0FESjtBQU9ELENBUkQ7O0FBVUEsZUFBZUwsU0FBZjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb3ZpZXMgZnJvbSAnLi4vbW92aWVEYXRhLmpzJ1xuXG4vLyB2YXIgTW92aWVMaXN0ID0gKHByb3BzKSA9PiB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICA8ZGl2Pntwcm9wcy5tb3ZpZXNbMF0udGl0bGV9PC9kaXY+XG4vLyAgICAgKSBwcm9wcy5tb3ZpZXMgY2FsbGluZyB0aGUga2V5IGluIHRoZSBhcHAganMgcGFnZVxuLy8gfSBoYXJkY29kZSB3aW91bGQgb25seSBzZW5kIGJhY2thIHNldCBhbW91bnRcbi8vIHByb3BzLm1vdmllIGlzIHRoZSB3aG9sZSBhcnJheSBvZiBtb3ZpZXNcblxuY29uc3QgTW92aWVMaXN0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAge3Byb3BzLm1vdmllcy5tYXAoKG1vdmllLCBpbmRleCkgPT4ge1xuICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2luZGV4fT57bW92aWUudGl0bGV9PC9kaXY+O1xuICAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdFxuLy9wcm9wdHlwZXMgPSB0ZWxscyB5b3Ugd2hhdCB0byBleHBlY3QgZm9yIHRoYXQgc3BlY2lmaWMgZmllbGQgc2hvdWxkIHJldHVybiwgZXh0cmEgcHJlY2F1dGlvblxuLy92aWRlb3M6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCBpZiB5b3UgZ2l2ZSBpdCBhbiBvYmplY3QgaXQgd291bGQgdGhyb3cgYW4gZXJyb3IgLCBcbi8vcmV0dXJuIGFsd2F5cyAoKSBpZiBtdWx0IGxpbmVzXG4vL3doZW4geW91IG1ha2UgYSBjb21wb25lbnQgaXQgc2hvdWxkIGFsd2F5cyByZXR1cm4gYSBkaXYgc3Vycm91bmRpbmcgZXZlcnl0aGluZywgd2hhdGV2ZXIgeW91IG5lZWQgZ29lcyBpbnNpZGUgdGhlIGRpdiBcbiJdfQ==