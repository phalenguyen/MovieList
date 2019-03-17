const SearchBar = props => React.createElement(
  "div",
  null,
  React.createElement("input", {
    id: "SearchButtonVal",
    onChange: event => props.handleChange(event),
    type: "text",
    placeholder: "Search..."
  }),
  React.createElement(
    "button",
    { onClick: props.handleSubmitSearch },
    "Go!"
  )
);

export default SearchBar;
// input always has type of text attribute
// onChange - always needs value, shows user what is displayed
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJldmVudCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdFNlYXJjaCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsWUFBWUMsU0FDaEI7QUFBQTtBQUFBO0FBQ0U7QUFDRSxRQUFHLGlCQURMO0FBRUUsY0FBVUMsU0FBU0QsTUFBTUUsWUFBTixDQUFtQkQsS0FBbkIsQ0FGckI7QUFHRSxVQUFLLE1BSFA7QUFJRSxpQkFBWTtBQUpkLElBREY7QUFPRTtBQUFBO0FBQUEsTUFBUSxTQUFTRCxNQUFNRyxrQkFBdkI7QUFBQTtBQUFBO0FBUEYsQ0FERjs7QUFZQSxlQUFlSixTQUFmO0FBQ0E7QUFDQSIsImZpbGUiOiJTZWFyY2hCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTZWFyY2hCYXIgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPGlucHV0XG4gICAgICBpZD1cIlNlYXJjaEJ1dHRvblZhbFwiXG4gICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gcHJvcHMuaGFuZGxlQ2hhbmdlKGV2ZW50KX1cbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcbiAgICAvPlxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuaGFuZGxlU3VibWl0U2VhcmNofT5HbyE8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG4vLyBpbnB1dCBhbHdheXMgaGFzIHR5cGUgb2YgdGV4dCBhdHRyaWJ1dGVcbi8vIG9uQ2hhbmdlIC0gYWx3YXlzIG5lZWRzIHZhbHVlLCBzaG93cyB1c2VyIHdoYXQgaXMgZGlzcGxheWVkXG4iXX0=