var AddMovie = props => {
    return React.createElement(
        'div',
        null,
        React.createElement('input', { onChange: event => props.handleAddMovieChange(event), type: 'text', value: props.addMovieText, placeholder: 'Add movie title here' }),
        React.createElement(
            'button',
            { onClick: props.handleAddMovieSubmit, id: 'addmoviebutton' },
            'Add'
        )
    );
};

export default AddMovie;
//remember to pass in event for handlchange
//rembember to add value for input
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb21wb25lbnRzL0FkZE1vdmllLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZSIsInByb3BzIiwiZXZlbnQiLCJoYW5kbGVBZGRNb3ZpZUNoYW5nZSIsImFkZE1vdmllVGV4dCIsImhhbmRsZUFkZE1vdmllU3VibWl0Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxXQUFZQyxLQUFELElBQVc7QUFDdEIsV0FDSTtBQUFBO0FBQUE7QUFDSSx1Q0FBTyxVQUFXQyxLQUFELElBQVdELE1BQU1FLG9CQUFOLENBQTJCRCxLQUEzQixDQUE1QixFQUErRCxNQUFLLE1BQXBFLEVBQTJFLE9BQU9ELE1BQU1HLFlBQXhGLEVBQXNHLGFBQVksc0JBQWxILEdBREo7QUFFSTtBQUFBO0FBQUEsY0FBUSxTQUFTSCxNQUFNSSxvQkFBdkIsRUFBNkMsSUFBRyxnQkFBaEQ7QUFBQTtBQUFBO0FBRkosS0FESjtBQU1DLENBUEw7O0FBU0EsZUFBZUwsUUFBZjtBQUNBO0FBQ0EiLCJmaWxlIjoiQWRkTW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWRkTW92aWUgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHByb3BzLmhhbmRsZUFkZE1vdmllQ2hhbmdlKGV2ZW50KX0gdHlwZT0ndGV4dCcgdmFsdWU9e3Byb3BzLmFkZE1vdmllVGV4dH0gcGxhY2Vob2xkZXI9J0FkZCBtb3ZpZSB0aXRsZSBoZXJlJz48L2lucHV0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVBZGRNb3ZpZVN1Ym1pdH0gaWQ9J2FkZG1vdmllYnV0dG9uJz5BZGQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgICAgICAgICBcbmV4cG9ydCBkZWZhdWx0IEFkZE1vdmllXG4vL3JlbWVtYmVyIHRvIHBhc3MgaW4gZXZlbnQgZm9yIGhhbmRsY2hhbmdlXG4vL3JlbWJlbWJlciB0byBhZGQgdmFsdWUgZm9yIGlucHV0Il19