import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Card.css'
export default function SubSpcialCard({ special }) {
    const navigate = useNavigate()

    const handleCardClick = () => {

        if (special.sp_code === "mj" || special.sp_code === "un" || special.sp_code === "cr") {
            navigate(`${special.id}/${5}`)
        } else {
            navigate(`${special.id}`)
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
