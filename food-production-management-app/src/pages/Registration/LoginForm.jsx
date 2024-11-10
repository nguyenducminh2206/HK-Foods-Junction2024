import { TextField, Button, Box, Typography } from "@mui/material"

const LoginForm = ({ handleSubmit, roleSelected }) => {
  const handleLogin = () => {
    if (roleSelected === "Employee") {
      window.location.href = "/employee/training"
    } else roleSelected === "Manager"
    {
      window.location.href = "/mana/noti"
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
          sx={{ backgroundColor: "white" }}
        />
      </div>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Button
          variant="contained"
          sx={{
            marginTop: 3,
            backgroundColor: "#BFD3EB",
            color: "#0C2D53",
            borderRadius: 30,
          }}
          onClick={handleLogin}
        >
          Log in
        </Button>
        <Typography sx={{ marginTop: 2, fontFamily: "Inter" }}>
          or <a href="/signup">sign up</a>
        </Typography>
      </Box>
    </form>
  )
}

export default LoginForm
