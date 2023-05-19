import { Field, FieldProps } from 'formik'
import FormikErrorMessage from '../form-input-error/index.js'
/**
 * FormikField Component
 */

type InputProps = { // The common Part
  className: {
    [key: string]: string
  };
  placeholder?: string;
  rows: number;
  cols?: number;
  value?: string;
  name: string;
  label?: string;
  text?: string;
}

function FormikFieldTextArea({
  name, label, rows, placeholder,className
}: InputProps) {
  
  return (
  <Field name={name}>
    {(formikField: FieldProps) => (
      <div className={className?.container} >
        <label htmlFor={name} className={className.label}>
          {label}
        </label>
        <textarea
          id={name}
          placeholder={placeholder}
          className={className?.input}
          rows={rows}
          {...formikField.field}
        />
        <FormikErrorMessage name={name} cls={className.error} />
        {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
      </div>
    )}
  </Field>
)
    }

export default FormikFieldTextArea
