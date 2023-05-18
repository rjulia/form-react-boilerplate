/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Field } from 'formik'
import Select, { Options, ActionMeta, SingleValue, OnChangeValue } from 'react-select'
import FormikErrorMessage from '../form-input-error/index.js'
import '../form-input/form-input-styles.scss'
import customStyles from './customSelectDropdown.js'

type OptionType = {
  value?: string
  label?: string
}

interface FieldSelectPropsType<T> {
  name: string
  type: string | undefined
  label?: string
  text?: string
  className?: string | undefined
  placeholder?: string
  comp?: React.FunctionComponent<T>
  options: Array<OptionType> | undefined
}

function SelectField({
  options,
  field,
  form,
  placeholder,
}: {
  options: Array<OptionType>
  field: { name: string, value: string, onBlur: () => void }
  form: { setFieldValue: (
    field: string,
    value?: string,
  ) => void | undefined}
  placeholder: string,
}) {

  const OnChangeValue = (selected?: SingleValue<OptionType | string | undefined> | null | "") => {
    if (selected === null || selected === "") {
      return;
    }
    return form.setFieldValue(field.name, selected?.value || selected)
  }

  return (
  <Select
    options={options}
    placeholder={placeholder}
    name={field.name}
    value={options ? options.find((option:OptionType) => option.value === field.value) : ''}
    onChange={OnChangeValue}
    onBlur={field.onBlur}
    styles={customStyles}
  />
)
  }

/**
 * FormikField Component
 */
function FormikFieldSelect<T>({
  name, 
  type, 
  label, 
  options, 
  placeholder,
}: FieldSelectPropsType<T>) {
  return (
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
}

export default FormikFieldSelect
