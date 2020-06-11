import styled from 'styled-components';
const inputBorderColor = `rgba(0, 0, 0, 0.23)`

const InputWrapper = styled.div`
.floating-form {
    width:320px;
  }
  
  /****  floating-Lable style start ****/
  .floating-label { 
    position:relative; 
    margin-bottom:20px; 
  }
  .floating-input , .floating-select {
    font-size:14px;
    padding:4px 4px;
    display:block;
    width:100%;
    height:30px;
    background-color: transparent;
    border:none;
    border-bottom:1px solid ${inputBorderColor};
    ${(props) => props.variant === 'outlined' &&
    `
        border:1px solid ${inputBorderColor};
        border-radius: 4px;
        height: 40px;
    `
    }
  }
  
  .floating-input:focus , .floating-select:focus {
       outline:none;
       border-bottom:2px solid #5264AE; 
       ${(props) => props.variant === 'outlined' &&`
       border:2px solid #5264AE; 
        `
        }
  }
  
  label {
    color:#999; 
    font-size:14px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:5px;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
    ${(props) => props.variant === 'outlined' &&
    `
    top: 11px;
    `
    }
    
  }
  
  .floating-input:focus ~ label, .floating-input:not(:placeholder-shown) ~ label {
    top:-18px;
    font-size:14px;
    color:#5264AE;
    ${(props) => props.variant === 'outlined' &&
    `
        top: -8px;
        background-color: #fff;
        padding: 0px 5px;
        left: 10px;
    `
    }
  }
  
  .floating-select:focus ~ label , .floating-select:not([value=""]):valid ~ label {
    top:-18px;
    font-size:14px;
    color:#5264AE;
  }
  
  /* active state */
  .floating-input:focus ~ .bar:before, .floating-input:focus ~ .bar:after, .floating-select:focus ~ .bar:before, .floating-select:focus ~ .bar:after {
    width:50%;
  }
  
  *, *:before, *:after {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }
  
  .floating-textarea {
     min-height: 30px;
     max-height: 260px; 
     overflow:hidden;
    overflow-x: hidden; 
  }
  
  /* highlighter 
  .highlight {
    position:absolute;
    height:50%; 
    width:100%; 
    top:15%; 
    left:0;
    pointer-events:none;
    opacity:0.5;
  }*/
  
  /* active state */
  .floating-input:focus ~ .highlight , .floating-select:focus ~ .highlight {
    -webkit-animation:inputHighlighter 0.3s ease;
    -moz-animation:inputHighlighter 0.3s ease;
    animation:inputHighlighter 0.3s ease;
  }
  
  /* animation */
  @-webkit-keyframes inputHighlighter {
      from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
  }
  @-moz-keyframes inputHighlighter {
      from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
  }
  @keyframes inputHighlighter {
      from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
  }
  
  /****  floating-Lable style end ****/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /***   Body style start  ***/
  
  html {
      font-family: "Helvetica Neue", Helvetica, "Noto Sans", sans-serif, Arial, sans-serif;
      font-size: 12px;
      line-height: 1.42857143;
      color: #949494;
      background-color: #ffffff;
  }
  /***   Body style end  ***/
  
  
  /***   daniel - Fork me friend - style   ***/
  .floating-credit { position:fixed; bottom:10px;right:10px; color:#aaa; font-size:13px;font-family:arial,sans-serif; }
  .floating-credit a { text-decoration:none; color:#000000; font-weight:bold; }
  .floating-credit a:hover { border-bottom:1px dotted #f8f8f8; }
  .floating-heading { position:fixed; color:#aaa; font-size:20px; font-family:arial,sans-serif; }
  /***  daniel - Fork me friend - style  ***/
`;

export default InputWrapper;