import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import TopInfoBar from "./components/TopInfoBar"

function App() {
  return (
    <div>
      <TopInfoBar />
      <Navbar />
      <Outlet />
    </div>
  )
}
export default App