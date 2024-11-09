import { Box, Typography, Divider } from "@mui/material"

const StageNoti = ({ title }) => {
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Box
        sx={{
          background: "#E8EEF6",
          width: 350,
          height: 790,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ marginTop: "10px", fontSize: 35 }}>
          {title}
        </Typography>
        <Divider sx={{ width: "80%", marginTop: "10px" }} />
        <Box
          sx={{
            background: "white",
            width: 250,
            height: 250,
            marginTop: 2,
            borderRadius: 5,
            border: "20px solid transparent",
          }}
        >
          <Typography sx={{fontSize: 30, marginBottom: 10}}>Issues:</Typography>
          <Typography sx={{fontSize: 30}}>From:</Typography>
          <Typography sx={{fontSize: 30}}>Priority:</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default StageNoti
