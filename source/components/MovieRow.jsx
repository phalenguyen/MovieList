import movies from '../movieData.js';

const MovieRow = props => (
  <div className="MovieRow">
    <div className="MovieRowTitle">{props.movieTitle}</div>
    <div className="WatchedStatus" />
    <button />
  </div>
);
export default MovieRow;
