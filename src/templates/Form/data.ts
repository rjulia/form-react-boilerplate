import {styles} from './styles'
const classInput = ""
const classSelect = "col-span-2"
const classDropZone = "col-span-2"
const classTextarea = "col-span-2"
const formFields = [{
  label: 'Select',
  placeholder: 'select one option',
  formType: 'select',
  name: 'purpose',
  type: 'text',
  class: classSelect,
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
    class: styles['name'],
  },
  {
    label: 'Email',
    formType: 'field',
    name: 'email',
    type: 'email',
    class: classInput,
  },
  {
    label: "Drop files",
    formType: 'drop',
    name: 'file',
    type: 'drop',
    class: classDropZone,
    accept: 'image/*',
  },
  {
    label: 'Message',
    formType: 'textarea',
    name: 'message',
    rows: '5',
    type: 'textarea',
    class: classTextarea,
  },
  {
    label: 'SUBMIT',
    formType: 'button',
    name: 'button',
    class: classInput,
  }
]

export default formFields