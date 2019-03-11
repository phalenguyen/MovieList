import movies from '../movieData.js';

// var MovieList = (props) => {
//     return (
//     <div>{props.movies[0].title}</div>
//     )
// }
var MovieList = props => {
    return React.createElement(
        'div',
        null,
        props.movies.map((movie, idx) => {
            return React.createElement(
                'div',
                null,
                movie.title
            );
        })
    );
};

export default MovieList;
//proptypes = tells you what to expect for that specific field should return, extra precaution
//videos: React.PropTypes.array.isRequired, if you give it an object it would throw an error , 
//return always ()
//when you make a component it should always return a div surrounding everything, whatever you need goes inside the div
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsibW92aWVzIiwiTW92aWVMaXN0IiwicHJvcHMiLCJtYXAiLCJtb3ZpZSIsImlkeCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxNQUFQLE1BQW1CLGlCQUFuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsWUFBYUMsS0FBRCxJQUFXO0FBQ3ZCLFdBQ0k7QUFBQTtBQUFBO0FBQ0tBLGNBQU1GLE1BQU4sQ0FBYUcsR0FBYixDQUFpQixDQUFDQyxLQUFELEVBQVFDLEdBQVIsS0FBZ0I7QUFDOUIsbUJBQU87QUFBQTtBQUFBO0FBQU1ELHNCQUFNRTtBQUFaLGFBQVA7QUFDSCxTQUZBO0FBREwsS0FESjtBQU9ILENBUkQ7O0FBV0EsZUFBZUwsU0FBZjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb3ZpZXMgZnJvbSAnLi4vbW92aWVEYXRhLmpzJ1xuXG4vLyB2YXIgTW92aWVMaXN0ID0gKHByb3BzKSA9PiB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICA8ZGl2Pntwcm9wcy5tb3ZpZXNbMF0udGl0bGV9PC9kaXY+XG4vLyAgICAgKVxuLy8gfVxudmFyIE1vdmllTGlzdCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cHJvcHMubW92aWVzLm1hcCgobW92aWUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2Pnttb3ZpZS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0XG4vL3Byb3B0eXBlcyA9IHRlbGxzIHlvdSB3aGF0IHRvIGV4cGVjdCBmb3IgdGhhdCBzcGVjaWZpYyBmaWVsZCBzaG91bGQgcmV0dXJuLCBleHRyYSBwcmVjYXV0aW9uXG4vL3ZpZGVvczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIGlmIHlvdSBnaXZlIGl0IGFuIG9iamVjdCBpdCB3b3VsZCB0aHJvdyBhbiBlcnJvciAsIFxuLy9yZXR1cm4gYWx3YXlzICgpXG4vL3doZW4geW91IG1ha2UgYSBjb21wb25lbnQgaXQgc2hvdWxkIGFsd2F5cyByZXR1cm4gYSBkaXYgc3Vycm91bmRpbmcgZXZlcnl0aGluZywgd2hhdGV2ZXIgeW91IG5lZWQgZ29lcyBpbnNpZGUgdGhlIGRpdiBcbiJdfQ==