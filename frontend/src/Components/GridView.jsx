import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid({ data }) {
    return (

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/* {Array.from(Array(data.length)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item>xs=2</Item>
                </Grid>
            ))} */}
            {data.map(course => (
                <Grid item xs={12} sm={6} md={4} key={course.id}>
                    <Item>{course.name}</Item>
                </Grid>
            ))}
        </Grid>

    );
}