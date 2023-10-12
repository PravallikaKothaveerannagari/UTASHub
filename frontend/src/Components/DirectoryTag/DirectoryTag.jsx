import React from 'react'
import './DirectoryStyle.css'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
export default function DirectoryTag() {
    const path = ['Home']

    const handleNavigate = () => {

    }
    return (
        <ul className='pl-5'>
            {/* <li className=''>Back</li> */}
            <div onClick={() => { window.history.back(); }} className='cursor-pointer'>
                <li>
                    <ArrowBackIosRoundedIcon />
                </li>
                <li>
                    Back
                </li>
            </div>

        </ul>

    )

}
