/* eslint-disable no-unused-vars */
import { 
  StylesConfig,
  OptionProps
} from 'react-select';


export const customStyles = <OptionType extends OptionProps, IsMulti extends boolean>(
): StylesConfig<OptionType, IsMulti> => ({
  // option: (styles, {
  //   isFocused,
  // }) => ({
  //   ...styles,
  //   backgroundColor: isFocused ? '#018AFF' : null,
  //   color: isFocused ? '#fff' : '#3b3b3b',
  // }),
  indicatorsContainer: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    border: 'none',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    fontFamily: "'Manrope Regular', sans-serif",
    borderRadius: 0,
    background_color: '#f2f',
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#C3C3C3',
    fontSize: '14px',
    lineHeight: '23px',
    // padding: '12px 0 0',
    fontFamily: "'Manrope Regular', sans-serif",
  }),
  input: (provided) => ({
    ...provided,
    maxHeight: '33px',
    fontFamily: "'Manrope Regular', sans-serif",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontFamily: "'Manrope Regular', sans-serif",
    lineHeight: '23px',
    fontSize: '16px',
    padding: '8px 0 0',
  }),
  control: (provided) => ({
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
})
