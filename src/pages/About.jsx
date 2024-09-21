import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../Components/NavBar';

const About = () => {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <h1 className='text-primary  mt-3'>About</h1>
            </div>
        </div>
    )
}

About.propTypes = {

}

export default About;
