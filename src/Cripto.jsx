import "./Cripto.css"

const Cripto = ({ name, priceUsd, change }) => {
  return (
    <div className="cripto">
      <h2>{name}</h2>
      <div className="info">
        <p><span className="label">Price (USD): </span>{parseFloat(priceUsd).toFixed(5)}</p>
        <p>
          <span className="label">Cambio en 24hrs: </span>
          <span className={parseFloat(change) > 0 ? "positive" : "negative"}>
            {parseFloat(change).toFixed(3)}%
          </span>
        </p>
      </div>
    </div>
  )
}

export default Cripto