import { Button } from "@mui/material"

const ManagerButtonSet = () => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          marginBottom: 8,
          background: "#BFD3EB",
          color: "#0C2D53",
          width: 240,
          height: 50,
          borderRadius: 10,
        }}
        onClick={() => (window.location.href = "/mana/noti")}
      >
        Notifications
      </Button>
      <Button
        variant="contained"
        sx={{
          marginBottom: 8,
          background: "#BFD3EB",
          color: "#0C2D53",
          width: 240,
          height: 50,
          borderRadius: 10,
        }}
        onClick={() => (window.location.href = "/mana/history")}
      >
        Product History
      </Button>
      <Button
        variant="contained"
        sx={{
          marginBottom: 8,
          background: "#BFD3EB",
          color: "#0C2D53",
          width: 240,
          height: 50,
          borderRadius: 10,
        }}
        onClick={() => (window.location.href = "/mana/data")}
      >
        Data Monitoring
      </Button>
      <Button
        variant="contained"
        sx={{
          marginBottom: 8,
          background: "#BFD3EB",
          color: "#0C2D53",
          width: 240,
          height: 50,
          borderRadius: 10,
        }}
        onClick={() => (window.location.href = "/mana/touchscreen")}
      >
        On Site Device View
      </Button>
    </>
  )
}

export default ManagerButtonSet
