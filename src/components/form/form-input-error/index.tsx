import { ErrorMessage } from 'formik'

/**
 * FormikErrorMessage Component
 */
const FormikErrorMessage = ({ name }: {name:string}) => (
  <ErrorMessage name={name}>
    {(errMessage:string) => <div className="field__error">{errMessage}</div>}
  </ErrorMessage>
)

export default FormikErrorMessage

