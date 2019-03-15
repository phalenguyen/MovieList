import movies from '../movieData.js';

// var MovieList = (props) => {
//     return (
//     <div>{props.movies[0].title}</div>
//     ) props.movies calling the key in the app js page 
// } hardcode wiould only send backa set amount
//props.movie is the whole array of movies, 
var MovieList = props => {
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

//TODO - change vscode tabs to 2 spaces


export default MovieList;
//proptypes = tells you what to expect for that specific field should return, extra precaution
//videos: React.PropTypes.array.isRequired, if you give it an object it would throw an error , 
//return always () if mult lines
//when you make a component it should always return a div surrounding everything, whatever you need goes inside the div
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsibW92aWVzIiwiTW92aWVMaXN0IiwicHJvcHMiLCJtYXAiLCJtb3ZpZSIsImluZGV4IiwidGl0bGUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLE1BQVAsTUFBbUIsaUJBQW5COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlDLFlBQWFDLEtBQUQsSUFBVztBQUN2QixXQUNJO0FBQUE7QUFBQTtBQUNLQSxjQUFNRixNQUFOLENBQWFHLEdBQWIsQ0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQWtCO0FBQ2hDLG1CQUFPO0FBQUE7QUFBQSxrQkFBSyxLQUFLQSxLQUFWO0FBQWtCRCxzQkFBTUU7QUFBeEIsYUFBUDtBQUNILFNBRkE7QUFETCxLQURKO0FBT0gsQ0FSRDs7QUFVQTs7O0FBR0EsZUFBZUwsU0FBZjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb3ZpZXMgZnJvbSAnLi4vbW92aWVEYXRhLmpzJ1xuXG4vLyB2YXIgTW92aWVMaXN0ID0gKHByb3BzKSA9PiB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICA8ZGl2Pntwcm9wcy5tb3ZpZXNbMF0udGl0bGV9PC9kaXY+XG4vLyAgICAgKSBwcm9wcy5tb3ZpZXMgY2FsbGluZyB0aGUga2V5IGluIHRoZSBhcHAganMgcGFnZSBcbi8vIH0gaGFyZGNvZGUgd2lvdWxkIG9ubHkgc2VuZCBiYWNrYSBzZXQgYW1vdW50XG4vL3Byb3BzLm1vdmllIGlzIHRoZSB3aG9sZSBhcnJheSBvZiBtb3ZpZXMsIFxudmFyIE1vdmllTGlzdCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cHJvcHMubW92aWVzLm1hcCgobW92aWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0+e21vdmllLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuLy9UT0RPIC0gY2hhbmdlIHZzY29kZSB0YWJzIHRvIDIgc3BhY2VzXG5cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0XG4vL3Byb3B0eXBlcyA9IHRlbGxzIHlvdSB3aGF0IHRvIGV4cGVjdCBmb3IgdGhhdCBzcGVjaWZpYyBmaWVsZCBzaG91bGQgcmV0dXJuLCBleHRyYSBwcmVjYXV0aW9uXG4vL3ZpZGVvczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIGlmIHlvdSBnaXZlIGl0IGFuIG9iamVjdCBpdCB3b3VsZCB0aHJvdyBhbiBlcnJvciAsIFxuLy9yZXR1cm4gYWx3YXlzICgpIGlmIG11bHQgbGluZXNcbi8vd2hlbiB5b3UgbWFrZSBhIGNvbXBvbmVudCBpdCBzaG91bGQgYWx3YXlzIHJldHVybiBhIGRpdiBzdXJyb3VuZGluZyBldmVyeXRoaW5nLCB3aGF0ZXZlciB5b3UgbmVlZCBnb2VzIGluc2lkZSB0aGUgZGl2IFxuIl19