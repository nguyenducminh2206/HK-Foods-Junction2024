import { Button, Menu, MenuItem } from "@mui/material"
import { useState } from "react"

const EmployeeButtonSet = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [selectedLanguage, setSelectedLanguage] = useState("Languages")

  const handleMenuItemClick = (language) => {
    setSelectedLanguage(language)
    handleClose()
  }

  return (
    <>
      <Button
        variant="contained"
        sx={{
          marginBottom: 8,
          background: "#BFD3EB",
          color: "#0C2D53",
          width: 240,
          height: 50,
          borderRadius: 10,
        }}
        onClick={() => (window.location.href = "/employee/training")}
      >
        Training Materials
      </Button>
      <Button
        variant="contained"
        sx={{
          marginBottom: 8,
          background: "#BFD3EB",
          color: "#0C2D53",
          width: 240,
          height: 50,
          borderRadius: 10,
        }}
        onClick={() => (window.location.href = "/employee/status")}
      >
        Work Status
      </Button>
      <Button
        variant="contained"
        sx={{
          marginBottom: 8,
          background: "#BFD3EB",
          color: "#0C2D53",
          width: 240,
          height: 50,
          borderRadius: 10,
        }}
        onClick={handleClick}
      >
        {selectedLanguage}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          style: {
            width: anchorEl ? anchorEl.clientWidth : undefined,
          },
        }}
      >
        <MenuItem
          onClick={() => handleMenuItemClick("English")}
          sx={{ textAlign: "center" }}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("Finnish")}
          sx={{ textAlign: "center" }}
        >
          Finnish
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("Thai")}
          sx={{ textAlign: "center" }}
        >
          Thai
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("Vietnamese")}
          sx={{ textAlign: "center" }}
        >
          Vietnamese
        </MenuItem>
      </Menu>
    </>
  )
}

export default EmployeeButtonSet
