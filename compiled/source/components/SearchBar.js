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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJldmVudCIsImhhbmRsZUNoYW5nZSIsInNlYXJjaFVzZXJUZXh0IiwiaGFuZGxlU3VibWl0U2VhcmNoIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxZQUFhQyxLQUFELElBQVc7QUFDdkIsV0FBTztBQUFBO0FBQUE7QUFDSCx1Q0FBTyxVQUFXQyxLQUFELElBQVdELE1BQU1FLFlBQU4sQ0FBbUJELEtBQW5CLENBQTVCLEVBQXVELE1BQUssTUFBNUQsRUFBbUUsT0FBT0QsTUFBTUcsY0FBaEYsRUFBZ0csYUFBWSxXQUE1RyxHQURHO0FBRUg7QUFBQTtBQUFBLGNBQVEsU0FBU0gsTUFBTUksa0JBQXZCO0FBQUE7QUFBQTtBQUZHLEtBQVA7QUFJSCxDQUxEOztBQU9BLGVBQWVMLFNBQWY7QUFDQTtBQUNBIiwiZmlsZSI6IlNlYXJjaEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTZWFyY2hCYXIgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHByb3BzLmhhbmRsZUNoYW5nZShldmVudCl9IHR5cGU9J3RleHQnIHZhbHVlPXtwcm9wcy5zZWFyY2hVc2VyVGV4dH0gcGxhY2Vob2xkZXI9J1NlYXJjaC4uLic+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTdWJtaXRTZWFyY2h9PkdvITwvYnV0dG9uPlxuICAgIDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXJcbi8vaW5wdXQgYWx3YXlzIGhhcyB0eXBlIG9mIHRleHQgYXR0cmlidXRlIFxuLy9vbkNoYW5nZSAtIGFsd2F5cyBuZWVkcyB2YWx1ZSwgc2hvd3MgdXNlciB3aGF0IGlzIGRpc3BsYXllZCAiXX0=