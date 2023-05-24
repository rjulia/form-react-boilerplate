import { Form } from "../../components/form"
import {FormDetailPageControllerProps} from "./form-detail-page-controller"

function FormDetailPageView({
  formSchema,
  initialValues,
  onHandelSubmit,
  formFields,
  isBeingSent,
}:FormDetailPageControllerProps) {
  return (
    <div className="pt-10">
      <h1 className="text-5xl mb-4 text-cyan-700">Form Page</h1>
      <Form
        validationSchema={formSchema}
        initialValues={initialValues}
        onHandelSubmit={onHandelSubmit}
        formFields={formFields}
        isBeingSent={isBeingSent}
      />
      
    </div>
  )
}

export default FormDetailPageView