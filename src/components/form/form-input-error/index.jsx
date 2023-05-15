import React from 'react'
import { ErrorMessage } from 'formik'

/**
 * FormikErrorMessage Component
 */
const FormikErrorMessage = ({ name }) => (
  <ErrorMessage name={name}>
    {(errMessage) => <div className="field__error">{errMessage}</div>}
  </ErrorMessage>
)

export default FormikErrorMessage

