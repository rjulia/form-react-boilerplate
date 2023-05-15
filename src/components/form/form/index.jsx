import React from 'react'
import { Formik, Form } from 'formik'
import _ from 'lodash'
import Button from '../../button'
import FormikField from '../form-input/index.jsx'
import FormikFieldTextArea from '../form-textarea/index.jsx'
import FormikFieldSelect from '../form-select/index.jsx'
import DropZone from '../../drop-zone'
import './form-styles.scss'

/**
 * LoginFormikComponents Component
 */
const LoginFormikComponents = ({
  validationSchema,
  initialValues,
  onHandelSubmit,
  formFields,
  isBeingSent,
  t,
}) => {
  const onSubmit = (values) => {
    onHandelSubmit(values)
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>

          <div className="row form__container">
            {
              _.map(formFields, (field, idx) => {
                let f
                switch (field.formType) {
                  case 'title':
                    f = <div className={field.class} key={field.name}>
                      <h3 className="form__title">{field.title}</h3>
                    </div>
                    break
                  case 'field':
                    f = <div className={field.class} key={field.name}>
                      <FormikField
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        text={field.text}
                        placeholder={field.placeholder}
                        comp={field.comp}
                      />
                    </div>
                    break
                  case 'textarea':
                    f = <div className={field.class} key={field.name}>
                      <FormikFieldTextArea
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        row={field.row}
                      />
                    </div>
                    break
                  case 'select':
                    f = <div className={field.class} key={field.name}>
                      <FormikFieldSelect
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        options={field.options}
                      />
                    </div>
                    break
                  case 'drop':
                    f = <div className={field.class} key={field.name}>
                      <DropZone
                        label={field.label}
                        name={field.name}
                        setFieldValue={formik.setFieldValue}
                      />
                    </div>
                    break
                  default:
                    break
                }
                return f
              })
            }
            <div className="form__button">
              <Button
                disabled={!(formik.isValid && formik.dirty) || isBeingSent}
                big

                text={t('contact.button')}
                type="submit"
              />

            </div>
          </div>
          {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
        </Form>
      )}
    </Formik>
  )
}

export default LoginFormikComponents
