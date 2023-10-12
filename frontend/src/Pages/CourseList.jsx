import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../Components/NavBar'
// import Grid from '@mui/material/Grid'
import { Grid } from '@material-ui/core'


import Search from '../Components/SearchSection/SearchSection'
import ListView from '../Components/ListViewGrid/ListView'

import DirectoryTag from '../Components/DirectoryTag/DirectoryTag'
import Footer from '../Components/Footer'
import { Stack } from '@mui/material'
// import axios from 'axios'
import { Axios } from '../Components/Axios'

export default function CourseList() {
  const { level, sub_id, all } = useParams()
  const [searchQuery, setSearchQuery] = useState('');
  const [Courses, setCourses] = useState([])
  const [rows, setRows] = useState(Courses);

  const search = (query) => {
    // You can implement your own ranking logic here
    const rankedResults = Courses.filter((row) => {
      // For simplicity, we'll just check if the name contains the query
      return row.name.toLowerCase().includes(query.toLowerCase()) || row.cid.toLowerCase().includes(query.toLowerCase());
    });

    setRows(rankedResults);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Call the search function with the new query
    search(e.target.value);
  };

  const getCourses = () => {
    Axios.get(`course-list/${sub_id}/${level}`).then(res => {
      setCourses(res.data)
      setRows(res.data)
    }).catch(err => {
      console.log('error')
    })
  }
  const getAllCourses = () => {
    Axios.get(`course-list/`).then(res => {
      setCourses(res.data)
      setRows(res.data)
    }).catch(err => {
      console.log('error')
    })
  }

  useEffect(() => {
    if (all) {
      getAllCourses()
    } else {
      getCourses()
    }
  }, [])

  return (
    <div className='main-div'>

      <NavBar />
      <Grid item md={12} xs={12} sm={12} container className='pt-4 pb-10' justifyContent='center' style={{ width: "100%" }} >
        <Search value={searchQuery} onChange={handleSearchChange} placeHolder={"course id, course name ..."} />
      </Grid>
      <Grid container spacing={2} justifyContent="center" className='list-container'>
        <Grid item xs={12} sn={12} md={12} direction='row'>
          <Stack direction={'row'}>
            <DirectoryTag />
            <p className='text-black mr-3'>{rows.length}</p>
          </Stack>
        </Grid>
        {Courses ? <><ListView data={rows.slice(0, 30)} />{rows.length >= 30 && <p className='text-black'>...Search to get more</p>}</>
          : <><br /><h6>Sorry nd courses for this level yet</h6></>}
      </Grid>
      <br />
      <br />

      {/* <Footer /> */}
    </div>

  )
}
