import { Box, Typography } from "@mui/material"

const Tab2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        padding: "0 20px",
        overflow: "auto",
      }}
    >
      <Typography
        sx={{
          fontSize: 18,
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        Disclaimer: This is a mock graph generated using the provided data. This
        tab is meant to showcase cases where the weight after cooking is too
        different from the weight before in a day so that the manager is
        informed with them.
        <br />
        This system monitors drying weight loss during storage by calculating
        the percentage change in batch weight over time. The estimated weight
        loss rate is 1% per day, with a defined threshold of 1.5% per day. If
        the weight loss exceeds this threshold, the system automatically
        generates a notification to alert the production team of a potential
        issue in the process.
        <br />
        The weight loss percentage is calculated using the formula:
        <br />
        [Weight Loss Percentage = (Weight Before Storage - Weight After Storage)
        / Number of Days Stored * 100]
        <br />
        Where the number of days stored is determined by the difference between
        the storage out date and storage in date. To handle edge cases, if both
        dates are the same, the duration is assumed to be 1 day.
        <br />
        This tool ensures proactive issue detection, enabling timely
        interventions to maintain process efficiency and product quality while
        minimizing risks of spoilage or non-compliance.
      </Typography>
    </Box>
  )
}

export default Tab2
