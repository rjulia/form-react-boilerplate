import { FormFieldsType } from '../../components/form/form/type'
import {styles} from './styles'

const formFields: Array<FormFieldsType> = [{
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
  },{
    label: "Name",
    formType: 'field',
    name: 'name',
    type: 'text',
    className: styles['name'],
  },
  {
    label: 'Email',
    formType: 'field',
    name: 'email',
    type: 'email',
    className: styles['email'],
  },
  {
    label: "Drop files",
    formType: 'drop',
    name: 'file',
    type: 'drop',
    className: styles['file'],
    accept: {
      'image/png': ['.png'],
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
    name: 'button',
    className: styles['button'],
  }
]

export default formFields