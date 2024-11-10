import { Box, Divider, Typography } from "@mui/material"
import NotiBox from "./boxComponents/NotiBox"

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
      <Typography sx={{ fontSize: 40 }}>Notifications</Typography>
      <Divider sx={{ width: "90%", marginTop: 1 }} />
      <NotiBox issue={"Equipment Malfunction"} from={"Packing"} priority={10}/>
      <NotiBox issue={"Defective Product"} from={"Automated Alert System"} priority={9}/>
    </Box>
  )
}

export default NotiBar
