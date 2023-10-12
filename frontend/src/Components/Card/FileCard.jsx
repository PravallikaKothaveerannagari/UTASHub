import React from 'react'
import { Grid, Card, Stack } from '@mui/material/'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';
import './Card.css'
import { Axios } from '../Axios';
import axios from 'axios';
export default function FileCard({ file }) {
    const navigate = useNavigate()

    // const downloadFile = (id) => {
    //     Axios.get('download-file/' + id, { responseType: 'blob', }).then((response) => {
    //         // Create a URL for the binary response
    //         const url = window.URL.createObjectURL(new Blob([response.data]));
    //         // Create a link and trigger a click event to initiate the download
    //         const link = document.createElement('a');
    //         link.href = url;
    //         link.setAttribute('download', file.name); // Replace with the actual filename
    //         document.body.appendChild(link);
    //         link.click();
    //     })
    // }

    const downloadFile = () => {
        // Extract the file ID from the Google Drive link
        // const fileId = link.split('/d/')[1].split('/')[0];

        // Construct the direct download link
        const downloadLink = `https://drive.google.com/uc?id=${file.link}`;

        // Create an invisible anchor element to trigger the download
        const anchor = document.createElement('a');
        anchor.href = downloadLink;
        anchor.target = '_blank';
        anchor.download = 'your-file-name.extension'; // Specify the desired file name and extension
        anchor.click();
    };

    return (
        <div className='custom-card file-card'>
            <div className='content pb-4'>

                <h2>{file.name}</h2>
                {/* <h3>{file.name}</h3> */}
                <p>{file.description}</p>
                <span className='float-left'>{file.type}</span>
                <Stack className='float-right' direction={'row'} spacing={3}>


                    <Button variant='secondary' color="dark" onClick={() => downloadFile()}><DownloadIcon /></Button>
                </Stack>


            </div>
        </div>
    )
   
}
