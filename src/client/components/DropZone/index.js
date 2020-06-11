import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import PropTypes, { oneOfType, string, object, array } from 'prop-types'
// for profile picture
const ImageUpload = ({ ...props }) => {
  const [warningMsg, setWarningMsg] = useState('');


  const onDrop = (accepted, rejected) => {
    console.log('ondrop');
    if (Object.keys(rejected).length !== 0) {
      const message = 'Please submit valid file type'
      setWarningMsg(message);
    } else {
      const { addFile } = props
      addFile(accepted)
      setWarningMsg('');
      console.log(accepted[0].preview)

      const blobPromise = new Promise((resolve, reject) => {
        const reader = new window.FileReader()
        reader.readAsDataURL(accepted[0])
        reader.onloadend = () => {
          const base64data = reader.result
          resolve(base64data)
        }
      })
      blobPromise.then(value => {
        //console.log(value);
      })
    }
  };

  const { files, dropzoneLabel } = props
  console.log(files)
  const thumbsContainer = {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    objectPosition: 'center'
  }

  const thumbs = (file) => <img style={thumbsContainer} src={file.preview} alt="profile" />

  const render =
    Object.keys(files).length !== 0 ? (
      <div className="thumbnails">
        {
          files.map((file, fileIndex) => (
            <aside key={`fileIndex_${fileIndex + 1}`}>
              {thumbs(file)}
            </aside>
          ))
        }
        <p className="hello">
          +
          {' '}
          {dropzoneLabel}
        </p>
      </div>
    ) : (
        <p className="hello">
          +
          {' '}
          {dropzoneLabel}
        </p>
      )
  return (
    <div>
      <p>{warningMsg}</p>

      <Dropzone
        style={{
          width: '150px',
          height: '150px',
          objectFit: 'cover',
          objectPosition: 'center',
          border: ' 1px dashed'
        }}
        multiple
        accept="image/*"
        onDrop={(accepted, rejected) => onDrop(accepted, rejected)}
      >
        {
          ({ isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
            // for drag and drop warning statement
            if (isDragReject) return 'Please submit a valid file'
            return render
          }
        }
      </Dropzone>
    </div>
  )

}

ImageUpload.propTypes = {
  files: oneOfType([string, object, array]).isRequired,
  dropzoneLabel: PropTypes.string,
  addFile: PropTypes.func.isRequired
}

ImageUpload.defaultProps = {
  dropzoneLabel: 'Click To Upload image/File'
}

export default ImageUpload
