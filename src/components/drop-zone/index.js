import React, { useState, useCallback } from 'react'
import _ from 'lodash'
import { useDropzone } from 'react-dropzone'
import { useTranslation } from 'react-i18next'
import IconTrash from '../../assets/icons/seasongroup_icons_trash.svg'
import './drop-zone-style.scss'

function Dropzone({
  accept,
  setFieldValue,
  label,
  name,
}) {
  const [myFiles, setMyFiles] = useState([])
  const { t } = useTranslation()
  const onDrop = useCallback((acceptedFiles) => {
    setMyFiles([...myFiles, ...acceptedFiles])
    setFieldValue('files', [...myFiles, ...acceptedFiles])
  }, [myFiles])

  const {
    getRootProps, getInputProps, isDragActive,
  } = useDropzone({
    accept,
    onDrop,
  })

  const removeFile = (file) => {
    const newFiles = [...myFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyFiles(newFiles)
  }

  const files = myFiles.map((file) => (
    <li className="dropzone__list__item" key={file.path}>
      <span>{file.path} - {_.floor(file.size / 1000) } KB</span> <span className="dropzone__trash" onClick={() => removeFile(file)}><IconTrash width={14} fill={'#1B1E60'}/></span>
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
              {t('contact.fields.files.title')}
            </p>
          )}
          <span className="dropzone__message">{t('contact.fields.files.message')}</span>
          {/* <button type="button" onClick={open} className="btn">
            Click to select files
          </button> */}
        </div>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  )
}
export default Dropzone
