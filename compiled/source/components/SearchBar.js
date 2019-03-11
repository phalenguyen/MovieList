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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJldmVudCIsImhhbmRsZUNoYW5nZSIsInNlYXJjaFVzZXJUZXh0IiwiaGFuZGxlU3VibWl0U2VhcmNoIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxZQUFhQyxLQUFELElBQVc7QUFDdkIsV0FFQTtBQUFBO0FBQUE7QUFDSSx1Q0FBTyxVQUFXQyxLQUFELElBQVdELE1BQU1FLFlBQU4sQ0FBbUJELEtBQW5CLENBQTVCLEVBQXVELE1BQUssTUFBNUQsRUFBbUUsT0FBT0QsTUFBTUcsY0FBaEYsRUFBZ0csYUFBWSxXQUE1RyxHQURKO0FBRUk7QUFBQTtBQUFBLGNBQVEsU0FBU0gsTUFBTUksa0JBQXZCO0FBQUE7QUFBQTtBQUZKLEtBRkE7QUFPSCxDQVJEOztBQVVBLGVBQWVMLFNBQWY7QUFDQTtBQUNBIiwiZmlsZSI6IlNlYXJjaEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTZWFyY2hCYXIgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHByb3BzLmhhbmRsZUNoYW5nZShldmVudCl9IHR5cGU9J3RleHQnIHZhbHVlPXtwcm9wcy5zZWFyY2hVc2VyVGV4dH0gcGxhY2Vob2xkZXI9J1NlYXJjaC4uLic+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTdWJtaXRTZWFyY2h9PkdvITwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyXG4vL2lucHV0IGFsd2F5cyBoYXMgdHlwZSBvZiB0ZXh0IGF0dHJpYnV0ZSBcbi8vb25DaGFuZ2UgLSBhbHdheXMgbmVlZHMgdmFsdWUsIHNob3dzIHVzZXIgd2hhdCBpcyBkaXNwbGF5ZWQgIl19