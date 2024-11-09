import Login from "./pages/Registration/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Signup from "./pages/Registration/Signup"
import TouchScreen from "./pages/TouchScreen/TouchScreen"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/touchscreen" element={<TouchScreen />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
