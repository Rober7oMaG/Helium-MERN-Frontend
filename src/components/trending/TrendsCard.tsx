import React from 'react';
import { trendsData } from '../../data/trendsData';
import './TrendsCard.css';

const TrendsCard = () => {
    return (
        <div className='trendsCard'>
            <h3>Trends for you</h3>

            {trendsData.map((trend) => {
                return (
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                );
            })}
        </div>
    );
}

export default TrendsCard;