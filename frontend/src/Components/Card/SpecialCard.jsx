import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Card.css'
export default function SpecialCard({ special, all }) {
    const navigate = useNavigate()

    const handleCardClick = () => {
        if (all) {
            navigate('/all-courses/courses')
        } else {
            navigate('/specialization/' + special.id)
        }

    }
    return (
        <div className='custom-card' onClick={() => handleCardClick()}>
            <div className='content '>
                <h2>{special.name}</h2>
            </div>
        </div>
    )
}
