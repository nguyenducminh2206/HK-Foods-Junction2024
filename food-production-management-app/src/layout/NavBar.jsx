import { Box, Button, Typography } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { useState } from "react"

const NavBar = () => {
  const [visible, setVisible] = useState(false)
  const handleLogout = () => {
    window.location.href = "/"
  }

  const toggleNavBar = () => {
    setVisible(!visible)
    visible ? console.log("test") : console.log("test2")
  }

  if (!visible) {
    return (
      <Button
      onClick={toggleNavBar}
      sx={{
        position: "fixed",
        bottom: 10,
        left: 10,
        background: "#BFD3EB",
        color: "#0C2D53",
        width: 50,
        height: 50,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 96 960 960"
        width="24"
        fill="#0C2D53"
      >
        <path d="M120 816v-60h720v60H120Zm0-180v-60h720v60H120Zm0-180v-60h720v60H120Z" />
      </svg>
      </Button>
    )
  }

  return (
    <>
      <Box
        sx={{
          width: 300,
          background: "linear-gradient(to top, #1A3E70, #2B4F8D)",
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            align="center"
            fontSize={30}
            fontFamily="Inter"
            fontWeight="bold"
            width={1}
            sx={{
              textShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
              color: "#CFE6FF",
              marginTop: 2,
              textAlign: "center",
            }}
          >
            Food Production Management Tool
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 4,
              marginBottom: 4,
              justifyContent: "center",
            }}
          >
            <AccountCircleIcon
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                marginRight: 10,
              }}
            />
            <Box>
              <Typography
                fontSize={20}
                fontFamily="Inter"
                fontWeight="bold"
                color="#CFE6FF"
              >
                HK Food
              </Typography>
              <Typography fontSize={16} fontFamily="Inter" color="#CFE6FF">
                Manager
              </Typography>
            </Box>
          </Box>
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
            onClick={() => (window.location.href = "/noti")}
          >
            Notifications
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
            onClick={() => (window.location.href = "/history")}
          >
            Product History
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
            onClick={() => (window.location.href = "/data")}
          >
            Data Analytics
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
            onClick={() => (window.location.href = "/touchscreen")}
          >
            On Site Device View
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 2,
          }}
        >
          <Button
            onClick={handleLogout}
            sx={{
              background: "#BFD3EB",
              color: "#0C2D53",
              width: 120,
              height: 40,
              borderRadius: 10,
              marginRight: 1,
            }}
          >
            Logout
          </Button>
          <Button
            onClick={toggleNavBar}
            sx={{
              background: "#BFD3EB",
              color: "#0C2D53",
              width: 50,
              height: 50,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 96 960 960"
              width="24"
              fill="#0C2D53"
            >
              <path d="M120 816v-60h720v60H120Zm0-180v-60h720v60H120Zm0-180v-60h720v60H120Z" />
            </svg>
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default NavBar
