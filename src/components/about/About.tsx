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

  function linkSebaGit() {
    window.open("https://github.com/SebastianTorres00");
  }

  function linkVeiga() {
    window.open("https://www.linkedin.com/in/santiagoveiga46/");
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
              }}
            >
              <a
                onClick={linkSeba}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#0A66C2",
                    marginLeft: "10%",
                    marginRight: "-13%",
                  }}
                />
              </a>
              <a
                onClick={linkSebaGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#22272E",
                    marginLeft: "20%",
                  }}
                />
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
              }}
            >
              <a
                onClick={linkSeba}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#0A66C2",
                    marginLeft: "10%",
                    marginRight: "-13%",
                  }}
                />
              </a>
              <a
                onClick={linkSebaGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#22272E",
                    marginLeft: "20%",
                  }}
                />
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
              }}
            >
              <a
                onClick={linkSeba}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#0A66C2",
                    marginLeft: "10%",
                    marginRight: "-13%",
                  }}
                />
              </a>
              <a
                onClick={linkSebaGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#22272E",
                    marginLeft: "20%",
                  }}
                />
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
            <h2 className={styles.TitleH2}>Nicolas Cardone</h2>

            <div
              style={{
                marginBottom: "3%",
              }}
            >
              <a
                onClick={linkSeba}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#0A66C2",
                    marginLeft: "10%",
                    marginRight: "-13%",
                  }}
                />
              </a>
              <a
                onClick={linkSebaGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#22272E",
                    marginLeft: "20%",
                  }}
                />
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
              }}
            >
              <a
                onClick={linkSeba}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#0A66C2",
                    marginLeft: "10%",
                    marginRight: "-13%",
                  }}
                />
              </a>
              <a
                onClick={linkSebaGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#22272E",
                    marginLeft: "20%",
                  }}
                />
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
              }}
            >
              <a
                onClick={linkSeba}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#0A66C2",
                    marginLeft: "10%",
                    marginRight: "-13%",
                  }}
                />
              </a>
              <a
                onClick={linkSebaGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#22272E",
                    marginLeft: "20%",
                  }}
                />
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
            <h2 className={styles.TitleH2}>Rodrigo Lopez</h2>

            <div
              style={{
                marginBottom: "3%",
              }}
            >
              <a
                onClick={linkSeba}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#0A66C2",
                    marginLeft: "10%",
                    marginRight: "-13%",
                  }}
                />
              </a>
              <a
                onClick={linkSebaGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#22272E",
                    marginLeft: "20%",
                  }}
                />
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
              }}
            >
              <a
                onClick={linkSeba}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillLinkedin
                  style={{ width: "10%", height: "10%", color: "#0A66C2" }}
                />
              </a>
              <a
                onClick={linkSebaGit}
                style={{
                  cursor: "pointer",
                }}
              >
                <AiFillGithub
                  style={{
                    width: "10%",
                    height: "10%",
                    color: "#22272E",
                    marginLeft: "20%",
                  }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* aa */}
      </div>
    </div>
  );
};
