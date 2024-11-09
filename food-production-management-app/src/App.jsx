import Login from "./pages/Registration/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Signup from "./pages/Registration/Signup"
import TouchScreen from "./pages/TouchScreen/TouchScreen"
import Notification from "./pages/Notification/Notification"
import ProductHistory from "./pages/ProductHistory/ProductHistory"
import DataAnalytics from "./pages/DataAnalytics/DataAnalytics"
import Employee from "./pages/Employee/Employee"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/touchscreen" element={<TouchScreen />} />
          <Route path="/noti" element={<Notification />} />
          <Route path="/history" element={<ProductHistory />} />
          <Route path="/data" element={<DataAnalytics />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
