var SearchBar = props => {
  return React.createElement(
    'div',
    null,
    React.createElement('input', { onChange: event => props.handleChange(event), type: 'text', value: props.searchUserText, placeholder: 'Search...' }),
    React.createElement(
      'button',
      { onClick: props.handleSubmitSearch },
      'Go!'
    )
  );
};

export default SearchBar;
//input always has type of text attribute
//onChange - always needs value, shows user what is displayed
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJldmVudCIsImhhbmRsZUNoYW5nZSIsInNlYXJjaFVzZXJUZXh0IiwiaGFuZGxlU3VibWl0U2VhcmNoIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxZQUFhQyxLQUFELElBQVc7QUFDekIsU0FBTztBQUFBO0FBQUE7QUFDTCxtQ0FBTyxVQUFXQyxLQUFELElBQVdELE1BQU1FLFlBQU4sQ0FBbUJELEtBQW5CLENBQTVCLEVBQXVELE1BQUssTUFBNUQsRUFBbUUsT0FBT0QsTUFBTUcsY0FBaEYsRUFBZ0csYUFBWSxXQUE1RyxHQURLO0FBRUw7QUFBQTtBQUFBLFFBQVEsU0FBU0gsTUFBTUksa0JBQXZCO0FBQUE7QUFBQTtBQUZLLEdBQVA7QUFJRCxDQUxEOztBQU9BLGVBQWVMLFNBQWY7QUFDQTtBQUNBIiwiZmlsZSI6IlNlYXJjaEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTZWFyY2hCYXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxkaXY+XG4gICAgPGlucHV0IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHByb3BzLmhhbmRsZUNoYW5nZShldmVudCl9IHR5cGU9J3RleHQnIHZhbHVlPXtwcm9wcy5zZWFyY2hVc2VyVGV4dH0gcGxhY2Vob2xkZXI9J1NlYXJjaC4uLic+PC9pbnB1dD5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVN1Ym1pdFNlYXJjaH0+R28hPC9idXR0b24+XG4gIDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXJcbi8vaW5wdXQgYWx3YXlzIGhhcyB0eXBlIG9mIHRleHQgYXR0cmlidXRlXG4vL29uQ2hhbmdlIC0gYWx3YXlzIG5lZWRzIHZhbHVlLCBzaG93cyB1c2VyIHdoYXQgaXMgZGlzcGxheWVkICJdfQ==