import movies from '../movieData.js';

const MovieRow = props => (
  <div className="MovieRow">
    <div className="MovieRowTitle">{props.movieObject.title}</div>
    <div className="WatchedStatus" />
    <button
      onClick={() => {
        props.handleWatchClick(props.movieObject.title);
      }}
    >
      {props.movieObject.watched ? 'un-watch' : 'watch'}
    </button>
  </div>
);
export default MovieRow;
