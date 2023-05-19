import { Field, FieldProps } from 'formik'
import FormikErrorMessage from '../form-input-error/index.jsx'

interface FieldPropsType<T> {
  name: string
  type?: string
  label?: string
  text?: string
  className: string | undefined
  placeholder?: string
  comp?: React.FunctionComponent<T>
}

function FormikField<T>({
  name, type, label, text, placeholder, comp, className,
}: FieldPropsType<T> & React.HTMLAttributes<HTMLDivElement>) {
  const Component = comp as React.FunctionComponent
  return (
    <div className={className} >
      <Field name={name}>
        {(formikField: FieldProps) => (
          <>
            <label htmlFor={name} style={{ display: 'block' }}>
              {label}
            </label>
            <div className={text && 'text-checkbox'}>
              <input
                type={type}
                id={name}
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
              {
                comp && <Component />
              }
            </div>
            <FormikErrorMessage name={name} />
            {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
          </>
        )}
      </Field>

    </div>

  )
}

export default FormikField
