const AddMovie = props => {
  return React.createElement(
    'div',
    null,
    React.createElement('input', { id: 'AddMovieButtonVal', onChange: event => props.handleAddMovieChange(event), type: 'text', placeholder: 'Add movie title here' }),
    React.createElement(
      'button',
      { onClick: props.handleAddMovieSubmit, id: 'addmoviebutton' },
      'Add'
    )
  );
};
export default AddMovie;
// remember to pass in event for handlchange
// rembember to add value for input
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb21wb25lbnRzL0FkZE1vdmllLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZSIsInByb3BzIiwiZXZlbnQiLCJoYW5kbGVBZGRNb3ZpZUNoYW5nZSIsImhhbmRsZUFkZE1vdmllU3VibWl0Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxXQUFZQyxLQUFELElBQVc7QUFDMUIsU0FDRTtBQUFBO0FBQUE7QUFDQSxtQ0FBTyxJQUFHLG1CQUFWLEVBQThCLFVBQVdDLFNBQVNELE1BQU1FLG9CQUFOLENBQTJCRCxLQUEzQixDQUFsRCxFQUFzRixNQUFLLE1BQTNGLEVBQWtHLGFBQVksc0JBQTlHLEdBREE7QUFFQTtBQUFBO0FBQUEsUUFBUSxTQUFTRCxNQUFNRyxvQkFBdkIsRUFBNkMsSUFBRyxnQkFBaEQ7QUFBQTtBQUFBO0FBRkEsR0FERjtBQU1ELENBUEQ7QUFRQSxlQUFlSixRQUFmO0FBQ0E7QUFDQSIsImZpbGUiOiJBZGRNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFkZE1vdmllID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICA8aW5wdXQgaWQ9J0FkZE1vdmllQnV0dG9uVmFsJyBvbkNoYW5nZT17IGV2ZW50ID0+IHByb3BzLmhhbmRsZUFkZE1vdmllQ2hhbmdlKGV2ZW50KSB9IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdBZGQgbW92aWUgdGl0bGUgaGVyZSc+PC9pbnB1dD5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUFkZE1vdmllU3VibWl0fSBpZD0nYWRkbW92aWVidXR0b24nPkFkZDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFkZE1vdmllO1xuLy8gcmVtZW1iZXIgdG8gcGFzcyBpbiBldmVudCBmb3IgaGFuZGxjaGFuZ2Vcbi8vIHJlbWJlbWJlciB0byBhZGQgdmFsdWUgZm9yIGlucHV0XG4iXX0=