
export interface FormFieldsType {
  formType: string
  class: string | undefined
  title?: string
  label?: string
  name: string
  type?: string
  text?: string
  placeholder?: string
  comp?: React.FunctionComponent<any>
  rows?: number
  options?: Array<{value: string, label: string}>
}
export type ObjectOfAnyType = {
  [key: string]: string
}

export interface PropsType<T> {
  validationSchema: any
  initialValues: ObjectOfAnyType
  onHandelSubmit: (values: ObjectOfAnyType) => void
  formFields: Array<FormFieldsType>
  isBeingSent: boolean
}