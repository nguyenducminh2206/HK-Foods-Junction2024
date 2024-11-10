import React from "react"
import { TextField, InputAdornment, Button } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const SearchBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TextField
        variant="outlined"
        placeholder="Enter ID number + batch number"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        style={{ marginRight: '8px', width: 400, background: "white" }}
      />

      <Button variant="contained" color="primary" sx={{height: 57, width: 200, background: "#0C2D53", borderRadius: 30}}>
        Search
      </Button>
    </div>
  )
}

export default SearchBar
