import { Form } from "../../components/form"
import _ from 'lodash'
import {
  ObjectOfAnyType,
  validationType,
} from '../../components/form/form/type'
import formFields from './data'
import validationFromObject from "./validationFromObject"


function FormPage(props:any) {
  console.log("🚀 ~ file: index.tsx:12 ~ FormPage ~ props:", props)


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