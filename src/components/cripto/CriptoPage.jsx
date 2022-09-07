import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { parseFloatNumber } from "../../helpers/numbers"
import "./CriptoPage.css"

const CriptoPage = () => {

  const API_URL = import.meta.env.VITE_API_URL

  const params = useParams()
  const [cripto, setCripto] = useState({})
  const [history, setHistory] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}assets/${params.id}`)
    .then(data => {
      setCripto(data.data.data)
    })
    .catch(e => console.error(e))

    axios.get(`${API_URL}assets/${params.id}/history?interval=d1&start=1659700000000&end=1662490888952`)
    .then(data => {
      setHistory(data.data.data)
    })
    .catch(e => console.error(e))
  }, [])

  return (
  <div className="cripto-page-container">
    <div className="info">
      <div className="main-info">
        <span>Rank: {cripto.rank}</span>
        <h1>{cripto.name}</h1>
        <span className="symbol">{cripto.symbol}</span>
      </div>
      <div className="details">
        <ul>
          <li className="detail">
            <span className="label">Precio: </span>
            <span>{parseFloatNumber(cripto.priceUsd, 3)}</span>
          </li>
          <li className="detail">
            <span className="label">MaxSupply: </span>
            <span>{parseFloatNumber(cripto.maxSupply, 3)}</span>
          </li>
          <li className="detail">
            <span className="label">Market Cap (USD): </span>
            <span>{parseFloatNumber(cripto.marketCapUsd, 3)}</span>
          </li>
          <li className="detail">
            <span className="label">Volumen (USD - 24 Hrs.): </span>
            <span>{parseFloatNumber(cripto.volumeUsd24Hr, 3)}</span>
          </li>
          <li className="detail">
            <span className="label">Variación (24 Hrs.): </span>
            <span>{parseFloatNumber(cripto.changePercent24Hr, 3)}</span>
          </li>
          <li className="detail">
            <span className="label">Vwap 24 Hrs.: </span>
            <span>{parseFloatNumber(cripto.vwap24Hr, 3)}</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="history">
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {history.reverse().map(({date, priceUsd, time}) => (
            <tr key={time}>
              <td className="label">{new Date(date).toDateString()}</td>
              <td className="price">{parseFloatNumber(priceUsd, 3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default CriptoPage