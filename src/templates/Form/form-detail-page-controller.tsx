import { useParams } from 'react-router-dom'
import _ from 'lodash'
import { ObjectSchema } from 'yup'
import {
  ObjectOfAnyType,
  validationType,
} from '../../components/form/form/type'
import { useEffect, useState } from 'react'
import validationFromObject from "./validationFromObject"
import { getFornById } from '../../utils'
import { DataResponde } from "../../types"
import FormDetailPageView from './form-detail-page-view'
import { FormFieldsType } from '../../components/form/form/type'


export type FormDetailPageControllerProps = {
  formSchema: ObjectSchema<any>
  initialValues: ObjectOfAnyType
  onHandelSubmit: (values: ObjectOfAnyType) => void
  formFields: FormFieldsType[]
  isBeingSent: boolean
  loading: boolean
}

function FormPage() {
  const params = useParams()
  const { id } = params
  const [data, setData] = useState<FormFieldsType[]>({} as FormFieldsType[])
  const [formSchema, setFormSchema] = useState<ObjectSchema<any>>({} as ObjectSchema<any>)
  const [initialValues, setInitialValues] = useState<ObjectOfAnyType>({})
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    if(!id) return setLoading(false)
    getFornById(id).then((res: DataResponde | string) => {
      if (typeof res === 'string') return
      const data = _.get(res, 'data.attributes.fields', [])
      setData(data as FormFieldsType[])
    }).catch((err:string) => {
      console.error("🚀 ~ file: home-controller.tsx:8 ~ HomeController ~ err", err)
    }).finally(() => {
      setLoading(false)
    })
  }, [id])

  
  

  useEffect(() => {
    if(!data) return
  
    const initialValues = _.reduce(
      data,
      (acc, field) => {
        if(field.formType !== 'title') {
          const { name } = field
          acc[name] = ""
          return acc
        }
        return acc
      },
      {} as ObjectOfAnyType
    )
    const schema = validationFromObject(_.reduce(
      data,
      (acc, field) => {
        const { name, validation, formType } = field
        if(validation && formType !== 'title') {
          console.log("🚀 ~ file: form-detail-page-controller.tsx:69 ~ useEffect ~ validation:", validation)
          acc[name] = validation as { [key: string]: any}
          return acc
        }
        return acc
      },
      {} as validationType
    ))
    setFormSchema(schema as ObjectSchema<any>)
    setInitialValues(initialValues)
  }, [data])
      
   
  const onHandelSubmit = (values: ObjectOfAnyType) => {
    console.log('onHandelSubmit', values)
  }
  
  const isBeingSent = false

  const viewProps: FormDetailPageControllerProps = {
    formSchema,
    initialValues,
    onHandelSubmit,
    formFields: data,
    isBeingSent,
    loading,
  }

  return <FormDetailPageView {...viewProps} />
}

export default FormPage