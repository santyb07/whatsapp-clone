import { Box, styled } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import {Chat as MessageIcon} from "@mui/icons-material"
import {AccountContext} from "../../../context/AccountProvider"

//components
import HeaderMenu from './HeaderMenu'

const Component = styled(Box)`
height:44px;
background:#ededed;
padding: 8px 16px;
display:flex;
align-items:center;
`
const Wrapper = styled(Box)`
margin-left:auto;
& > * {
  margin-left: 2px;
  padding:8px;
  color:#000;
};
& :first-child{
  font-size:22px;
  margin-right:8px;
  margin-top: 3px;
}
`
const Image = styled('img')({
  width:40,
  height:40,
  borderRadius:'50%',
})
const Header = () => {

  const {account}=useContext(AccountContext)
  
  return (
    <Component>
      <Image src={account.picture} alt='profile'/>
      <Wrapper>
        <MessageIcon/>
        <HeaderMenu/>
      </Wrapper>
    </Component>
  )
}

export default Header