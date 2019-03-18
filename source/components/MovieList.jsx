import MovieRow from './MovieRow.js';

//     ) props.movies calling the key in the app js page
// } hardcode wiould only send backa set amount
// props.movie is the whole array of movies

const MovieList = props => (
  <div>
    {props.movies.map((movie, index) => (
      <MovieRow
        key={index}
        movieObject={movie}
        handleWatchClick={props.handleWatchClick}
      />
    ))}
  </div>
);

export default MovieList;
// proptypes = tells you what to expect for that specific field should return, extra precaution
// videos: React.PropTypes.array.isRequired, if you give it an object it would throw an error ,
// return always () if mult lines
// when you make a component it should always return a div surrounding everything, whatever you need goes inside the div
