import { Box, Divider, Typography } from "@mui/material"

const NotiBar = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ borderRadius: 10, background: "#E8EEF6", width: 250 }}
    >
      <Box>
        <Typography>Notification</Typography>
      </Box>
      <Divider variant="middle" orientation="horizontal"/>
      <Box>
        <Typography>test</Typography>
      </Box>
    </Box>
  )
}

export default NotiBar
