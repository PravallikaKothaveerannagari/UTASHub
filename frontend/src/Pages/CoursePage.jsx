import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar'
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';
// import { Grid } from '@mui/material'
// import { Grid } from '@material-ui/core';
import { Grid, Stack } from '@mui/material';
import { Axios } from '../Components/Axios'
import Footer from '../Components/Footer';
import Search from '../Components/SearchSection/SearchSection';
import ListViewCol from '../Components/ListViewCol/ListViewCol';
import Divider from '../Components/Divider/Divider'
import DirectoryTag from '../Components/DirectoryTag/DirectoryTag';


export default function CoursePage() {
  const [Course, setCourse] = useState([])
  const { cid } = useParams()
  const [searchQuery, setSearchQuery] = useState('');
  const [rows, setRows] = useState(Course);
  const get_Course = () => {
    Axios.get(`course-files/${cid}`).then(res => {
      setCourse(res.data)
      setRows(res.data)
      // console.log(res.data)
    }).catch(err => {
      console.log('error')
    })
  }
  const search = (query) => {
    // You can implement your own ranking logic here
    const rankedResults = Course.filter((row) => {
      // For simplicity, we'll just check if the name contains the query
      return row.name.toLowerCase().includes(query.toLowerCase()) || row.type.toLowerCase().includes(query.toLowerCase());
    });

    setRows(rankedResults);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Call the search function with the new query
    search(e.target.value);
  };

  const downloadFile = (id) => {
    Axios('download-file/' + id).then()
  }

  useEffect(() => {
    get_Course()
  }, [])
  return (
    <div className='main-div'>
      <NavBar />
      <Grid item md={12} xs={12} sm={12} container className='pt-4 pb-10' justifyContent='center' style={{ width: "100%" }} >
        <Search value={searchQuery} onChange={handleSearchChange} placeHolder={"Search.."} />
      </Grid>
      <Grid item xs={12} sn={12} md={12} direction='row' className='pl-5'>
        <Stack direction={'row'} className=''>
          <DirectoryTag />
          <p className='text-black mr-10'>{rows.length}</p>
        </Stack>
      </Grid>
      <Grid container spacing={2} justifyContent="center" className='list-container'>
        {/* <DirectoryTag dir={cid} />
        <Divider /> */}
        {rows.length ? <ListViewCol files={rows} action={downloadFile} /> :
          <>
            <br />
            <h6 className='text-black'>Sorry files well be added soon ):</h6>
          </>}
      </Grid>
      <br />
      <br />
      {/* <Footer /> */}
    </div>
  )
}




