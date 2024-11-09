import LeftBox from "./boxComponents/LeftBox"
import NotiBar from "./NotiBar"

const TouchScreen = () => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <LeftBox />
      <NotiBar />
    </div>
  )
}

export default TouchScreen
