import "./OptionClosedOrder.css";
import { useState } from "react";
import FormOrderEnvio from "./FormOrderEnvio";
import FormOrderRetiro from "./FormOrderRetiro";
import Cart from "../Cart/Cart";

const OptionClosedOrder = () => {
  const [retiroOn, setRetiroOn] = useState(null);

  const handleBtnRetiro = () => {
    setRetiroOn(true);
  };

  const handleBtnEnvio = () => {
    setRetiroOn(false);
  };

  return (
    <>
      <Cart />
      <div className="apilarBtnClsOrd">
        <button className="btnClosedOrder" onClick={handleBtnRetiro}>
          Retiro por Sucursal
        </button>
        <button className="btnClosedOrder" onClick={handleBtnEnvio}>
          Envio a Domicilio
        </button>
      </div>
      <>
        {retiroOn === true && <FormOrderRetiro />}
        {retiroOn === false && <FormOrderEnvio />}
      </>
    </>
  );
};

export default OptionClosedOrder;
