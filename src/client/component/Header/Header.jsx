import React, {useState, useEffect} from 'react';
import {HeaderContainer, NotificationWrapper, SectionHeader} from './headerStyles';
import {Button,Drawer, DrawerHeader, windowDimensions} from '../../components';
import HeaderSecondSection from './HeaderSecondSection/HeaderSecondSection';
import HeaderFirstSection from './HeaderFirstSection/HeaderFirstSection';
const window = (typeof self === 'object' && self.self === self && self) || (typeof global === 'object' && global.global === global && global) || this;

const Header = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    //const [windowWidth, setWindowWidth] = useState(windowDimensions().width)
    const {width} = windowDimensions();
    console.log(width);

    const handleOpenClose = (prp) =>{
        setShowDrawer(!showDrawer)
    }
    
    
    return(
        <HeaderContainer className="header-main">
            <NotificationWrapper className="notification-wrapper">
                NotificationWrapper
            </NotificationWrapper>
            

            <SectionHeader className="section-header">
               
            {width > 777 && <HeaderFirstSection width={width} />}
           
            <HeaderSecondSection />
            </SectionHeader>
            <div className="section-header-wrapper">
            <Button onClick={()=>handleOpenClose()}>click</Button>
    
                <Drawer
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    root="body"
                >
                    <DrawerHeader>
                        <p>cool</p>
                        <Button onClick={handleOpenClose}>clsose </Button> 
                    </DrawerHeader>
                    <h2>cool</h2>
                </Drawer>
                    
            </div>
        </HeaderContainer>
)
}

export default Header;