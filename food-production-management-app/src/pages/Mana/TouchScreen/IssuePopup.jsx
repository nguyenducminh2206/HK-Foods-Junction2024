import { Box, Typography, Divider, Button } from "@mui/material"

const IssuePopup = () => {
  const info = localStorage.getItem("IssueInfo")
  console.log(info)
  const infoArray = info ? info.split(",") : []
  return (
    <Box
      sx={{
        width: 600,
        height: 400,
        background: "white",
        padding: 2,
        position: "relative",
      }}
    >
      <Button
        sx={{
          height: 30,
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: "lightgreen",
        }}
        variant="contained"
      >
        Resolve
      </Button>
      <Typography sx={{ fontWeight: "bold" }}>Date: 09/11/2024</Typography>
      <Divider sx={{ marginY: 1 }} />
      <Typography>Issue: {infoArray[0]}</Typography>
      <Typography>From: {infoArray[1]}</Typography>
      <Typography>Priority: {infoArray[2]}</Typography>
      <Divider sx={{ marginY: 1 }} />
      <Typography sx={{ fontWeight: "bold" }}>
        Batch/ID No: {infoArray[0] === "Defective Product" ? 5030 : 4321}
      </Typography>
      <Typography>Description:</Typography>
      {infoArray[0] !== "Defective Product" ? (
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      ) : (
        <Typography>
          Product 5030, Batch 1816, 11/9/2023 has a weight loss of 1.9% per day,
          which is above the threshold.
        </Typography>
      )}
    </Box>
  )
}

export default IssuePopup
