import Login from "./pages/Registration/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Signup from "./pages/Registration/Signup"
import TouchScreen from "./pages/Mana/TouchScreen/TouchScreen"
import Notification from "./pages/Mana/Notification/Notification"
import ProductHistory from "./pages/Mana/ProductHistory/ProductHistory"
import DataAnalytics from "./pages/Mana/DataAnalytics/DataAnalytics"
import Training from "./pages/Employee/Training/Training"
import Status from "./pages/Employee/WorkStatus/Status"
import IssuePopup from "./pages/Mana/TouchScreen/IssuePopup"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/mana/touchscreen" element={<TouchScreen />} />
          <Route path="/mana/noti" element={<Notification />} />
          <Route path="/mana/history" element={<ProductHistory />} />
          <Route path="/mana/data" element={<DataAnalytics />} />
          <Route path="/employee/training" element={<Training />} />
          <Route path="/employee/status" element={<Status />} />
          <Route path="/issue1" element={<IssuePopup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
