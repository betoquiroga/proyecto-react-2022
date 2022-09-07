import { useParams } from "react-router-dom"
import usePetition from "../../hooks/usePetition"
import "./CriptoPage.css"
import CriptoHistory from "./info/CriptoHistorial"
import CriptoInfo from "./info/CriptoInfo"

const CriptoPage = () => {

  const params = useParams()

  const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`)
  const [history, cargandoHistory] = usePetition(`assets/${params.id}/history?interval=d1`)

  if (cargandoCripto || cargandoHistory) return <span>Cargando...</span>

  return (
  <div className="cripto-page-container">
    { cripto && <CriptoInfo cripto={cripto} /> }
    { history && <CriptoHistory history={history} /> }
  </div>
  )
}

export default CriptoPage