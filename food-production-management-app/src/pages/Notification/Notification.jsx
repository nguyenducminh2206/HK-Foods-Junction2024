import NavBar from "../../layout/NavBar"
import StageNoti from "./StageNoti"
import { Box } from "@mui/material"

const Notification = () => {
  const headers = ["Preproduction", "Cooking", "Storage", "Packing Area"]
  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex", gap: "10px" }}>
        {headers.map((item, index) => (
          <StageNoti key={index} title={item} />
        ))}
      </Box>
    </>
  )
}

export default Notification
