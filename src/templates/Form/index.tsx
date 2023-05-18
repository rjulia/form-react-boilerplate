import { Form } from "../../components/form"

function FormPage() {
  const initialValues = {}
  const validationSchema = {}
  const onHandelSubmit = () => {}
  const formFields = []
  const isBeingSent = false

  return (
    <div>
      <h1>Form Page</h1>
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        onHandelSubmit={onHandelSubmit}
        formFields={formFields}
        isBeingSent={isBeingSent}
      />
      
    </div>
  )
}

export default FormPage