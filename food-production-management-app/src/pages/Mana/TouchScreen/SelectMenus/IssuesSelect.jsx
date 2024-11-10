import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react"

const IssuesSelect = () => {
  const [issue, setIssue] = useState("")

  const handleChange = (e) => {
    setIssue(e.target.value)
  }

  return (
    <>
      <FormControl>
        <Select
          id="issue-select"
          value={issue}
          onChange={handleChange}
          sx={{
            width: 400,
            height: 40,
            marginLeft: 12,
            background: "white",
            fontSize: 35,
            borderRadius: "15px",
          }}
        >
          <MenuItem value="EquipmentMalfunction">
            Equipment Malfunction
          </MenuItem>
          <MenuItem value="DefectiveProduct">Defective Product</MenuItem>
          <MenuItem value="HumanError">Human Error</MenuItem>
          <MenuItem value="MaterialDelay">Material Delay</MenuItem>
          <MenuItem value="Stockout">Out of Stock</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default IssuesSelect
