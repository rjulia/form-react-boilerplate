import { Formik, Form } from 'formik'
import _ from 'lodash'
import Button from '../../button'
import FormikField from '../form-input/index.js'
import FormikFieldTextArea from '../form-textarea/index.jsx'
import FormikFieldSelect from '../form-select/index.jsx'
import DropZone from '../../drop-zone'

import {
  FormFieldsType,
  ObjectOfAnyType,
  PropsType,
} from './type.js'


const LoginFormikComponents = ({
  validationSchema,
  initialValues,
  onHandelSubmit,
  formFields,
  isBeingSent,
  
}: PropsType<any>

) => {
  const onSubmit = (values: ObjectOfAnyType) => {
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

          <div className="grid grid-cols-2 gap-4">
            {
              _.map(formFields, (field: FormFieldsType) => {
                let f
                switch (field.formType) {
                  case 'title':
                    f = <div className={field.class} key={field.name}>
                      <h3 className="form__title">{field.title}</h3>
                    </div>
                    break
                  case 'field':
                    f = 
                      <FormikField
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        text={field.text}
                        placeholder={field.placeholder}
                        comp={field.comp}
                        className={field.class}
                      />
                    break
                  case 'textarea':
                    f = <FormikFieldTextArea
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        rows={field.rows}
                        placeholder={field.placeholder}
                        className={field.class}
                      />
                    break
                  case 'select':
                    f = <FormikFieldSelect
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        options={field.options}
                        className={field.class}
                      />
                    
                    break
                  case 'drop':
                    f = <div className={field.class} key={field.name}>
                      <DropZone
                        label={field.label}
                        name={field.name}
                        setFieldValue={formik.setFieldValue}
                        accept={field.accept}
                      />
                    </div>
                    break
                    case 'button':
                    f = <div className="form__button" key={field.name}>
                    <Button
                      disabled={!(formik.isValid && formik.dirty) || isBeingSent}
                      text={field.label}
                      type="submit"
                    />
                  </div>
                    break
                  default:
                    break
                }
                return f
              })
            }
            
          </div>
          {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
        </Form>
      )}
    </Formik>
  )
}

export default LoginFormikComponents
