import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/system'
import React from 'react'

const SearchBox = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        padding:1,
        borderRadius: 100,
        backgroundColor: "#EAEAEA",
        '&:hover': {
          backgroundColor: "#EAEAEA",
        },
        marginRight: 2,
        marginLeft: 0,
        width: '30',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '40%',
          [theme.breakpoints.up('md')]: {
            width: '65px',
          },
        },
      }));
  return (
    <Box marginTop={1}>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    </Box>
  )
}

export default SearchBox 