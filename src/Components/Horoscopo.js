// Comisión 22014 - Horoscopo

import React, { useState, useEffect } from "react";

function Horoscopo(props) {
    const [prediccion, setPrediccion] = useState([]);

    const getPrediction = async () => {
        const URL = `https://aztro.sameerkumar.website/?sign=${props.signo[1]}&day=today`;
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
            .then(data => {
                setPrediccion(data);
            }
            )
            .catch(error => console.log(error));
    }
    useEffect(() => {
        getPrediction();
    }
        , [])

    return (
        <div className="container">
            <div className="row">
                    <p className="card-text">
                        This week. {prediccion.description}
                        Compatibility: {prediccion.compatibility} <br />
                        Lucky Number: {prediccion.lucky_number} <br />
                        Lucky Time: {prediccion.lucky_time} <br />
                        Color: {prediccion.color} <br />
                        Date Range: {prediccion.date_range} <br />
                        Mood: {prediccion.mood} <br />
                    </p>
                </div>
            </div>
    )
}

export default Horoscopo;
