import { Box, Slider, TextField, Typography, Button } from "@mui/material"
import IssuesSelect from "./SelectMenus/IssuesSelect"
import StagesSelect from "./SelectMenus/StageSelect"

const NotiForm = () => {
  return (
    <>
      <Box
        sx={{
          borderRadius: 10,
          border: "20px solid transparent",
          background: "#E8EEF6",
          width: 900,
          height: 690,
          "& > *": { marginTop: "20px" },
        }}
      >
        <Typography className="test">
          Batch No.:
          <TextField
            sx={{
              "& .MuiInputBase-root": {
                height: 25,
                borderRadius: "15px",
                marginLeft: 2,
                width: 203,
                background: "white",
              },
            }}
          ></TextField>
        </Typography>
        <Typography className="noti-form-label">
          Issues
          <IssuesSelect />
        </Typography>
        <Typography className="noti-form-label">
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
            sx={{ width: 190, marginLeft: 6 }}
          ></Slider>
        </Typography>
        <Typography className="noti-form-label">
          Send to: <StagesSelect />
        </Typography>
        <Typography className="noti-form-label">
          Description (optional):
        </Typography>
        <TextField
          multiline
          rows={5}
          sx={{ width: 400, background: "white" }}
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
