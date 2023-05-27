import { useNavigate } from 'react-router-dom'
import { Form } from "../../components/form"
import {FormDetailPageControllerProps} from "./form-detail-page-controller"
import Spinner from "../../components/spiner"

function FormDetailPageView({
  formSchema,
  initialValues,
  onHandelSubmit,
  formFields,
  isBeingSent,
  loading,
}:FormDetailPageControllerProps) {
  const navigate = useNavigate()

  if (loading) return <Spinner loading={loading} />
  if (!formFields) return null
  return (
    <div className="pt-10 container m-auto">
      <div>
        <button 
          onClick={() => navigate(-1)}
          className="bg-cyan-300 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
            Go back
        </button>
      </div>
      <div className='pt-10 max-w-[770px] m-auto'>
        <Form
          validationSchema={formSchema}
          initialValues={initialValues}
          onHandelSubmit={onHandelSubmit}
          formFields={formFields}
          isBeingSent={isBeingSent}
        />
      </div>
      
    </div>
  )
}

export default FormDetailPageView