import { parseFloatNumber } from "../../../helpers/numbers"

const CriptoInfo = ({ cripto }) => {
  return (
    <div className="info">
      <div className="main-info">
        <span>Ranking: {cripto.rank}</span>
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
  )
}

export default CriptoInfo