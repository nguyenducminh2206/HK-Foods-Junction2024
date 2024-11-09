import { Typography } from "@mui/material"
import LoginForm from "./LoginForm"
import Box from "@mui/material/Box"

const Login = () => {
  const handleSubmit = () => {
    console.log("submitted")
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        border: "10 solid",
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        align="center"
        fontSize={56}
        fontFamily="Inter"
        fontWeight="bold"
        width={700}
        sx={{ textShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)", color: "#0C2D53" }}
      >
        Food Production Management Tool
      </Typography>
      <Box
        sx={{
          width: 600,
          height: 300,
          background: "#EBEEF6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "0 auto",
          marginTop: 6,
          border: "30px solid transparent",
          borderRadius: "20px",
        }}
      >
        <Typography
          align="left"
          fontFamily="Inter"
          fontWeight="semibold"
          marginBottom={3}
          fontSize={40}
        >
          Log in
        </Typography>
        <LoginForm handleSubmit={handleSubmit} />
      </Box>
    </Box>
  )
}

export default Login
