import styled,{createGlobalStyle} from 'styled-components';
import { DRAWER_ANIMATE_TIME } from './drawConstants';


const GlobalStyle = createGlobalStyle`
body{
    overflow: ${({isOpen})=> (isOpen ? `hidden`: `auto`)};
}
`;

const DrawerContainer = styled.div`
${({...props}) => {
    const {anchor, width, isOpen} = props;
    const direction = anchor === 'left' ? `-` : ''
    return(
       ` position: relative;
        
        *{box-sizing: border-box;}
        .drawer-content {    
           
            width:${width}px;
            ${!isOpen===true  ?
                `transform: translateX(${direction}100%);transition: transform ${DRAWER_ANIMATE_TIME}ms;`:
                `transform: translateX(0%);transition: transform ${DRAWER_ANIMATE_TIME}ms;`
            }
            ${anchor}:0;
            top: 0;
            flex: 1 0 auto;
            height: 100%;
            display: flex;
            outline: 0;
            z-index: 1200;
            position: fixed;
            overflow-y: auto;
            flex-direction: column;
            box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12);
            background-color: #fff;
            max-width: 100%;
        }
        .drawer-back-drop{
            
            opacity: 1;
            transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            position: fixed;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1;
            -webkit-tap-highlight-color: transparent;
        }
        `
    )}

} 
`;

const DrawerHeader = styled.div`
    min-height:64px;
    border-bottom: 1px solid #e6e7e8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
`;



export{
    GlobalStyle,
    DrawerContainer,
    DrawerHeader
};

// ${!isOpen===true  ?
//     `transform: translateX(100%);transition: transform 300ms;`:
//     `transform: translateX(0%);transition: transform 300ms;`
// }