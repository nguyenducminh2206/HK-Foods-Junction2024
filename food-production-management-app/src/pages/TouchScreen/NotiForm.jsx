import { Box, Slider, TextField, Typography, Button } from "@mui/material"
import IssuesSelect from "./SelectMenus/IssuesSelect"
import StagesSelect from "./SelectMenus/StageSelect"

const NotiForm = () => {
  return (
    <>
      <Box
        sx={{
          borderRadius: 10,
          border: "30px solid transparent",
          background: "#E8EEF6",
          width: 900,
          height: 660,
        }}
      >
        <Typography sx={{ fontSize: 25, marginBottom: 2 }}>
          Batch/ID No.:
          <TextField
            sx={{
              "& .MuiInputBase-root": {
                height: 40,
                borderRadius: "15px",
                marginLeft: 2,
                width: 400,
                background: "white",
                fontSize: 45,
              },
            }}
          ></TextField>
        </Typography>
        <Typography sx={{ fontSize: 25, marginBottom: 2 }}>
          Issues
          <IssuesSelect />
        </Typography>
        <Typography sx={{ fontSize: 25, marginBottom: 2 }}>
          Priority
          <Slider
            aria-label="Priority"
            defaultValue={0}
            valueLabelDisplay="auto"
            shiftStep={30}
            step={1}
            marks
            min={0}
            max={10}
            sx={{ width: 400, marginLeft: 12 }}
          ></Slider>
        </Typography>
        <Typography sx={{ fontSize: 25, marginBottom: 2 }}>
          Send to: <StagesSelect />
        </Typography>
        <Typography sx={{ fontSize: 25, marginBottom: 2 }}>Description (optional):</Typography>
        <TextField
          multiline
          rows={10}
          sx={{ width: 800, background: "white" }}
        />
        <br />
        <Button
          variant="contained"
          sx={{
            width: 100,
            marginTop: 2,
            backgroundColor: "#85BEDD",
            color: "black",
            borderRadius: 30,
          }}
        >
          Send
        </Button>
      </Box>
    </>
  )
}

export default NotiForm
