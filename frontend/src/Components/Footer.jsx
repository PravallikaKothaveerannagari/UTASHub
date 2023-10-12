import React from 'react'
import { Stack } from '@mui/material'
export default function Footer() {
    return (
        <footer className="footer" style={{
            padding: '5px',
            position: 'fixed',
            bottom: '0',
            width: '100%',
            height: '40px'
        }}>
            <Stack direction={'r'} spacing={5} justifyContent={'center'}>
               

                <div className=''>
                    {/* Copyright */}
                    <p>&copy; 2023 Teletubbies Team  utashub@gmail.com </p>
                </div>
                
            </Stack>
        </footer>
    );
}