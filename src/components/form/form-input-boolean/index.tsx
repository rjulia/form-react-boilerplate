import { Field, FieldProps } from 'formik'
import FormikErrorMessage from '../form-input-error/index.jsx'
interface FieldPropsType {
  name: string
  type?: string
  label?: string
  className: {
    [key: string]: string | undefined
  }
  placeholder?: string
}

function BooleanInput({ name,
  type,
  label,
  placeholder,
  className,
}: FieldPropsType) {

  // const validationSchema = yup.object({
  //   [name]: yup.boolean().required("The field is required"),
  // });

  return (
    <div className={className?.container} >
      <Field name={name}>
        {(formikField: FieldProps) => (
          <div className="flex items-center">
            <input
              id={name}
              type={type}
              placeholder={placeholder}
              {...formikField.field}
              defaultChecked={formikField.field.value}
              className={className?.input}
            />
            <label htmlFor={name} className={className?.label}>
              {label}
            </label>
            <FormikErrorMessage name={name} cls={className?.error} />
          </div>
        )}
      </Field>

    </div>
  );
}

export default BooleanInput;