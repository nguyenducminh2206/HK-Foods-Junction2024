import { Box, Button } from "@mui/material"
import LeftBox from "./boxComponents/LeftBox"
import NotiBar from "./NotiBar"
import { useNavigate } from "react-router-dom"

const TouchScreen = () => {
  const navigate = useNavigate()
  return (
    <>
      <Box style={{ display: "flex", gap: 20 }}>
        <LeftBox />
        <NotiBar />

        <Box style={{ position: "absolute", bottom: 20, left: 20 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default TouchScreen
