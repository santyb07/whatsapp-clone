import React from 'react'

import {AppBar, Toolbar, styled, Box} from "@mui/material"

import LoginDialog from './account/LoginDialog'

const Messenger = () => {

    const Header = styled(AppBar)`
    height:220px;
    background-color: #00bfa5;
    box-shadow: none;
    `
    const Component = styled(Box)`
    height:100vh;
    background:#DCDCDC;
    `
  return (
    <Component>

    <Header>
        <Toolbar>

        </Toolbar>
    </Header>
    <LoginDialog/>
    </Component>
  )
}

export default Messenger