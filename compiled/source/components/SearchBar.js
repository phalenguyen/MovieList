let SearchBar = props => {
  return React.createElement(
    'div',
    null,
    React.createElement('input', { onChange: event => props.handleChange(event), type: 'text', placeholder: 'Search...' }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJldmVudCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdFNlYXJjaCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsWUFBYUMsS0FBRCxJQUFXO0FBQ3pCLFNBQU87QUFBQTtBQUFBO0FBQ0wsbUNBQU8sVUFBV0MsS0FBRCxJQUFXRCxNQUFNRSxZQUFOLENBQW1CRCxLQUFuQixDQUE1QixFQUF1RCxNQUFLLE1BQTVELEVBQW1FLGFBQVksV0FBL0UsR0FESztBQUVMO0FBQUE7QUFBQSxRQUFRLFNBQVNELE1BQU1HLGtCQUF2QjtBQUFBO0FBQUE7QUFGSyxHQUFQO0FBSUQsQ0FMRDs7QUFPQSxlQUFlSixTQUFmO0FBQ0E7QUFDQSIsImZpbGUiOiJTZWFyY2hCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgU2VhcmNoQmFyID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiA8ZGl2PlxuICAgIDxpbnB1dCBvbkNoYW5nZT17KGV2ZW50KSA9PiBwcm9wcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfSB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nU2VhcmNoLi4uJz48L2lucHV0PlxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuaGFuZGxlU3VibWl0U2VhcmNofT5HbyE8L2J1dHRvbj5cbiAgPC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXJcbi8vIGlucHV0IGFsd2F5cyBoYXMgdHlwZSBvZiB0ZXh0IGF0dHJpYnV0ZVxuLy8gb25DaGFuZ2UgLSBhbHdheXMgbmVlZHMgdmFsdWUsIHNob3dzIHVzZXIgd2hhdCBpcyBkaXNwbGF5ZWRcbiJdfQ==