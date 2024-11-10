import { Box, Typography } from "@mui/material"

const StageInfoBox = ({ stage, time, weight, status }) => {
  if (stage === "Packing Area") {
    return (
      <>
        <Box
          sx={{
            background: "#BFD3EB",
            color: "#0C2D53",
            height: 90,
            width: 240,
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>{stage}</Typography>
          <Typography>{status}</Typography>
        </Box>
      </>
    )
  }
  
  return (
    <>
      <Box
        sx={{
          background: "#BFD3EB",
          color: "#0C2D53",
          height: 90,
          width: 240,
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>{stage}</Typography>
        <Typography>{time}</Typography>
        <Typography>{weight}</Typography>
      </Box>
    </>
  )
}

export default StageInfoBox
