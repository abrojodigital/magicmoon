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
  };
  // const getEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  const calcularHoroscopo = (e) => {
    e.preventDefault();
    setMostrarSigno(true);
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
    <Container className="p-3 bg-body">
      <Header />
      <Container id="lectura">
      <Container className="p-5 mb-4 rounded-3">
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              // onChange={getNombre}
            />
          </Form.Group>

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

          <Form.Group controlId="formBasicGenero">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" > 
              <option value="">Select your gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="M">Non binary</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicFechaNacimiento">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control type="date" onChange={getFechaNacimiento} />
          </Form.Group>
        </Form>

        <div className="text-center">
          <h5>Let magic happen!!!</h5>
          <img src="./assets/img/horoscopo.png" width="100" alt="Let magic!" onClick={calcularHoroscopo} />
        </div>

      </Container>

      {mostrarSigno && (
        <Container className="p-5 mb-4 bg-light rounded-3">
          <DetalleSigno signo={signo} />
          <Horoscopo signo={signo} />
        </Container>
      )}
      <div className="text-center">
        <h5>Tarot reading</h5>
        <img src="./assets/img/tarot.png" alt="tarot" onClick={tirarCartasTarot} className="img-fluid" />
      </div>

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
  );
}

export default Homepage;
