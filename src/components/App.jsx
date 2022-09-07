import { Outlet } from "react-router-dom"
import Menu from "./menu/Menu"
import "./App.css"

const App = () => {
  return (
    <div className="app-container">
      <Menu />
      <Outlet />
    </div>
  )
}

export default App