import movies from '../movieData.js'

// var MovieList = (props) => {
//     return (
//     <div>{props.movies[0].title}</div>
//     )
// }
var MovieList = (props) => {
    return (
        <div>
            {props.movies.map((movie, idx) => {
                return <div>{movie.title}</div>
            })}
        </div>
    )
}


export default MovieList
//proptypes = tells you what to expect for that specific field should return, extra precaution
//videos: React.PropTypes.array.isRequired, if you give it an object it would throw an error , 
//return always ()
//when you make a component it should always return a div surrounding everything, whatever you need goes inside the div 
