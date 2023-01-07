import React from 'react'
import MenuButton from './MenuButton'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchBox from './SearchBox'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Box } from '@mui/system';

const Appbar = () => {
  return (
    <nav style={{padding:20, display:"flex"}}>

    <MenuButton/>
    <SearchBox/>
    <Box marginLeft={54.8}>

    <ShoppingBagIcon

    sx={{
        height:50,
        width:50
    }}
     />
    </Box>
    <Box marginLeft={69} display={"flex"} justifyContent={"space-evenly"}>
        <button style={{borderRadius:100,padding:4,height:30,margin:10,backgroundColor: "#EAEAEA",borderColor:"transparent"}}><PermIdentityOutlinedIcon fontSize='small'/></button>
       <button style={{borderRadius:100,padding:4,height:30,margin:10,backgroundColor: "#EAEAEA",borderColor:"transparent"}}><FavoriteBorderOutlinedIcon fontSize='small'/></button>
        <button style={{borderRadius:100,padding:4,height:30,margin:10,backgroundColor: "#EAEAEA",borderColor:"transparent"}}><ShoppingCartOutlinedIcon fontSize='small'/></button>
    </Box>
    </nav>
  )
}

export default Appbar