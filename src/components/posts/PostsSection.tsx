import React from 'react';
import Posts from './Posts';
import './PostsSection.css';
import SharePost from './SharePost';

const PostsSection = () => {
    return (
        <div className='postsSection'>
            <SharePost />
            <Posts />
        </div>
    );
}

export default PostsSection;