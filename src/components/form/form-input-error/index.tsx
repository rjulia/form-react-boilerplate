import { ErrorMessage } from 'formik'

/**
 * FormikErrorMessage Component
 */
const FormikErrorMessage = (
  { name, cls }: {name:string, cls:string | undefined
}) => (
  <ErrorMessage name={name}>
    {(errMessage:string) => <div className={cls}>{errMessage}</div>}
  </ErrorMessage>
)

export default FormikErrorMessage

