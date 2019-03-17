const SearchBar = props => (
  <div>
    <input
      id="SearchButtonVal"
      onChange={event => props.handleChange(event)}
      type="text"
      placeholder="Search..."
    />
    <button onClick={props.handleSubmitSearch}>Go!</button>
  </div>
);

export default SearchBar;
// input always has type of text attribute
// onChange - always needs value, shows user what is displayed
