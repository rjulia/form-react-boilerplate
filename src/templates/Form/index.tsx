import { Form } from "../../components/form"
import _ from 'lodash'
import {
  ObjectOfAnyType,
  validationType,
} from '../../components/form/form/type'
import formFields from './data'
import validationFromObject from "./validationFromObject"


function FormPage() {
  // const contactFormSchema = Yup.object().shape({
  //   name: Yup.string().required('Required'),
  //   email: Yup.string().email('Invalid email').required('Required'),
  // })

  const contactFormSchema = validationFromObject(_.reduce(
    formFields,
    (acc, field) => {
      const { name, validation } = field
      if(validation) {
        acc[name] = validation as { [key: string]: validationType}
        return acc
      }
      return acc
    },
    {} as validationType
  ))
  
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