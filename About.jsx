import React from 'react';
import aboutimg from '../src/images/about.jpg';
import { NavLink } from 'react-router-dom';
import Common from './Common';
const About = () => {
    return (
        <>
            <Common name="Welecome to About Page"
            imgsrc={aboutimg}
            visit='/contact'
            btname="Contact No."
          />
        </>
    );
};

export default About;
