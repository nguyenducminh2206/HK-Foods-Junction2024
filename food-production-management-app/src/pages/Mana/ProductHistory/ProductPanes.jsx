import { Box, Typography } from "@mui/material"
import StageInfoBox from "./StageInfoBox"
import NavBar from "../../../layout/NavBar/NavBar"

const ProductPanes = ({ batchNumber }) => {
  const generateRandomWeight = () => {
    return Math.floor(Math.random() * 11) + 195
  }

  const generateTimeStamps = () => {
    const pad = (num) => (num < 10 ? "0" : "") + num

    const now = new Date()
    const firstTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`

    now.setMinutes(now.getMinutes() + 15)
    const secondTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`

    return [firstTime, secondTime]
  }

  const createTimeString = () => {
    const timeStamps = generateTimeStamps()
    return `${timeStamps[0]} - ${timeStamps[1]}`
  }

  const getPackageNum = () => {
    return Math.floor(Math.random() * 41) + 380
  }

  const getAvgWeight = () => {
    return (Math.random() * (403 - 396) + 396).toFixed(2)
  }

  const getRandomPercentage = () => {
    const percentages = [0, 25, 50, 75, 100]
    const randomIndex = Math.floor(Math.random() * percentages.length)
    return percentages[randomIndex]
  }

  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 80,
          width: "calc(100% - 10px)",
          margin: "25px 10px",
          background: "white",
          borderRadius: "30px",
          padding: "12px 0",
          border: "15px solid transparent",
          outline: "1px solid black", // Added thin black outline
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: 20 }}>ID number: 5030</Typography>
          <Typography sx={{ fontSize: 20 }}>
            Batch number: {batchNumber}
          </Typography>
        </Box>
        <StageInfoBox
          stage={"Preproduction"}
          time={createTimeString()}
          weight={`${generateRandomWeight()} kg`}
        />
        <StageInfoBox
          stage={"Cooking"}
          time={createTimeString()}
          weight={`${generateRandomWeight()} kg`}
        />
        <StageInfoBox
          stage={"Storage"}
          time={createTimeString()}
          weight={`${generateRandomWeight()} kg`}
        />
        <StageInfoBox stage={"Packing Area"} packageNum={getPackageNum()} avgWeight={getAvgWeight()} status={getRandomPercentage()} />
      </Box>
    </>
  )
}

export default ProductPanes
