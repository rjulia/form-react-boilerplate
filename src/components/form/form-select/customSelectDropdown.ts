/* eslint-disable no-unused-vars */
const customStyles = {
  option: (styles, {
    data, isDisabled, isFocused, isSelected,
  }) => ({
    ...styles,
    backgroundColor: isFocused ? '#018AFF' : null,
    color: isFocused ? '#fff' : '#3b3b3b',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    backgroundColor: 'transparent',
    border: 'none',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  menu: (provided, state) => ({
    ...provided,
    fontFamily: "'Manrope Regular', sans-serif",
    borderRadius: 0,
    background_color: '#f2f',
  }),
  menuList: (provided, state) => ({
    ...provided,
    padding: 0,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: 0,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#C3C3C3',
    fontSize: '14px',
    lineHeight: '23px',
    // padding: '12px 0 0',
    fontFamily: "'Manrope Regular', sans-serif",
  }),
  input: (provided, state) => ({
    ...provided,
    maxHeight: '33px',
    fontFamily: "'Manrope Regular', sans-serif",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontFamily: "'Manrope Regular', sans-serif",
    lineHeight: '23px',
    fontSize: '16px',
    padding: '8px 0 0',
  }),
  control: (provided, state) => ({
    ...provided,
    minHeight: '50px',
    backgroundColor: 'transparent',
    borderRadius: '0',
    padding: '0 8px',
    border: '1px solid #DEDEDE !important',
    boxShadow: 'none',

    // none of react-select's styles are passed to <Control />
    width: '100%',
  }),
}

export default customStyles
