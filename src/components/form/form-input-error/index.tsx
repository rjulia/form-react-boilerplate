import { ErrorMessage } from 'formik'

/**
 * FormikErrorMessage Component
 */
const FormikErrorMessage = ({ name }: {name:string}) => (
  <ErrorMessage name={name}>
    {(errMessage:string) => <div className="text-[10px] text-red-400">{errMessage}</div>}
  </ErrorMessage>
)

export default FormikErrorMessage

