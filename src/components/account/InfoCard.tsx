import React, { useState } from 'react';
import './InfoCard.css';
import { UilPen } from '@iconscout/react-unicons';
import InfoModal from './InfoModal';

const InfoCard = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    return (
        <div className='infoCard'>
            <div className="infoHead">
                <h4>Your information</h4>
                <div>
                    <UilPen width='2rem' height='1.2rem' onClick={() => setIsModalOpened(true)} />
                    <InfoModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
                </div>
            </div>

            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>In Relationship</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>Los Cabos</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Apple</span>
            </div>

            <button className="button logout-button">Logout</button>
        </div>
    );
}

export default InfoCard;