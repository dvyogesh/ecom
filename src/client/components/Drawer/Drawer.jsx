import React, {useEffect, useState, useRef} from 'react';
import {DrawerContainer, GlobalStyle} from './drawerStyles';
import {createPortal} from 'react-dom';
import {DRAWER_DEFAULT_WIDTH, 
    DRAWER_ANIMATE_TIME, DRAWER_DEFAULT_ANCHOR} from './drawConstants';




const Drawer = ({...props}) => {
    const {width=DRAWER_DEFAULT_WIDTH,
         anchor=DRAWER_DEFAULT_ANCHOR, 
         onClose, showDrawer, root, children, setShowDrawer} = props;
    const [openState, setOpenState] = useState(false);
    const [localHold, setLocalHold] = useState(false);
    const portalFocusRef = useRef(null);
    
    const portal = (children, root) =>{
        if(typeof window === 'undefined') {
            return null;
        }
    
        if(!root){
            return children
        }
    
        const rootElement = document.getElementById(root) || document.body;
        return createPortal(children, rootElement);
    }

    // const handleOnclick = () => {
    //     setShowDrawer(!showDrawer);
    // }

    const handleOnClose= () =>{
        setOpenState(false);
        setShowDrawer(!showDrawer);
    }
    useEffect(()=>{
        if(showDrawer){
            setOpenState(true);
            setTimeout(()=>setLocalHold(showDrawer),DRAWER_ANIMATE_TIME)
        } else {
            setOpenState(false);
            setTimeout(()=>setLocalHold(showDrawer),DRAWER_ANIMATE_TIME)
        }
    },[showDrawer]);

    useEffect(()=>{
        if(showDrawer){
            setOpenState(localHold)
            if(portalFocusRef && portalFocusRef.current){
                portalFocusRef.current.focus();
            }
        }

    },[localHold, showDrawer]);

    return(
        <React.Fragment>
        <GlobalStyle isOpen={openState}/>
        {
            localHold &&
            portal(
                
                <DrawerContainer
                    width={width}
                    anchor={anchor}
                    showDrawer={showDrawer}
                    isOpen={openState}
                >
                    
                    <div className="drawer-back-drop" onClick={()=>handleOnClose()}></div>
                    <div className="drawer-content">
                        <div className="portal-foucr" ref={portalFocusRef}></div>
                        {children}
                    </div>
                    
                </DrawerContainer>, root
            )
        }
        
        </React.Fragment>
        
        
    )
}

export default Drawer;