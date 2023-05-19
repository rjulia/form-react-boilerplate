/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Field } from 'formik'
import Select, { SingleValue } from 'react-select'
import FormikErrorMessage from '../form-input-error/index.js'
import {customStyles} from './customSelectDropdown.js'

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

type FormState = {
  fruit: OptionType | null;
};

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
    value?: string | number | boolean | Record<string, unknown> | undefined
  ) => void | undefined}
  placeholder: string,
}) {

  const OnChangeValue = (selected?: SingleValue<OptionType | string | undefined> | null | "") => {
    if (selected === null || selected === "") {
      return;
    }
    return form.setFieldValue(field.name, selected)
  }

  return (
  <Select
    options={options}
    placeholder={placeholder}
    name={field.name}
    value={options ? options.find((option:OptionType) => option.value === field.value) : ''}
    onChange={OnChangeValue}
    onBlur={field.onBlur}
    // styles={customStyles}
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
  className,
}: FieldSelectPropsType<T>) {
  return (
    <div className={className}>
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
    </div>
  )
}

export default FormikFieldSelect
