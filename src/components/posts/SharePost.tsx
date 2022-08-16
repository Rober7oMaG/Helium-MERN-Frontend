import React, { useState, useRef, ChangeEvent } from 'react';
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes } from '@iconscout/react-unicons';
import ProfileImage from '../../img/profileImg.jpg';
import './SharePost.css';

const SharePost = () => {
    const [image, setImage] = useState<{image: string} | null>(null);
    const imageRef = useRef<HTMLInputElement | null>(null);

    const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img)
            });
        }
    }

    return (
        <div className='sharePost'>
            <img src={ProfileImage} alt="" />
            <div>
                <input type="text" placeholder="What are you thinking?" />
                <div className="postOptions">
                    <div className="option" style={{color: 'var(--photo)'}} onClick={() => imageRef.current!.click()}>
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{color: 'var(--video)'}}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option" style={{color: 'var(--location)'}}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option" style={{color: 'var(--schedule)'}}>
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className="button ps-button">
                        Share
                    </button>

                    <div style={{display: 'none'}}>
                        <input type="file" name='myImage' ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>

                {image && (
                    <div className="imagePreview">
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={image.image} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default SharePost;