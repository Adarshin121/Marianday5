import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h3' >EmpApp</Typography>

                <Link to='/'>
                    <Button variant='contained'
                    style={{ marginTop: "3%", textAlign: "center" }}>Add</Button>
                </Link>

                <Link to='/add'>
                    <Button variant='contained'>View</Button>
                </Link>
            </Toolbar>
        </AppBar>
        <br /><br /><br />
    </div>
  )
}

export default Navbar