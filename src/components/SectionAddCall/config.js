const formFields = [
  {
    label: 'Name',
    name: 'name',
    placeholder: 'John',
    type: 'text',
    pattern: '^[A-Za-z0-9]{3,30}$',
    errorMessage: 'Name should be 3-30 characters',
  },
  {
    label: 'Phone',
    name: 'phone',
    placeholder: 'xx(xxx)xxx xxx xxx',
    type: 'text',
    pattern: '^(\\+|00)(\\(?\\d{3}\\)?-?)(\\s?\\d{3}){3}$',
    errorMessage: 'Enter a valid phone number',
  },
  {
    label: 'Time',
    name: 'time',
    type: 'time',
    errorMessage: 'Choose a time',
  },
];

export default formFields;
