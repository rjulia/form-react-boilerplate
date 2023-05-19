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
import Title from '../../title/index.js'


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
                    f = <Title key={field.name} text={field.text} className={field.className} />
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
                        className={field.className}
                      />
                    break
                  case 'textarea':
                    f = <FormikFieldTextArea
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        rows={field.rows}
                        placeholder={field.placeholder}
                        className={field.className}
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
                        className={field.className}
                      />
                    
                    break
                  case 'drop':
                    f =
                      <DropZone
                        label={field.label}
                        name={field.name}
                        setFieldValue={formik.setFieldValue}
                        accept={field.accept}
                        className={field.className}
                        key={field.name}
                      />
                    break
                    case 'button':
                    f = 
                    <Button
                      key={field.name}
                      disabled={!(formik.isValid && formik.dirty) || isBeingSent}
                      text={field.label}
                      type="submit"
                      className={field.className}
                    />

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
