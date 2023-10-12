import React from 'react'
import { Grid } from '@mui/material'
import FileCard from '../Card/FileCard'
export default function ListViewCol({files}) {
    
    return (
        <>
            {files.map(file => (
                <Grid item md={12} xs={12} sm={12} >
                    <FileCard file={file}/>
                </Grid>
            ))}
        </>
    )
}
