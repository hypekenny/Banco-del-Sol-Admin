import React from "react";

export const About = () => {
  function linkMarcos() {
    window.open("https://www.linkedin.com/in/marcos-albarado-7b337820b/");
  }

  function linkNico() {
    window.open("https://www.linkedin.com/in/nicolas-cardone/");
  }

  function linkEze() {
    window.open("https://www.linkedin.com/in/ezequieldecunto/");
  }

  function linkSan() {
    window.open("https://www.linkedin.com/in/santiago-ferro-fullstack/");
  }

  function linkRodri() {
    window.open("https://www.linkedin.com/in/rodrigolopezsmz/");
  }

  function linkKevin() {
    window.open("https://www.linkedin.com/in/kevin-arian/");
  }

  function linkSeba() {
    window.open("https://www.linkedin.com/in/sebastiantorres-fullstack-react/");
  }

  function linkVeiga() {
    window.open("https://www.linkedin.com/in/santiagoveiga46/");
  }

  return (
    <div style={{ position: "absolute", paddingLeft: "10%", top: "10%" }}>
      <div>
        <h1>¿Quiénes somos?</h1>
      </div>
      <div style={{ marginTop: "20%" }}>
        <button onClick={() => linkMarcos()}>
          <h3>Marcos Albarado</h3>
        </button>
      </div>
      <div style={{ marginTop: "10%" }}>
        <button onClick={() => linkNico()}>
          <h3>Nicolás Cardone</h3>
        </button>
      </div>
      <div style={{ marginTop: "10%" }}>
        <button onClick={() => linkEze()}>
          <h3>Ezequiel De Cunto</h3>
        </button>
      </div>
      <div style={{ marginTop: "10%" }}>
        <button onClick={() => linkSan()}>
          <h3>Santiago Ferro</h3>
        </button>
      </div>
      <div style={{ marginTop: "10%" }}>
        <button onClick={() => linkRodri()}>
          <h3>Rodrigo López</h3>
        </button>
      </div>
      <div style={{ marginTop: "10%" }}>
        <button onClick={() => linkKevin()}>
          <h3>Kevin Ordoñez</h3>
        </button>
      </div>
      <div style={{ marginTop: "10%" }}>
        <button onClick={() => linkSeba()}>
          <h3>Sebastián Torres</h3>
        </button>
      </div>
      <div style={{ marginTop: "10%" }}>
        <button onClick={() => linkVeiga()}>
          <h3>Santiago Veiga</h3>
        </button>
      </div>
    </div>
  );
};
