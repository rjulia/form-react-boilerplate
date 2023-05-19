import { Field, FieldProps } from 'formik'
import FormikErrorMessage from '../form-input-error/index.jsx'

interface FieldPropsType {
  name: string
  type?: string
  label?: string
  text?: string
  className: {
    [key: string] : string | undefined 
  }
  placeholder?: string
}

function FormikField({
  name, 
  type, 
  label, 
  text, 
  placeholder, 
  className,
}: FieldPropsType) {

  return (
    <div className={className.container} >
      <Field name={name}>
        {(formikField: FieldProps) => (
          <>
            <label htmlFor={name} className={className.text}>
              {label}
            </label>
            <div className={className.containerInput}>
              <input
                type={type}
                id={name}
                className={className.input}
                placeholder={placeholder}
                {...formikField.field}
                defaultChecked={formikField.field.value}
              />
              {
                text && (
                  <div
                    className="rich-text"
                    dangerouslySetInnerHTML={{
                      __html: text,
                    }} />
                )
              }
            </div>
            <FormikErrorMessage name={name} cls={className.error} />
            {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
          </>
        )}
      </Field>

    </div>

  )
}

export default FormikField
