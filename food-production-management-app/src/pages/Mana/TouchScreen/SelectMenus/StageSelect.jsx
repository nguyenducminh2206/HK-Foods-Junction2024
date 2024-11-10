import { FormControl, MenuItem, Select } from "@mui/material"
import { useState } from "react"

const StagesSelect = () => {
  const [stage, setStage] = useState("")

  const handleChange = (e) => {
    setStage(e.target.value)
  }

  return (
    <>
      <FormControl>
        <Select
          id="stage-select"
          value={stage}
          onChange={handleChange}
          sx={{
            marginLeft: 9,
            width: 400,
            height: 40,
            background: "white",
            fontSize: 30,
            borderRadius: "15px",
          }}
        >
          <MenuItem value="PrePro">Preproduction</MenuItem>
          <MenuItem value="Cooking">Cooking</MenuItem>
          <MenuItem value="Storage">Storage</MenuItem>
          <MenuItem value="Packing">Package Area</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default StagesSelect
