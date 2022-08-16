import React from 'react';
import './Post.css';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Like from '../../img/like.png';
import NoLike from '../../img/nolike.png';
import { IPost } from '../../interfaces';

interface Props {
    data: IPost
}

const Post: React.FC<Props> = ({data}) => {
    return (
        <div className='post'>
            <img src={data.img} alt="" />

            <div className="postActions">
                <img src={data.liked ? Like : NoLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>

            <span style={{color: 'var(--gray)', fontSize: '12px'}}>{data.likes} likes</span>

            <div className="details">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    )
}

export default Post;