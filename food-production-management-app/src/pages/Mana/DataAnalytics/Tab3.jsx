import { Box, Typography } from "@mui/material"

const Tab3 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: 18,
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        This program monitors product weights against defined tolerances based
        on target weight ranges. It dynamically calculates deviations
        (percentage or absolute) using a tolerance table and alerts users if
        weights exceed limits. Consecutive exceedances are tracked, with a
        critical alert triggered after five consecutive deviations. Users input
        weights interactively, receiving real-time feedback on whether the
        weight is within tolerance or not. It ensures efficient quality control
        and prevents product inconsistencies.
      </Typography>
    </Box>
  )
}

export default Tab3
