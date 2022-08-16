import React from 'react';
import { postsData } from '../../data/postsData';
import Post from './Post';
import './Posts.css';

const Posts = () => {
    return (
        <div className='posts'>
            {postsData.map((post, id) => {
                return <Post key={id} data={post} />
            })}
        </div>
    );
}

export default Posts;