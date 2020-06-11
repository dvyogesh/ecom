import React, { useState } from 'react'
import { CloudUpload } from '../../../../components/Icons';
import { cloneDeep } from 'lodash'
// import DrawerForm from '../../../../components/Forms/DrawerForm'
import { Button, DrawerForm, DrawerHeader } from '../../../../components';
import PRESCRIPTION_CONSTANTS from './helperUploadPrescription'

const UploadPrescription = ({ ...props }) => {


  const [inputFields, setInputFields] = useState(cloneDeep(PRESCRIPTION_CONSTANTS.orderNowForm))
  const [showDrawer, setShowDrawer] = useState(false);

  const uploadPrescriptioneBtnClick = () => setShowDrawer(!showDrawer)

  const handleClose = () => {
    setShowDrawer(false);
    setInputFields(cloneDeep(PRESCRIPTION_CONSTANTS.orderNowForm))
  }

  const handleSubmit = () => {

  }

  const handleChange = (index) => event => {
    inputFields[index].value = event.target.value
    setInputFields([...inputFields])
  };

  const handleForm = () => {

  }

  const getUploadedFile = (files, index) => {
    inputFields[index].value = files.map(
      file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    )
    setInputFields([...inputFields])
  }

  return (
    <div className="upload-prescription text-center">
      <p role="presentation" onClick={uploadPrescriptioneBtnClick}>
        Upload Prescription
          <CloudUpload width="24px" height="24px" className="prescription-upload-icon" />
      </p>

      <DrawerForm
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        root="body"
        inputFields={inputFields}
        getUploadedFile={getUploadedFile}
        handleForm={handleForm}
        handleChange={handleChange}
      >
        <DrawerHeader>
          <p>cool</p>
          <Button onClick={() => uploadPrescriptioneBtnClick()}>clsose </Button>
        </DrawerHeader>
        <h2>cool</h2>
      </DrawerForm>
    </div>
  )

}

export default UploadPrescription
