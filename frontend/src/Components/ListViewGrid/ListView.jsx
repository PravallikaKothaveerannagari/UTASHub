import React from 'react'
import { Grid } from '@mui/material/'
import Card from '../Card/Card';
import CourseCard from '../Card/CourseCard';
export default function ListView({ data }) {


    return (
        <>
            {data.map(course => (
                <Grid item md={3} xs={10} sm={6}>
                    {/* <CourseCard course={course} /> */}
                    <Card course={course}/>
                </Grid>
            ))}
        </>
    )
}
