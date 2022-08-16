import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch';
import ProfileCard from './ProfileCard';
import "./ProfileSection.css";
import FollowersCard from './FollowersCard';

const ProfileSection = () => {
    return (
        <div className='profileSection'>
            <LogoSearch />
            <ProfileCard />
            <FollowersCard />
        </div>
    );
}

export default ProfileSection;