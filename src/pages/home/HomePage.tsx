import React from 'react';
import PostsSection from '../../components/posts/PostsSection';
import ProfileSection from '../../components/profile/ProfileSection';
import TrendingSection from '../../components/trending/TrendingSection';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className='homePage'>
            <ProfileSection />
            <PostsSection />
            <TrendingSection />
        </div>
    );
}

export default HomePage;