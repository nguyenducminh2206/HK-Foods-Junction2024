import NavBar from "../../../layout/NavBar/NavBar"
import { useState } from "react"
import { Tabs, Tab } from "@mui/material"
import Tab1 from "./Tab1"
import Tab2 from "./Tab2"
import Tab3 from "./Tab3"

const DataAnalytics = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <NavBar />

      <Tabs
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ style: { display: "none" } }}
      >
        <Tab
          label="Before - After Cooking"
          style={{ fontSize: 20, marginLeft: 10, marginRight: 10 }}
        />
        <Tab
          label="Before - After Storage"
          style={{ fontSize: 20, marginLeft: 10, marginRight: 10 }}
        />
        <Tab
          label="Final Packaging"
          style={{ fontSize: 20, marginLeft: 10, marginRight: 10 }}
        />
      </Tabs>
      {value === 0 && <div>{<Tab1 />}</div>}
      {value === 1 && <div>{<Tab2 />}</div>}
      {value === 2 && <div>{<Tab3 />}</div>}
    </>
  )
}

export default DataAnalytics
