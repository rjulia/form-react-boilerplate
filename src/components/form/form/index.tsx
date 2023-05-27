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

type ComponentType = {
  [key: string]: React.FC<any>
}


const lookup: ComponentType = {
  'title': Title,
  'field': FormikField,
  'textarea': FormikFieldTextArea,
  'select': FormikFieldSelect,
  'drop': DropZone,
  'button': Button,
}

const Block = ({ field, ...rest }: {
  field: FormFieldsType
}) => {

  const Component = lookup[field.formType]
  const props = { ...field, ...rest }
  return <Component {...props} />
}


const LoginFormikComponents = ({
  validationSchema,
  initialValues,
  onHandelSubmit,
  formFields,
  isBeingSent,
  
}: PropsType

) => {
  const onSubmit = (values: ObjectOfAnyType) => {
    onHandelSubmit(values)
  }
  if(!formFields && !initialValues) return null
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
                const viewProps = {
                  field,
                  formik,
                  isBeingSent,
                  onSubmit,
                }
                return <Block key={field.name} {...viewProps} />
              })
            }
          </div>
          <div className='mt-10 border-full bg-stone-100 p-5'>
            <h4 className='text-stone-500 text-xl mb-4'>Formik helper</h4>
            <pre className='text-xs'>{JSON.stringify(formik, null, 4)}</pre> 
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default LoginFormikComponents
