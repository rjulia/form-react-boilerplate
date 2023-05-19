import { Field, FieldProps } from 'formik'
import FormikErrorMessage from '../form-input-error/index.js'

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
  name, label, rows, placeholder,className
}: InputProps) {
  
  return (
  <Field name={name}>
    {(formikField: FieldProps) => (
      <div className={className} >
        <label htmlFor={name} style={{ display: 'block' }}>
          {label}
        </label>
        <textarea
          id={name}
          placeholder={placeholder}
          rows={rows}
          className="w-full border border-gray-400 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-50"
          {...formikField.field}
        />
        <FormikErrorMessage name={name} />
        {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
      </div>
    )}
  </Field>
)
    }

export default FormikFieldTextArea
