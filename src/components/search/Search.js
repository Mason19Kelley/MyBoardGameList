import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';



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
        {/* <GameType getGameType={getGameType}/> */}
        <TextField id="filled-basic" label="Search Field" type="search" variant="filled" onChange={setSearchText}/>
        
        <Tooltip title="The search API is limited to 100 results. If you don't see what you're looking for, try to refine your search.">
          <Button variant="contained" size="large" sx={{height: 55}} onClick={clickButton}>Search</Button>
        </Tooltip>
    </Box>
  );
}

export default Search;