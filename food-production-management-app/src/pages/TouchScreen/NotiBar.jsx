import { Box, Divider, Typography } from "@mui/material"

const NotiBar = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        borderRadius: 10,
        background: "#E8EEF6",
        width: 410,
        border: "10px solid transparent",
      }}
    >
      <Typography sx={{ fontSize: 40 }}>Notification</Typography>
      <Divider sx={{ width: "90%", marginTop: 1 }} />
    </Box>
  )
}

export default NotiBar
