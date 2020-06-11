import styled from 'styled-components';

const StyledDropZone = styled.div`
    .dzu-dropzone {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: 120px;
        overflow: scroll;
        margin: 0 auto;
        position: relative;
        box-sizing: border-box;
        transition: all .15s linear;
        border: 2px solid #d9d9d9;
        border-radius: 4px;
    }
    
    .dzu-dropzoneActive {
        background-color: #DEEBFF;
        border-color: #2484FF;
    }
    
    .dzu-input {
        display: none;
    }
    
    .dzu-inputLabel {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        font-family: 'Helvetica', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #2484FF;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        cursor: pointer;
    }
    
    .dzu-inputLabelWithFiles {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-start;
        padding: 8px 14px;
        background-color: #E6E6E6;
        color: #2484FF;
        border: none;
        font-family: 'Helvetica', sans-serif;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        margin-top: 20px;
        margin-left: 3%;
        min-height: 16px;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        cursor: pointer;
    }
    
    .dzu-previewContainer {
        padding: 40px 3%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        min-height: 60px;
        z-index: 1;
        border-bottom: 1px solid #ECECEC;
        box-sizing: border-box;
    }
    
    .dzu-previewStatusContainer {
        display: flex;
        align-items: center;
    }
    
    .dzu-previewFileName {
        font-family: 'Helvetica', sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: #333333;
    }
    
    .dzu-previewImage {
        width: auto;
        max-height: 40px;
        max-width: 140px;
        border-radius: 4px;
    }
    
    .dzu-previewButton {
        background-size: 14px 14px;
        background-position: center;
        background-repeat: no-repeat;
        width: 14px;
        height: 14px;
        cursor: pointer;
        opacity: 0.9;
        margin: 0 0 2px 10px;
    }
    
    .dzu-submitButtonContainer {
        margin: 24px 0;
        z-index: 1;
    }
    
    .dzu-submitButton {
        padding: 8px 14px;
        background-color: #2484FF;
        border: none;
        border-radius: 4px;
        font-family: 'Helvetica', sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: #FFF;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        cursor: pointer;
    }
    
    .dzu-submitButton:disabled {
        background-color: #E6E6E6;
        color: #333333;
    }
`;

export default StyledDropZone;