import React from 'react';
import Dropzone from 'react-dropzone-uploader';
import StyledDropZone from './dropZoneStyles';


const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }) => {
  return (
    <div>
      {previews}

      <div {...dropzoneProps}>
        {files.length < maxFiles && input}
      </div>

      {files.length > 0 && submitButton}
    </div>
  )
}

const DropzoneStyled = () => {
 const getUploadParams = () => ({ url: 'https://httpbin.org/post' });
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

  return (
    <StyledDropZone>
    <Dropzone
     //getUploadParams={getUploadParams}
      LayoutComponent={Layout}
      //onSubmit={handleSubmit}
      //classNames={{ inputLabelWithFiles: defaultClassNames.inputLabel }}
      inputContent="Drop Files (Custom Layout)"
      handleChangeStatus={handleChangeStatus}
    />
    </StyledDropZone>
  )
}

export default DropzoneStyled;