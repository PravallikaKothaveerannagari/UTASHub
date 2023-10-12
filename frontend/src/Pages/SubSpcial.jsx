import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import { Axios } from '../Components/Axios'
import Loading from '../Components/Loading/Loading'
import SpecialCard from '../Components/Card/SpecialCard'
import NavBar from '../Components/NavBar'
import SubSpcialCard from '../Components/Card/SubSpcialCard'
import Footer from '../Components/Footer'
import DirectoryTag from '../Components/DirectoryTag/DirectoryTag'
export default function SubSpcial() {
    const { major_id } = useParams()
    const [SubSpecial, setSubSpecial] = useState([])
    const [Msg, setMsg] = useState(false)
    const getMajorSpecial = () => {
        // setMsg("loading")
        Axios.get('sub-special/' + major_id)
            .then(res => {
                setSubSpecial(res.data)
                setMsg(true)
                // console.log(res.data)
            }).catch(err => { setMsg("err") })
    }

    useEffect(() => {
        getMajorSpecial()
    }, [])

    // return <Loading />
    return (
        <div className='main-div pt-20 level'>
            <NavBar />
            <Grid container spacing={2} className='list-container pt-20 mb-5'>
                <Grid item xs={12} md={12} sm={12}>
                    <h2 className='text-center heading'>Choose a Subdivision</h2>
                </Grid>
                <DirectoryTag />
                {Msg === true ? (<>


                    {SubSpecial.map(special => (
                        <Grid item xs={12} md={6} sm={12}>
                            <SubSpcialCard special={special} />
                        </Grid>
                    ))}


                </>
                ) : Msg === false ? (
                    <Loading />
                ) : <Grid item xs={12} md={12} sm={12} >
                    <h6 className='text-center'>No Specialization Found</h6>
                </Grid>}

            </Grid>
            <br />
            <br />
            {/* <Footer /> */}
        </div>
    )
}
