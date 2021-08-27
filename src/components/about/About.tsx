/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
// import { AiFillLinkedin } from "react-icons/ai";
// import { AiFillLinkedin } from "react-icons/ai";

import Sebastian from "./Images/Sebastian.png";
import Marcos from "./Images/Marcos.jpg";
import SantiagoV from "./Images/SantiagoV.jpg";
import SantiagoF from "./Images/SantiagoF.jpg";
import Ezequiel from "./Images/Ezequiel.jpg";
import Kevin from "./Images/Kevin.jpg";
import Rodrigo from "./Images/Rodrigo.jpg";
import Nicolas from "./Images/Nicolas.jpg";
import styles from "./About.module.css";

export const About = () => {
  function linkMarcos() {
    window.open("https://www.linkedin.com/in/marcos-albarado-7b337820b/");
  }

  function linkMarcosGit() {
    window.open("https://github.com/GRIYO35");
  }

  function linkNico() {
    window.open("https://www.linkedin.com/in/nicolas-cardone/");
  }

  function linkNicoGit() {
    window.open("https://github.com/enodrac");
  }

  function linkEze() {
    window.open("https://www.linkedin.com/in/ezequieldecunto/");
  }

  function linkEzeGit() {
    window.open("https://github.com/Pinidecu");
  }

  function linkSan() {
    window.open("https://www.linkedin.com/in/santiago-ferro-fullstack/");
  }

  function linkSanGit() {
    window.open("https://github.com/hypekenny");
  }

  function linkRodri() {
    window.open("https://www.linkedin.com/in/rodrigolopezsmz/");
  }

  function linkRodriGit() {
    window.open("https://github.com/rodrigolopsmz");
  }

  function linkKevin() {
    window.open("https://www.linkedin.com/in/kevin-arian/");
  }

  function linkKevinGit() {
    window.open("https://github.com/Vashomaru");
  }

  function linkSeba() {
    window.open("https://www.linkedin.com/in/sebastiantorres-fullstack-react/");
  }

  function linkSebaGit() {
    window.open("https://github.com/SebastianTorres00");
  }

  function linkVeiga() {
    window.open("https://www.linkedin.com/in/santiagoveiga46/");
  }

  function linkVeigaGit() {
    window.open("https://github.com/sajave");
  }

  return (
    <div>
      <div>
        <h1>¿Quiénes somos?</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src={Sebastian}
            alt="Mike"
            style={{
              width: "70%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginLeft: "15%",
              marginTop: "3%",
            }}
          />
          <div className={styles.containerTwo}>
            <h2 className={styles.TitleH2}>Sebastian Torres</h2>

            <div
              style={{
                marginBottom: "3%",
                // background: "red",
                alignSelf: "center",
                marginLeft: "auto",
                marginRight: "auto",
                width: "80px",
              }}
            >
              <a
                onClick={linkSeba}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin className={styles.iconLinkedin} />
              </a>
              <a
                onClick={linkSebaGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub className={styles.iconGit} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={SantiagoV}
            alt="Mike"
            style={{
              width: "70%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginLeft: "15%",
              marginTop: "3%",
            }}
          />
          <div className={styles.containerTwo}>
            <h2 className={styles.TitleH2}>Santiago Veiga</h2>

            <div
              style={{
                marginBottom: "3%",
                // background: "red",
                alignSelf: "center",
                marginLeft: "auto",
                marginRight: "auto",
                width: "80px",
              }}
            >
              <a
                onClick={linkVeiga}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin className={styles.iconLinkedin} />
              </a>
              <a
                onClick={linkVeigaGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub className={styles.iconGit} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={SantiagoF}
            alt="Mike"
            style={{
              width: "70%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginLeft: "15%",
              marginTop: "3%",
            }}
          />
          <div className={styles.containerTwo}>
            <h2 className={styles.TitleH2}>Santiago Ferro</h2>

            <div
              style={{
                marginBottom: "3%",
                // background: "red",
                alignSelf: "center",
                marginLeft: "auto",
                marginRight: "auto",
                width: "80px",
              }}
            >
              <a
                onClick={linkSan}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin className={styles.iconLinkedin} />
              </a>
              <a
                onClick={linkSanGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub className={styles.iconGit} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={Nicolas}
            alt="Mike"
            style={{
              width: "70%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginLeft: "15%",
              marginTop: "3%",
            }}
          />
          <div className={styles.containerTwo}>
            <h2 className={styles.TitleH2}>Nicolás Cardone</h2>

            <div
              style={{
                marginBottom: "3%",
                // background: "red",
                alignSelf: "center",
                marginLeft: "auto",
                marginRight: "auto",
                width: "80px",
              }}
            >
              <a
                onClick={linkNico}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin className={styles.iconLinkedin} />
              </a>
              <a
                onClick={linkNicoGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub className={styles.iconGit} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={Kevin}
            alt="Mike"
            style={{
              width: "70%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginLeft: "15%",
              marginTop: "3%",
            }}
          />
          <div className={styles.containerTwo}>
            <h2 className={styles.TitleH2}>Kevin Ordoñez</h2>

            <div
              style={{
                marginBottom: "3%",
                // background: "red",
                alignSelf: "center",
                marginLeft: "auto",
                marginRight: "auto",
                width: "80px",
              }}
            >
              <a
                onClick={linkKevin}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin className={styles.iconLinkedin} />
              </a>
              <a
                onClick={linkKevinGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub className={styles.iconGit} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={Marcos}
            alt="Mike"
            style={{
              width: "70%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginLeft: "15%",
              marginTop: "3%",
            }}
          />
          <div className={styles.containerTwo}>
            <h2 className={styles.TitleH2}>Marcos Albarado</h2>

            <div
              style={{
                marginBottom: "3%",
                // background: "red",
                alignSelf: "center",
                marginLeft: "auto",
                marginRight: "auto",
                width: "80px",
              }}
            >
              <a
                onClick={linkMarcos}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin className={styles.iconLinkedin} />
              </a>
              <a
                onClick={linkMarcosGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub className={styles.iconGit} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={Ezequiel}
            alt="Mike"
            style={{
              width: "70%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginLeft: "15%",
              marginTop: "3%",
            }}
          />
          <div className={styles.containerTwo}>
            <h2 className={styles.TitleH2}>Ezequiel De Cunto</h2>

            <div
              style={{
                marginBottom: "3%",
                // background: "red",
                alignSelf: "center",
                marginLeft: "auto",
                marginRight: "auto",
                width: "80px",
              }}
            >
              <a
                onClick={linkEze}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin className={styles.iconLinkedin} />
              </a>
              <a
                onClick={linkEzeGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub className={styles.iconGit} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={Rodrigo}
            alt="Mike"
            style={{
              width: "70%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              marginLeft: "15%",
              marginTop: "3%",
            }}
          />
          <div className={styles.containerTwo}>
            <h2 className={styles.TitleH2}>Rodrigo López</h2>

            <div
              style={{
                marginBottom: "3%",
                // background: "red",
                alignSelf: "center",
                marginLeft: "auto",
                marginRight: "auto",
                width: "80px",
              }}
            >
              <a
                onClick={linkRodri}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin className={styles.iconLinkedin} />
              </a>
              <a
                onClick={linkRodriGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub className={styles.iconGit} />
              </a>
            </div>
          </div>
        </div>

        {/* aa */}
      </div>
    </div>
  );
};
