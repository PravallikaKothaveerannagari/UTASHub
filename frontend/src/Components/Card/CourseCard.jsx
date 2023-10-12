import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, Card, Stack } from '@mui/material/'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css'
export default function CourseCard({ course }) {
    const navigate = useNavigate()

    const handleCardClick = () => {
        navigate('/course/' + course.cid)
    }
    return (
        <Card onClick={() => handleCardClick()} className='card cursor-pointer pb-3 pb-1'>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className='bottom-border'>
                    {course.cid}
                    <span className='float-right'>{course.files} files</span>
                </Typography>
                <Typography variant="h5" component="div" >
                    {course.name}
                </Typography>
                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                v{course.version}
                            </Typography> */}
                <br />
                <Stack className='float-right' direction={'row'} spacing={2}>
                    {/* <div> */}
                    <span>{course.level}</span>

                    {/* </div> */}
                    {/* <div> */}
                    <span className='version-card ' >v{course.version}</span>
                    {/* </div> */}
                </Stack>
            </CardContent>
        </Card>
    )
}
