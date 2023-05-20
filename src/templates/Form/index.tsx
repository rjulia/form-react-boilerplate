import { Form } from "../../components/form"
import * as Yup from 'yup'
import _ from 'lodash'
import {
  ObjectOfAnyType,
  validationType,
} from '../../components/form/form/type'
import formFields from './data'


function FormPage() {
  const contactFormSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  })
  
  // const contactFormSchema = Yup.object().shape(
  //   _.reduce(
  //     formFields,
  //     (acc, field) => {
  //       const { name, validation } = field
  //       console.log("🚀 ~ file: index.tsx:18 ~ FormPage ~ validation:", validation)
  //       if (validation) {
  //         const { required, ...rest } = validation
  //         const { message, email } = rest
  //         const validationSchema = Yup.string()
  //         if (required) {
  //           validationSchema.required(message)
  //         }
  //         if (email) {
  //           validationSchema.email(email).required(message)
  //         }
  //         acc[name] = validationSchema
  //       }
  //       return acc
  //     },
  //     {} as validationType
  //   )
  // )
  console.log("🚀 ~ file: index.tsx:36 ~ FormPage ~ contactFormSchema:", contactFormSchema)
  const initialValues = _.reduce(
    formFields,
    (acc, field) => {
      const { name } = field
      acc[name] = ''
      return acc
    },
    {} as ObjectOfAnyType
  )
   
  const onHandelSubmit = (values: ObjectOfAnyType) => {
    console.log('onHandelSubmit', values)
  }
  
  const isBeingSent = false

  return (
    <div className="pt-10">
      <h1 className="text-5xl">Form Page</h1>
      <Form
        validationSchema={contactFormSchema}
        initialValues={initialValues}
        onHandelSubmit={onHandelSubmit}
        formFields={formFields}
        isBeingSent={isBeingSent}
      />
      
    </div>
  )
}

export default FormPage