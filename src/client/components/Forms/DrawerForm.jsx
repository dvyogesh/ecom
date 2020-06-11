import React, { useEffect, useState, useRef } from 'react';
// import {DrawerContainer, GlobalStyle} from '../Drawer/drawerStyles';
import { createPortal } from 'react-dom';
import {
    DRAWER_DEFAULT_WIDTH,
    DRAWER_ANIMATE_TIME, DRAWER_DEFAULT_ANCHOR
} from '../Drawer/drawConstants';
import RenderInputTypes from './RenderInputTypes'
import { Button, DrawerHeader, UploadFile, DrawerContainer, GlobalStyle } from '..'
import {CloseOrClear} from '../Icons';
import DrawerFormContent from './drawerFormsStyles';




const DrawerForm = ({ ...props }) => {
    const { width = DRAWER_DEFAULT_WIDTH,
        anchor = DRAWER_DEFAULT_ANCHOR,
        onClose, showDrawer, root, children, setShowDrawer } = props;
    const {
        closeDrawer, inputFields = [], heading, handleForm,
        handleChange = () => { }, isReadOnly = false, getUploadedFile
    } = props
    const [openState, setOpenState] = useState(false);
    const [localHold, setLocalHold] = useState(false);
    const portalFocusRef = useRef(null);

    const portal = (children, root) => {
        if (typeof window === 'undefined') {
            return null;
        }

        if (!root) {
            return children
        }

        const rootElement = document.getElementById(root) || document.body;
        return createPortal(children, rootElement);
    }

    // const handleOnclick = () => {
    //     setShowDrawer(!showDrawer);
    // }

    const handleOnClose = () => {
        setOpenState(false);
        setShowDrawer(!showDrawer);
    }
    useEffect(() => {
        console.log(inputFields);
        if (showDrawer) {
            setOpenState(true);
            setTimeout(() => setLocalHold(showDrawer), DRAWER_ANIMATE_TIME)
        } else {
            setOpenState(false);
            setTimeout(() => setLocalHold(showDrawer), DRAWER_ANIMATE_TIME)
        }
    }, [showDrawer]);

    useEffect(() => {
        if (showDrawer) {
            setOpenState(localHold)
            if (portalFocusRef && portalFocusRef.current) {
                portalFocusRef.current.focus();
            }
        }

    }, [localHold, showDrawer]);

    return (
        <React.Fragment>
            <GlobalStyle isOpen={openState} />
            {
                localHold &&
                portal(
                    <DrawerContainer
                        width={width}
                        anchor={anchor}
                        showDrawer={showDrawer}
                        isOpen={openState}
                    >
                        <div className="drawer-back-drop" onClick={() => handleOnClose()}></div>
                        <div className="drawer-content">
                            <DrawerFormContent>
                                <DrawerHeader>
                                    <h3>Order Now</h3>
                                    <span  onClick={()=>handleOnClose()} className="pointer">
                                        <CloseOrClear width="24px" height="24px" color="#999"/>
                                    </span>
                                </DrawerHeader>
                                <div className="form-content">
                                    {
                                        inputFields && inputFields.length && inputFields.map((inputField, inputIndex) => (
                                            <RenderInputTypes
                                                key={`heading_${inputIndex + 1}`}
                                                handleChange={handleChange}
                                                isReadOnly={isReadOnly}
                                                getUploadedFile={getUploadedFile}
                                                inputField={inputField}
                                                inputIndex={inputIndex}
                                            />
                                        ))
                                    }

                                    {
                                        !isReadOnly && (
                                            <Button
                                                size="large"
                                                variant="outlined"
                                                color="secondary"
                                                onClick={handleForm}
                                                >
                                                Save
                                            </Button>
                                        )
                                    }
                                </div>


                            </DrawerFormContent>
                        </div>

                    </DrawerContainer>, root
                )
            }

        </React.Fragment>


    )
}

export default DrawerForm;