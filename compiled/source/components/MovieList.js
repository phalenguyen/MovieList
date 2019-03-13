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
        props.movies.map(movies => {
            return React.createElement(
                'div',
                null,
                movies.title
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsibW92aWVzIiwiTW92aWVMaXN0IiwicHJvcHMiLCJtYXAiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsTUFBUCxNQUFtQixpQkFBbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsWUFBYUMsS0FBRCxJQUFXO0FBQ3ZCLFdBQ0k7QUFBQTtBQUFBO0FBQ0tBLGNBQU1GLE1BQU4sQ0FBYUcsR0FBYixDQUFrQkgsTUFBRCxJQUFZO0FBQzFCLG1CQUFPO0FBQUE7QUFBQTtBQUFNQSx1QkFBT0k7QUFBYixhQUFQO0FBQ0gsU0FGQTtBQURMLEtBREo7QUFPSCxDQVJEOztBQVVBOzs7QUFHQSxlQUFlSCxTQUFmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vdmllcyBmcm9tICcuLi9tb3ZpZURhdGEuanMnXG5cbi8vIHZhciBNb3ZpZUxpc3QgPSAocHJvcHMpID0+IHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgIDxkaXY+e3Byb3BzLm1vdmllc1swXS50aXRsZX08L2Rpdj5cbi8vICAgICApIHByb3BzLm1vdmllcyBjYWxsaW5nIHRoZSBrZXkgaW4gdGhlIGFwcCBqcyBwYWdlIFxuLy8gfSBoYXJkY29kZSB3aW91bGQgb25seSBzZW5kIGJhY2thIHNldCBhbW91bnRcbi8vcHJvcHMubW92aWUgaXMgdGhlIHdob2xlIGFycmF5IG9mIG1vdmllcywgXG52YXIgTW92aWVMaXN0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwcm9wcy5tb3ZpZXMubWFwKChtb3ZpZXMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj57bW92aWVzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuLy9UT0RPIC0gY2hhbmdlIHZzY29kZSB0YWJzIHRvIDIgc3BhY2VzXG5cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0XG4vL3Byb3B0eXBlcyA9IHRlbGxzIHlvdSB3aGF0IHRvIGV4cGVjdCBmb3IgdGhhdCBzcGVjaWZpYyBmaWVsZCBzaG91bGQgcmV0dXJuLCBleHRyYSBwcmVjYXV0aW9uXG4vL3ZpZGVvczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIGlmIHlvdSBnaXZlIGl0IGFuIG9iamVjdCBpdCB3b3VsZCB0aHJvdyBhbiBlcnJvciAsIFxuLy9yZXR1cm4gYWx3YXlzICgpIGlmIG11bHQgbGluZXNcbi8vd2hlbiB5b3UgbWFrZSBhIGNvbXBvbmVudCBpdCBzaG91bGQgYWx3YXlzIHJldHVybiBhIGRpdiBzdXJyb3VuZGluZyBldmVyeXRoaW5nLCB3aGF0ZXZlciB5b3UgbmVlZCBnb2VzIGluc2lkZSB0aGUgZGl2IFxuIl19