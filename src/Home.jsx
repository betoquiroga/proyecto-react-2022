import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Bienvenido a EDmarket</h1>
      <p className="subtitle">Cónoce las 100 criptos más usadas</p>
      <Link to="/criptomonedas" className="link">Ver criptomonedas</Link>
    </div>
  )
}

export default Home