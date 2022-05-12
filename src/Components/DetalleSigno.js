import React, { useState, useEffect } from "react";
import zodiaco from "../Data/zodiac";

function DetalleSigno(props) {
  const [caracSigno, setCaracSigno] = useState([]);
  const urlImgs = "./assets/img/signos/"

  useEffect(() => {
    setCaracSigno(zodiaco[props.signo[0]]);
  }, [props.signo]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">{caracSigno.sign}</h1>
          <h3 className="text-center">{caracSigno.title}</h3>
          <img
            src={urlImgs + caracSigno.image}
            alt={caracSigno.sign}
            className="img-fluid mx-auto d-block"
          />
          <p className="text-center">{caracSigno.text}</p>
        </div>
      </div>
    </div>
  );
}

export default DetalleSigno;
