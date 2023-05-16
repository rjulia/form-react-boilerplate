
export interface FormFieldsType {
  formType: string
  class: string | undefined
  title?: string
  label?: string
  name?: string
  type?: string
  text?: string
  placeholder?: string
  comp?: React.FunctionComponent<any>
  row?: number
  options?: Array<any>
}
export type ObjectOfAnyType = {
  [key: string]: any
}

export interface PropsType<T> {
  validationSchema: any
  initialValues: any
  onHandelSubmit: (values: ObjectOfAnyType) => void
  formFields: Array<FormFieldsType>
  isBeingSent: boolean
}