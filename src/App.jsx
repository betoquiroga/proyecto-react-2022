import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import "./App.css"
import Cripto from "./Cripto"

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.error("La petición falló")
      })
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <div className="app-container">
      <h1 className="title">EDmarket - Ranking de criptomonedas</h1>
      <div className="cripto-container">
        {
          criptos.map(({id, name, priceUsd, changePercent24Hr}) => (
            <Cripto key={id} name={name} priceUsd={priceUsd} change={changePercent24Hr} />
          )) 
        }
      </div>
    </div>

  )
}

export default App
