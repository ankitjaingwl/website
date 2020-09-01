import React from 'react';
import homeimg from '../src/images/home.jpg';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () => {
    return (
        <>
          <Common name="Grow your Business with"
          imgsrc={homeimg}
            visit='/service'
            btname="Get Started"
          />
        </>
    );
};

export default Home;
