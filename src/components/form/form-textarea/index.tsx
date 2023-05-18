import { Field, FieldProps } from 'formik'
import FormikErrorMessage from '../form-input-error/index.js'
import '../form-input/form-input-styles.scss'

/**
 * FormikField Component
 */

type InputProps = { // The common Part
  className?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  value?: string;
  name: string;
  label?: string;
  text?: string;
}

function FormikFieldTextArea({
  name, label, rows, placeholder,
}: InputProps) {
  
  return (
  <Field name={name}>
    {(formikField: FieldProps) => (
      <>
        <label htmlFor={name} style={{ display: 'block' }}>
          {label}
        </label>
        <textarea
          id={name}
          placeholder={placeholder}
          rows={rows}
          className="text-area"
          {...formikField.field}
        />
        <FormikErrorMessage name={name} />
        {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
      </>
    )}
  </Field>
)
    }

export default FormikFieldTextArea
