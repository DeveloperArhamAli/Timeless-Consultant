import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import TopInfoBar from "./components/TopInfoBar"
import Footer from "./components/Footer"
import Layout from "./components/Layout"

function App() {
  return (
    <div className="overflow-x-hidden">
      <TopInfoBar />
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </div>
  )
}
export default App