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
            <div className="row text-center m-2">
                <p className="card-text">
                    Today {prediccion.date_range}.<br />
                    Mood: {prediccion.mood} <br />
                </p>
            </div>
            <div className="row text-center m-2">
                <p className="card-text">
                    {prediccion.description}
                </p>
            </div>
            <div className="row text-center m-3">
                <p className="card-text">
                    Compatibility: {prediccion.compatibility} <br />
                    Lucky Number: {prediccion.lucky_number} <br />
                    Lucky Time: {prediccion.lucky_time} <br />
                    Color: {prediccion.color} <br />
                </p>
            </div>
        </div>
    )
}

export default Horoscopo;
