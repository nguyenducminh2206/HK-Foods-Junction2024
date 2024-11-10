import { Box, TextField, Button, Typography } from "@mui/material"
import { useState } from "react"

const Tab1 = () => {
  const [showImage, setShowImage] = useState(false)

  const handleButtonClick = () => {
    setShowImage(true)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
        width: "100%",
        paddingTop: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          marginBottom: 2,
        }}
      >
        <TextField
          placeholder="Enter product ID"
          sx={{ marginRight: 2, width: 300 }}
        />
        <TextField
          placeholder="Enter batch date"
          sx={{ marginRight: 2, width: 300 }}
        />
        <TextField
          placeholder="Enter difference threshold"
          sx={{ width: 300 }}
        />
      </Box>
      <Button
        variant="contained"
        onClick={handleButtonClick}
        sx={{ marginBottom: 5 }}
      >
        Detect cases above threshold
      </Button>
      {showImage && (
        <>
          <img
            src="/data.png"
            alt="Data"
            style={{ width: "60%", height: "auto" }}
          />
          <Typography
            sx={{
              fontSize: 18,
              textAlign: "center",
              maxWidth: "800px",
              marginTop: 3,
            }}
          >
            Disclaimer: This is a mock graph generated using the provided data.
            This tab is meant to showcase cases where the weight after cooking
            is too different from the weight before in a day so that the manager
            is informed with them.
          </Typography>
        </>
      )}
    </Box>
  )
}

export default Tab1
