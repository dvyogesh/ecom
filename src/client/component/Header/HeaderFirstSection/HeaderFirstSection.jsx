import React from 'react'
//import {Grid} from '@material-ui/core'
//import {a} from 'react-router-dom'
import { Phone } from '../../../components/Icons';
import FirstHeaderSection from './headerFirstSectionStyles';

const HeaderFirstSection = () => {
    return (
      <FirstHeaderSection className="header-first-section">
          <div className="text-left header-fist-left">
            <a to="#">Download the App</a>
            <a to="#">0ffers</a>
          </div>
          <div className="text-right header-fist-right">
            <ul>
              <li><a to="#">List your Practice  </a></li>
              <li><a to="#"> Need Help?   </a></li>
              <li>
                <a to="#">
                 <Phone width="16px" height="16px" color="rgb(255, 255, 255)" className="phon-icon" />
                  1800 208 5454
                </a>
              </li>
            </ul>
          </div>
      </FirstHeaderSection>
    )
}

export default HeaderFirstSection
