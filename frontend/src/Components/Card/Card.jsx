import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Card.css'
import { Stack } from '@mui/material'
export default function Card({ course }) {
    const navigate = useNavigate()
    const levels = {
        "first_year": "First Year",
        "second_year": "Second Year",
        "advanced": "Advanced",
        "bachelor": "Bachelor",
        "other": "Other",
    }
    const handleCardClick = () => {
        navigate('/course/' + course.cid)
    }
    return (
        <div className='custom-card' onClick={() => handleCardClick()}>
            <div className='content pb-4'>

                <h2>{course.cid}</h2>
                <h6>{course.name}</h6>
                <span className='float-left'>{levels[course.level]}</span>
                {/* <span className='float-right'>v{course.version}</span> */}
            </div>
        </div>
    )
}
