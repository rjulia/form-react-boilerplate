import React from 'react'
import { Field } from 'formik'
import FormikErrorMessage from '../form-input-error/index.jsx'
import './form-input-styles.scss'

/**
 * FormikField Component
 */
const FormikField = ({
  name, type, label, text, placeholder, comp,
}) => {
  const Component = comp
  return (
    <Field name={name}>
      {(formikField) => (
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

  )
}

export default FormikField
