import { Typography, Box, TextField } from "@mui/material"
import CurrentStageSelect from "../SelectMenus/CurrentStageSelect"

const TitleBox = () => {
  return (
    <Box display="flex" alignItems="center">
      <Typography
        fontSize={30}
        fontFamily="Inter"
        fontWeight="bold"
        sx={{
          textShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
          color: "#0C2D53",
          marginRight: 2,
          display: "flex",
          alignItems: "center"
        }}
      >
        Food Production Management Tool
      </Typography>
      <Box
        sx={{
          borderRadius: 10,
          border: "1px solid transparent",
          background: "#E8EEF6",
          width: 395,
          height: 49,
          display: "flex",
          alignItems: "center"
        }}
      >
        <Typography sx={{marginLeft: 3}}>
          Stage
          <CurrentStageSelect></CurrentStageSelect>
        </Typography>
      </Box>
    </Box>
  )
}

export default TitleBox
