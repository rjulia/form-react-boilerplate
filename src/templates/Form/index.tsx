import { Form } from "../../components/form"
import * as Yup from 'yup'
import {
  ObjectOfAnyType,
} from '../../components/form/form/type'
import formFields from './data'

const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
})



function FormPage() {
  const initialValues = {
    name: '',
    email: ''
  }
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