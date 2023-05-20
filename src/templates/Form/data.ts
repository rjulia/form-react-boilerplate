import { FormFieldsType } from '../../components/form/form/type'
import {styles} from './styles'

const formFields: Array<FormFieldsType> = [
  {
    label: "LoginForm",
    formType: 'title',
    name: 'title',
    type: 'text',
    className: styles['title'],
  },
  {
    label: "Name",
    formType: 'field',
    name: 'name',
    type: 'text',
    className: styles['field'],
  },
  {
    label: 'Email',
    formType: 'field',
    name: 'email',
    type: 'email',
    className: styles['field'],
    validation:  {
      required: true,
      email: 'Please enter a valid email address',
    }
  },
  {
    label: "Surname",
    formType: 'field',
    name: 'surname',
    type: 'text',
    className: styles['field'],
  },
  {
    label: 'Address',
    formType: 'field',
    name: 'address',
    type: 'text',
    className: styles['field'],
  },
  {
  label: 'Select',
  placeholder: 'select one option',
  formType: 'select',
  name: 'purpose',
  type: 'text',
  className: styles['select'],
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
  },
  {
    label: "Drop files",
    formType: 'drop',
    name: 'file',
    type: 'drop',
    className: styles['file'],
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
  },
  {
    label: 'Message',
    formType: 'textarea',
    name: 'message',
    rows: 5,
    type: 'textarea',
    className: styles['message'],
  },
  {
    label: 'SUBMIT',
    formType: 'button', 
    type: 'submit',
    name: 'button',
    className: styles['button'],
  }
]

export default formFields