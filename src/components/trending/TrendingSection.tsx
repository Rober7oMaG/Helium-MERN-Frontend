import React, { useState } from 'react';
import './TrendingSection.css';
import Home from '../../img/home.png';
import Notif from '../../img/noti.png';
import Comment from '../../img/comment.png';
import { UilSetting } from '@iconscout/react-unicons';
import TrendsCard from './TrendsCard';
import ShareModal from './ShareModal';

const TrendingSection = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    return (
        <div className='trendingSection'>
            <div className="navigationIcons">
                <img src={Home} alt="" />
                <UilSetting />
                <img src={Notif} alt="" />
                <img src={Comment} alt="" />
            </div>

            <TrendsCard />

            <button className="button t-button" onClick={() => setIsModalOpened(true)}>
                Share
            </button>
            
            <ShareModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
        </div>
    );
}

export default TrendingSection;