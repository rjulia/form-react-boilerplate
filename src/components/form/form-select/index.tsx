/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Field } from 'formik'
import Select, { SingleValue } from 'react-select'
import FormikErrorMessage from '../form-input-error/index.js'

type OptionType = {
  value?: string
  label?: string
}

interface FieldSelectPropsType<T> {
  name: string
  type: string | undefined
  label?: string
  text?: string
  className: {[
    key: string
  ] : string | undefined };
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
    value?: string | number | boolean | Record<string, unknown> | undefined
  ) => void | undefined}
  placeholder: string,
}) {

  const OnChangeValue = (selected?: SingleValue<OptionType | string | undefined> | null | "") => {
    if (selected === null || selected === "") {
      return;
    }
    return form.setFieldValue(inputField.name, selected)
  }

  return (
  <Select
    options={options}
    placeholder={placeholder}
    name={inputField.name}
    value={options ? options.find((option:OptionType) => option.value === inputField.value) : ''}
    onChange={OnChangeValue}
    onBlur={inputField.onBlur}
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
    <div className={className.container}>
      <label htmlFor={name} className={className.label}>
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
      <FormikErrorMessage name={name} cls={className.error}/>
    </div>
  )
}

export default FormikFieldSelect
