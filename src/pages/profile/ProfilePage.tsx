import React from 'react';
import AccountSection from '../../components/account/AccountSection';
import PostsSection from '../../components/posts/PostsSection';
import ProfileCard from '../../components/profile/ProfileCard';
import TrendingSection from '../../components/trending/TrendingSection';
import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <div className="profilePage">
            <AccountSection />

            <div className="profile-center">
                <ProfileCard />
                <PostsSection />
            </div>

            <TrendingSection />
        </div>
    );
}

export default ProfilePage;