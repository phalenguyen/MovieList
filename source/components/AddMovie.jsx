var AddMovie = (props) => {
  return (
    <div>
    <input className='AddMovie' onChange={(event) => props.handleAddMovieChange(event)} type='text' value={props.addMovieText} placeholder='Add movie title here'></input>
    <button onClick={props.handleAddMovieSubmit} id='addmoviebutton'>Add</button>
    </div>
    )
}
            
export default AddMovie
//remember to pass in event for handlchange
//rembember to add value for input