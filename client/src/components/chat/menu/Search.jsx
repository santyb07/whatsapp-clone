import {Search as SearchIcon} from '@mui/icons-material'
import { InputBase, Box, styled } from '@mui/material';

const Component = styled(Box)`
background: #fff;
height: 45px;
border-bottom: 1px solid #F2F2F2;
display: flex;
align-items: center;
`;

const Wrapper =styled(Box)`
background-color: #f0f2f5;
position: relative;
margin: 0 13px;
width: 100%;
border-radius: 10px;
`;

const InputField = styled(InputBase)`
width: 100%;
padding: 16px;
height: 15px;
padding-left: 65px;
font-size: 14px;

`
const Icon = styled(Box)`
position: absolute;
height: 100%;
padding: 6px 10px;
color: #919191;
`
const Search = () =>{
    return (
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon fontSize="small"/>
                </Icon>
                <InputField 
                placeholder='Search or start new chat'   />
            </Wrapper>
        </Component>
    )
}

export default Search;