import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { Axios } from '../Components/Axios'
import Loading from '../Components/Loading/Loading'
import SpecialCard from '../Components/Card/SpecialCard'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
export default function Specialization() {
    const [MajorSpecial, setMajorSpecial] = useState([])
    const [Msg, setMsg] = useState(false)
    const getMajorSpecial = () => {
        // setMsg("loading")
        Axios.get('major-special/')
            .then(res => {
                setMajorSpecial(res.data)
                setMsg(true)
                console.log(res.data)
            }).catch(err => { setMsg("err") })
    }

    useEffect(() => {
        // if(special.name ==="Major Reqirments")
        getMajorSpecial()
    }, [])

    // return <Loading />
    return (
        <div className='main-div pt-20 level'>
            <NavBar />
            <Grid container spacing={2} className='list-container pt-20'>
                <Grid item xs={12} md={12} sm={12} >
                    <h2 className='text-center heading'>What is Your Specialization</h2>
                </Grid>
                {Msg === true ? (<>


                    {MajorSpecial.map(special => (
                        <Grid item xs={12} md={6} sm={12}>
                            <SpecialCard special={special} />
                        </Grid>
                    ))}
                    <Grid item xs={12} md={6} sm={12}>
                        <SpecialCard special={{ name: "Search In All Courses" }} all={true} />
                    </Grid>

                </>
                ) : Msg === false ? (
                    <Loading />
                ) : <>Sorry no Specialization found</>}

            </Grid>
            <br />
            <br />
            {/* <Footer /> */}
        </div>
    )
}
