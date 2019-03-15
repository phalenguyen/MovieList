let SearchBar = props => {
  return React.createElement(
    'div',
    null,
    React.createElement('input', { id: 'SearchButtonVal', onChange: event => props.handleChange(event), type: 'text', placeholder: 'Search...' }),
    React.createElement(
      'button',
      { onClick: props.handleSubmitSearch },
      'Go!'
    )
  );
};

export default SearchBar;
// input always has type of text attribute
// onChange - always needs value, shows user what is displayed
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJldmVudCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdFNlYXJjaCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsWUFBYUMsS0FBRCxJQUFXO0FBQ3pCLFNBQU87QUFBQTtBQUFBO0FBQ0wsbUNBQU8sSUFBRyxpQkFBVixFQUE0QixVQUFXQyxLQUFELElBQVdELE1BQU1FLFlBQU4sQ0FBbUJELEtBQW5CLENBQWpELEVBQTRFLE1BQUssTUFBakYsRUFBd0YsYUFBWSxXQUFwRyxHQURLO0FBRUw7QUFBQTtBQUFBLFFBQVEsU0FBU0QsTUFBTUcsa0JBQXZCO0FBQUE7QUFBQTtBQUZLLEdBQVA7QUFJRCxDQUxEOztBQU9BLGVBQWVKLFNBQWY7QUFDQTtBQUNBIiwiZmlsZSI6IlNlYXJjaEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBTZWFyY2hCYXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxkaXY+XG4gICAgPGlucHV0IGlkPSdTZWFyY2hCdXR0b25WYWwnIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHByb3BzLmhhbmRsZUNoYW5nZShldmVudCl9IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdTZWFyY2guLi4nPjwvaW5wdXQ+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTdWJtaXRTZWFyY2h9PkdvITwvYnV0dG9uPlxuICA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhclxuLy8gaW5wdXQgYWx3YXlzIGhhcyB0eXBlIG9mIHRleHQgYXR0cmlidXRlXG4vLyBvbkNoYW5nZSAtIGFsd2F5cyBuZWVkcyB2YWx1ZSwgc2hvd3MgdXNlciB3aGF0IGlzIGRpc3BsYXllZFxuIl19