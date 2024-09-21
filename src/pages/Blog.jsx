import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../Components/NavBar';

const Blog = () => {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <h1 className='text-primary mt-3'>Blog</h1>
            </div>
        </div>
    )
}

Blog.propTypes = {

}

export default Blog;
