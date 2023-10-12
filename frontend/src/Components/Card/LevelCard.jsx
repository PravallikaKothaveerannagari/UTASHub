import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Card.css'
export default function LevelCard({ level, id }) {
    const navigate = useNavigate()

    const handleCardClick = () => {
        navigate(`${id}`)
    }
    return (
        <div className='custom-card' onClick={() => handleCardClick()}>
            <div className='content '>
                <h2>{level}</h2>
            </div>
        </div>
    )
}
