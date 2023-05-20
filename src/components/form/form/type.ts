
import {  Accept } from 'react-dropzone'

export type ClassType = {
  container?: string
  containerInput?: string
  text?: string
  input?: string
  error?: string
  [others: string]: any;
}
export type validationType = {
  required?: boolean
  email?: string
  minLength?: string
  maxLength?: string
  pattern?: string
  [others: string]: any;
}

export type FormFieldsType = {
  formType: string
  className:  ClassType
  title?: string
  label?: string
  name: string
  type?: string
  text?: string
  placeholder?: string
  comp?: React.FunctionComponent<any>
  rows?: number
  options?: Array<{value: string, label: string}>
  accept?: Accept | undefined
  validation?: validationType
}
export type ObjectOfAnyType = {
  [key: string]: string
}

export interface PropsType {
  validationSchema: any
  initialValues: ObjectOfAnyType
  onHandelSubmit: (values: ObjectOfAnyType) => void
  formFields: Array<FormFieldsType>
  isBeingSent: boolean
}