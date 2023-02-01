import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        className="search"
        label="Name"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type= "text"
      />
      <Button
        onClick={callSearchFunction}
        type="submit" value="SEARCH"
        variant="outlined"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}> Search
      </Button>
    </Box>
  );
}

export default Search;