import React from 'react'
import { Field } from 'formik'
import FormikErrorMessage from '../form-input-error/index.jsx'
import '../form-input/form-input-styles.scss'

/**
 * FormikField Component
 */
const FormikFieldTextArea = ({
  name, type, label, row, placeholder,
}) => (
  <Field name={name}>
    {(formikField) => (
      <>
        <label htmlFor={name} style={{ display: 'block' }}>
          {label}
        </label>
        <textarea
          type={type}
          id={name}
          placeholder={placeholder}
          row={row}
          className="text-area"
          {...formikField.field}
        />
        <FormikErrorMessage name={name} />
        {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
      </>
    )}
  </Field>
)

export default FormikFieldTextArea
