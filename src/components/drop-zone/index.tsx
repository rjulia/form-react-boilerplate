import { useState, useCallback, useEffect } from 'react'
import { FormikProps } from 'formik'
import _ from 'lodash'
import { useDropzone, Accept } from 'react-dropzone'
import { ReactComponent as MyIcon } from '../../assets/icons/seasongroup_icons_trash.svg'
import { IconSvg } from '../icon'
import { ObjectOfAnyType } from '../form/form/type'

interface File  extends Blob{
  path?: string
  size: number
  type: string
  name: string
  lastModified: number
  lastModifiedDate: Date
}
interface DropzoneProps {
  accept: Accept | undefined;
  formik: FormikProps<ObjectOfAnyType>;
  label?: string;
  name: string;
  className: { [
    key: string
  ] : string | undefined };
  
}



function Dropzone({
  accept,
  formik,
  label,
  name,
  className,
}: DropzoneProps) {
  const [myFiles, setMyFiles] = useState<File[] | null >(null)
  const onDrop = useCallback((acceptedFiles:any) => {
    setMyFiles((preState)=> {
      if (preState) {
        return [...[preState], ...acceptedFiles]
      }
      return acceptedFiles
    })
  }, [])
  
  
  useEffect(() => {
    formik.setFieldValue('files', myFiles)
  }, [myFiles])

  const {
    getRootProps, getInputProps, isDragActive,
  } = useDropzone({
    accept,
    onDrop,
  })

  const removeFile = (file: File) => {
    const newFiles = JSON.parse(JSON.stringify(myFiles))
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyFiles(newFiles)
  }

  const files = myFiles?.map((file:File) => (
    <li className="dropzone__list__item" key={file?.path}>
      <span>{file?.path} - {_.floor(file.size / 1000) } KB</span> 
      <span className="dropzone__trash" onClick={() => removeFile(file)}>
        <IconSvg width={14} fill={'#1B1E60'} svg={MyIcon} />
      </span>
        
    </li>
  ))

  return (
    <div className={className.container} >
      <label htmlFor={name} className={className.label}>
        {label}
      </label>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          {isDragActive ? (
            <p className="dropzone-content">
              Release to drop the files here
            </p>
          ) : (
            <p className="dropzone-content">
              Drag and drop some files here, or click to select files
            </p>
          )}
          <span className="dropzone__message">Drop your files here</span>
        </div>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  )
}
export default Dropzone
