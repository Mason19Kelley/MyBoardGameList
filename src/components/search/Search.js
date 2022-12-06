import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Search = ({ setSearchText, clickButton }) => {
  
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      display="flex"
      justifyContent="flex-end"
      alignItems="flex-end"
    >
        <TextField id="filled-basic" label="Search Field" type="search" variant="filled" onChange={setSearchText}/>
        <Button variant="contained" size="large" sx={{height: 55}} onClick={clickButton}>Search</Button>
    </Box>
  );
}

export default Search;