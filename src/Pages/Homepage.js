// Comisión 22014 - Pablo Bersier

import React, { useState } from "react";

// Import de Componentes
import Header from "../Components/Header";
import Horoscopo from "../Components/Horoscopo";
import DetalleSigno from "../Components/DetalleSigno";
import Tarot from "../Components/Tarot";

import buscarSigno from "../Utils/buscarSigno";

// import de componentes react-bootstrap
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import html2pdf from "html2pdf.js";

function Homepage() {
  // const [nombre, setNombre] = useState("");
  // const [genero, setGenero] = useState("");
  // const [fechaNacimiento, setFechaNacimiento] = useState("");
  // const [email, setEmail] = useState("");
  const [signo, setSigno] = useState([]);
  const [mostrarSigno, setMostrarSigno] = useState(false);
  const [mostrarTarot, setMostrarTarot] = useState(false);
  const [mostrarDownload, setMostrarDownload] = useState(false);
  const [mostrarBotonZodiaco, setMostrarBotonZodiaco] = useState(false);
  const [mostrarBotonTarot, setMostrarBotonTarot] = useState(false);

  const exportarArchivo = (e) => {
    e.preventDefault();
    html2pdf(document.getElementById("lectura"), {
      filename: "lectura.pdf",
      html2canvas: {
        scale: 2,
      },
      jsPDF: {
        orientation: "portrait",
        unit: "in",
        format: "A4",
        compressPDF: true,
        disableSmartShrinking: true,
        pagebreak: { mode: ["avoid-all"] },
      },
    });
  }

  // const getNombre = (e) => {
  //   setNombre(e.target.value);
  // };
  // const getGenero = (e) => {
  //   setGenero(e.target.value);
  // };

  const getFechaNacimiento = (e) => {
    // setFechaNacimiento(new Date(e.target.value));
    let mes = parseInt(e.target.value.split("-")[1]);
    let dia = parseInt(e.target.value.split("-")[2]);
    setSigno(buscarSigno(mes, dia));
    setMostrarBotonZodiaco(true);
  };
  // const getEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  const calcularHoroscopo = (e) => {
    e.preventDefault();
    setMostrarSigno(true);
    setMostrarBotonTarot(true);
  };

  const tirarCartasTarot = (e) => {
    setMostrarTarot(true);
    setMostrarDownload(true);
  }
  const ocultarTarot = (e) => {
    setMostrarTarot(false);
    setMostrarDownload(false);
  }

  return (
    <div className="App">
    <Container>
      <Header />
      <Container className="bg-body" id="lectura">
      <h1 className="text-center">Astrology and Tarot</h1>
      <p className="text-center">
        Do you know what characteristics your personality has? Do you know what's in store for your future? The moon will give you a guide for your life
      </p>
        <Container className="p-5 mb-4 rounded-3">
          <Form>
            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                  // onChange={getNombre}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    // onChange={getEmail}
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We will never share your email
                  </Form.Text>
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="formBasicGenero">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as="select" >
                    <option value="">Select your gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="M">Non binary</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="formBasicFechaNacimiento">
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control type="date" onChange={getFechaNacimiento} />
                </Form.Group>
              </div>
            </div>
          </Form>

          {mostrarBotonZodiaco &&
            (<div className="mt-5 text-center">
              <h5>Let magic happen!!!</h5>
              <img src="./assets/img/horoscopo.png" width="100" alt="Let magic!" onClick={calcularHoroscopo} />
              <p>Calculate</p>
            </div>
            )}
          {!mostrarBotonZodiaco &&
            (<div className="mt-5 text-center">
              <h5>Let magic happen!!!</h5>
              <img src="./assets/img/horoscopo2.png" width="100" alt="Let magic!" />
              <p>Date of birth is needed to calculate</p>
            </div>
            )}

        </Container>

        {mostrarSigno && (
          <Container className="p-5 mb-4 bg-light rounded-3">
            <DetalleSigno signo={signo} />
            <Horoscopo signo={signo} />
          </Container>
        )}
        
       {mostrarBotonTarot && ( <div className="text-center">
          <h5>Tarot reading</h5>
          <img src="./assets/img/tarot.png" alt="tarot" onClick={tirarCartasTarot} className="img-fluid" />
        </div>)}

        {mostrarTarot && (
          <Container className="p-5 mb-4 bg-light rounded-3">
            <Tarot tirarCartasTarot={tirarCartasTarot} ocultarTarot={ocultarTarot} />
          </Container>
        )}
      </Container>
      {mostrarDownload && (
        <Container className="text-center">
          <h3>Download</h3>
          <img src="./assets/img/logo.png" alt="tarot" width="100" onClick={exportarArchivo} className="img-fluid" />
        </Container>)}
    </Container>
    </div>
  );
}

export default Homepage;
