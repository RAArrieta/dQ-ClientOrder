import { useState } from 'react'
import FormOrderEnvio from './FormOrderEnvio'
import FormOrderRetiro from './FormOrderRetiro'


const OptionClosedOrder = () => {

    const [retiroOn, setRetiroOn] = useState(null)

    const handleBtnRetiro = () => {
        setRetiroOn(true)
    }

    const handleBtnEnvio = () => {
        setRetiroOn(false)
    }

    return (
        <div>
            <div className='apilarBtnClsOrd'>
                <button className='btnClosedOrder' onClick={handleBtnRetiro}>Retiro por Sucursal</button>
                <button className='btnClosedOrder' onClick={handleBtnEnvio}>Envio a Domicilio</button>
            </div>
            <div>
                {retiroOn === true && <FormOrderRetiro />}
                {retiroOn === false && <FormOrderEnvio />}
            </div>
        </div>
    )
}

export default OptionClosedOrder
