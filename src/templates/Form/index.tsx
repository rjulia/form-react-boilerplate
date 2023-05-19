import { Form } from "../../components/form"
import * as Yup from 'yup'
import {
  ObjectOfAnyType,
} from '../../components/form/form/type'

const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
})

type User = Yup.InferType<typeof contactFormSchema>;

const classInput = "md:col-6 col-12 border border-gray-400 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
function FormPage() {
  const initialValues = {
    name: '',
    email: ''
  }
  const onHandelSubmit = (values: ObjectOfAnyType) => {
    console.log('onHandelSubmit', values)
  }
  const formFields = [{
    label: 'Select',
  placeholder: 'select one option',
  formType: 'select',
  name: 'purpose',
  type: 'text',
  class: 'col-12 field__container',
  options: [
    {
      value: "option one",
      label: "option one",
    },
    {
      value: "option two",
      label:  "option two",
    },
    {
      value: "option three",
      label:  "option three",
    },
    {
      value: "option four",
      label:  "option four",
    },
    
  ],
},{
    label: "Name",
    formType: 'field',
    name: 'name',
    type: 'text',
    class: classInput,
  },
  {
    label: 'Email',
    formType: 'field',
    name: 'email',
    type: 'email',
    class: classInput,
  },
  {
    label: 'SUBMIT',
    formType: 'button',
    name: 'button',
    class: classInput,
  },{
    label: "Drop files",
    formType: 'drop',
    name: 'file',
    type: 'drop',
    class: 'col-12 field__container',
    accept: 'image/*',
  },
]
  const isBeingSent = false

  return (
    <div>
      <h1>Form Page</h1>
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