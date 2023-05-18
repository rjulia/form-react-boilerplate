import React, { useState, useCallback, SetStateAction } from 'react'
import _ from 'lodash'
import { useDropzone, Accept } from 'react-dropzone'
import IconTrash from '../../assets/icons/seasongroup_icons_trash.svg'
import './drop-zone-style.scss'

type File = {
  path?: string
  size: number
  type: string
  name: string
  lastModified: number
  lastModifiedDate: Date
}
interface DropzoneProps {
  accept: Accept;
  setFieldValue: (name: string, acceptedFiles: File[] | null | undefined) => Promise<void> | void;
  label: string;
  name: string;
}



function Dropzone({
  accept,
  setFieldValue,
  label,
  name,
}: DropzoneProps) {
  const [myFiles, setMyFiles] = useState<File[] | null>([])
  const onDrop = useCallback((acceptedFiles: Blob[]) => {
    setMyFiles((preState)=> [...preState, ...acceptedFiles])
    setFieldValue('files', [...myFiles, ...acceptedFiles])
  }, [myFiles, setFieldValue])

  const {
    getRootProps, getInputProps, isDragActive,
  } = useDropzone({
    accept,
    onDrop,
  })

  const removeFile = (file: File) => {
    const newFiles = [...myFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyFiles(newFiles)
  }

  const files = myFiles?.map((file:File) => (
    <li className="dropzone__list__item" key={file?.path}>
      <span>{file?.path} - {_.floor(file.size / 1000) } KB</span> <span className="dropzone__trash" onClick={() => removeFile(file)}><IconTrash width={14} fill={'#1B1E60'}/></span>
    </li>
  ))

  return (
    <div>
      <label htmlFor={name} style={{ display: 'block' }}>
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
