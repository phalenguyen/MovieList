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
        props.movies.map((movies, index) => {
            return React.createElement(
                'div',
                { key: index },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsibW92aWVzIiwiTW92aWVMaXN0IiwicHJvcHMiLCJtYXAiLCJpbmRleCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxNQUFQLE1BQW1CLGlCQUFuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQyxZQUFhQyxLQUFELElBQVc7QUFDdkIsV0FDSTtBQUFBO0FBQUE7QUFDS0EsY0FBTUYsTUFBTixDQUFhRyxHQUFiLENBQWlCLENBQUNILE1BQUQsRUFBU0ksS0FBVCxLQUFtQjtBQUNqQyxtQkFBTztBQUFBO0FBQUEsa0JBQUssS0FBS0EsS0FBVjtBQUFrQkosdUJBQU9LO0FBQXpCLGFBQVA7QUFDSCxTQUZBO0FBREwsS0FESjtBQU9ILENBUkQ7O0FBVUE7OztBQUdBLGVBQWVKLFNBQWY7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJNb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW92aWVzIGZyb20gJy4uL21vdmllRGF0YS5qcydcblxuLy8gdmFyIE1vdmllTGlzdCA9IChwcm9wcykgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgPGRpdj57cHJvcHMubW92aWVzWzBdLnRpdGxlfTwvZGl2PlxuLy8gICAgICkgcHJvcHMubW92aWVzIGNhbGxpbmcgdGhlIGtleSBpbiB0aGUgYXBwIGpzIHBhZ2UgXG4vLyB9IGhhcmRjb2RlIHdpb3VsZCBvbmx5IHNlbmQgYmFja2Egc2V0IGFtb3VudFxuLy9wcm9wcy5tb3ZpZSBpcyB0aGUgd2hvbGUgYXJyYXkgb2YgbW92aWVzLCBcbnZhciBNb3ZpZUxpc3QgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3Byb3BzLm1vdmllcy5tYXAoKG1vdmllcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2luZGV4fT57bW92aWVzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuLy9UT0RPIC0gY2hhbmdlIHZzY29kZSB0YWJzIHRvIDIgc3BhY2VzXG5cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0XG4vL3Byb3B0eXBlcyA9IHRlbGxzIHlvdSB3aGF0IHRvIGV4cGVjdCBmb3IgdGhhdCBzcGVjaWZpYyBmaWVsZCBzaG91bGQgcmV0dXJuLCBleHRyYSBwcmVjYXV0aW9uXG4vL3ZpZGVvczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIGlmIHlvdSBnaXZlIGl0IGFuIG9iamVjdCBpdCB3b3VsZCB0aHJvdyBhbiBlcnJvciAsIFxuLy9yZXR1cm4gYWx3YXlzICgpIGlmIG11bHQgbGluZXNcbi8vd2hlbiB5b3UgbWFrZSBhIGNvbXBvbmVudCBpdCBzaG91bGQgYWx3YXlzIHJldHVybiBhIGRpdiBzdXJyb3VuZGluZyBldmVyeXRoaW5nLCB3aGF0ZXZlciB5b3UgbmVlZCBnb2VzIGluc2lkZSB0aGUgZGl2IFxuIl19