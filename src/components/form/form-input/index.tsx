import { Field, FieldProps } from 'formik'
import FormikErrorMessage from '../form-input-error/index.jsx'

interface FieldPropsType {
  name: string
  type?: string
  label?: string
  className: {
    [key: string] : string | undefined 
  }
  placeholder?: string
}

function FormikField({
  name, 
  type, 
  label, 
  placeholder, 
  className,
}: FieldPropsType) {

  return (
    <div className={className.container} >
      <Field name={name}>
        {(formikField: FieldProps) => (
          <>
            <label htmlFor={name} className={className.label}>
              {label}
            </label>
           
            <input
              type={type}
              id={name}
              className={className.input}
              placeholder={placeholder}
              {...formikField.field}
              defaultChecked={formikField.field.value}
            />
              
            <FormikErrorMessage name={name} cls={className.error} />
            {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
          </>
        )}
      </Field>

    </div>

  )
}

export default FormikField
