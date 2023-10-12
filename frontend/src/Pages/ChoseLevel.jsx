import React, { useState, useEffect } from 'react'
// import { Grid } from '@mui/material'
// import { Grid } from '@material-ui/core';
import { Grid } from '@mui/material';
import Loading from '../Components/Loading/Loading';
import LevelCard from '../Components/Card/LevelCard'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer'
import DirectoryTag from '../Components/DirectoryTag/DirectoryTag'
const ChoseLevel = () => {
  return (
    <div className='main-div pt-20 level'>
      <NavBar />
      <Grid container spacing={2} justifyContent="center" className='list-container pt-20'>
        <Grid item xs={12} md={12} sm={12}>
          <h2 className='text-center heading'>What is your level ?</h2>
        </Grid>
        <DirectoryTag/>
        <Grid item xs={12} md={6} sm={12}>
          <LevelCard level={"First Year"} id="1" />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <LevelCard level={"Second Year"} id="2" />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <LevelCard level={"Advanced Diploma"} id="3" />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <LevelCard level={"Bachelor"} id="4" />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <LevelCard level={"All"} id="5" />
        </Grid>
      </Grid>
      <br />
      <br />
      {/* <Footer /> */}
    </div>
  );
};

export default ChoseLevel;
