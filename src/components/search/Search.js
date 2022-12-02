import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Search = () => {
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
        <TextField id="filled-basic" label="Search Field" type="search" variant="filled" />
        <Button variant="contained" size="large">Search</Button>
    </Box>
  );
}

export default Search;