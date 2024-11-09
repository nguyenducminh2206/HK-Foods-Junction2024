import { useState } from "react"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { TextField, Button, Box } from "@mui/material"

const SignupForm = () => {
  const [role, setRole] = useState("employee")

  const handleChange = (e) => {
    setRole(e.currentTarget.value)
  }

  return (
    <>
      <form>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <ToggleButtonGroup
            color="primary"
            value={role}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            spacing={6}
          >
            <ToggleButton value="employee" sx={{ height: 30, borderRadius: 5 }}>
              Employee
            </ToggleButton>
            <ToggleButton value="manager" sx={{ height: 30, borderRadius: 5 }}>
              Manager
            </ToggleButton>
          </ToggleButtonGroup>
          <TextField
            fullWidth
            placeholder="staff id"
            sx={{
              backgroundColor: "white",
            }}
          />
          <TextField
            fullWidth
            placeholder="username"
            sx={{
              backgroundColor: "white",
            }}
          />
          <TextField
            fullWidth
            placeholder="password"
            sx={{
              backgroundColor: "white",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                marginTop: 3,
                backgroundColor: "#BFD3EB",
                color: "#0C2D53",
                borderRadius: 30,
              }}
              onClick={() => window.location.href = "/noti"}
            >
              Sign up
            </Button>
          </Box>
        </div>
      </form>
    </>
  )
}

export default SignupForm
