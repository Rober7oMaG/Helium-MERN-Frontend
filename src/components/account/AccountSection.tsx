import React from 'react';
import LogoSearch from '../logoSearch/LogoSearch.jsx';
import './AccountSection.css';
import FollowersCard from '../profile/FollowersCard.jsx';
import InfoCard from './InfoCard.jsx';

const AccountSection = () => {
    return (
        <div className='accountSection'>
            <LogoSearch />
            <InfoCard />
            <FollowersCard />
        </div>
    );
}

export default AccountSection;