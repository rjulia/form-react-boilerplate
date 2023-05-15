import React from 'react'
import { Field } from 'formik'
import Select from 'react-select'
import FormikErrorMessage from '../form-input-error/index.jsx'
import '../form-input/form-input-styles.scss'
import customStyles from './customSelectDropdown'

const SelectField = ({
  options,
  field,
  form,
  placeholder,
}) => (
  <Select
    options={options}
    placeholder={placeholder}
    name={field.name}
    value={options ? options.find((option) => option.value === field.value) : ''}
    onChange={(option) => form.setFieldValue(field.name, option.value)}
    onBlur={field.onBlur}
    styles={customStyles}
  />
)

/**
 * FormikField Component
 */
const FormikFieldSelect = ({
  name, type, label, options, placeholder,
}) => (
  <React.Fragment>
    <label htmlFor={name} style={{ display: 'block' }}>
      {label}
    </label>
    <Field
      name={name}
      component={SelectField}
      type={type}
      id={name}
      options={options}
      placeholder={placeholder}
    />
    <FormikErrorMessage name={name} />
  </React.Fragment>
)

export default FormikFieldSelect
