import { Box, Typography } from "@mui/material"

const NotiBox = ({ issue, from, priority }) => {
  return (
    <>
      <Box
        sx={{
          width: 350,
          height: 180,
          background: "white",
          marginTop: 3,
          borderRadius: 10,
          border: "20px solid transparent",
          cursor: "pointer",
        }}
        onClick={() => {
          localStorage.setItem("IssueInfo", [issue, from, priority])
          console.log(localStorage.getItem("IssueInfo"))
          window.open("/issue1", "_blank", "width=650,height=450")
        }}
      >
        <Typography sx={{ fontSize: 25, marginBottom: 8 }}>
          Issues: {issue}
        </Typography>
        <Typography sx={{ fontSize: 25 }}>From: {from}</Typography>
        <Typography sx={{ fontSize: 25 }}>Priority: {priority}</Typography>
      </Box>
    </>
  )
}

export default NotiBox
