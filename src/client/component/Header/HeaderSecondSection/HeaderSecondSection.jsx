import React from 'react';
// import {div} from '@material-ui/core'
// import {a} from 'react-router-dom'
import Search from '../Search/Search';
import SecondHeaderSection from './headerSecondSectionStyles';
import logo from './logo';

const HeaderSecondSection = () => {
    return(
      <SecondHeaderSection className="header-second-section">
          <div className="text-left header-fist-left">
            <a to="#">
              <img
                alt="log"
                src={logo}
              />
            </a>
          </div>
          <div className="text-right header-second-mid">
            <Search />
          </div>
          <div className="text-right header-second-right">
            <ul>
              <li><a to="#">Login /</a></li>
              <li><a to="#"> Sign Up   </a></li>
            </ul>
          </div>
      </SecondHeaderSection>
    )
}

export default HeaderSecondSection
