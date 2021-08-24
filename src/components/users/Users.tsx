import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState, user } from "../constants/types";
import styles from "./UsersStyles.module.css";
import constants from "../constants/constants.module.css";
import { useState } from "react";
import { createUser, getUsers, manageUser } from "../../redux/actions";
import { useEffect } from "react";
import { MdDelete, MdDeleteForever, MdEdit } from "react-icons/md";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

export function Users() {
  const allUsers = useSelector((state: rootState) => state.user);
  const token = useSelector((state: rootState) => state.token);

  const [userToUpdate, setUserToUpdate] = useState(-1);
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    lastName: "",
    dni: "",
    phoneNumber: "",
    birthdate: "",
    address: {},
  });
  const [newAddress, setNewAddress] = useState({
    street: "",
    number: "",
    zipCode: "",
    city: "",
    province: "",
  });
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState<user[]>([]);
  const [undisabled, setUndisabled] = useState<user[]>([]);
  const dispatch = useDispatch();
  const [view, setView] = useState("all");

  function handleChangeUser(e: any) {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  function handleChangeAddress(e: any) {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  }

  async function handleCreate() {
    setTimeout(() => {
      dispatch(createUser(newUser, newAddress, password));
    }, 500);
  }

  async function addDisabled(user: user) {
    // setDeleted([...deleted, user]); por algun motivo no funciona
    disabled.push(user);
  }

  async function handleDisabled() {
    manageUser(disabled, "disabled", token, dispatch);
    update();
  }

  async function addUndisabled(user: user) {
    // setDeleted([...deleted, user]); por algun motivo no funciona
    undisabled.push(user);
  }

  async function handleUndisabled() {
    manageUser(undisabled, "active", token, dispatch);
    update();
  }

  function update() {
    setTimeout(() => {
      dispatch(getUsers(token));
    }, 500);
  }

  useEffect(() => {
    wipeData();
  }, [allUsers]);

  function wipeData() {
    setView("active");
    setPassword("");
    setNewUser({
      email: "",
      name: "",
      lastName: "",
      dni: "",
      phoneNumber: "",
      birthdate: "",
      address: {},
    });
    setNewAddress({
      street: "",
      number: "",
      zipCode: "",
      city: "",
      province: "",
    });
  }
  function empty(con: string) {
    let empty = true;
    allUsers.forEach((u) => {
      if (con === "all" && u) empty = false;
      if (u.condition === con) empty = false;
    });
    return empty;
  }

  return (
    <div className={styles.container}>
      {view === "all" || view === "active" || view === "disabled" ? (
        <div className={styles.containerList}>
          <div>
            <h1>Lista de usuarios</h1>
            <div className={styles.buttons}>
              <button
                className={styles.btn}
                onClick={() => {
                  setView("all");
                  wipeData();
                }}
              >
                Todos
              </button>
              <button
                className={styles.btn}
                onClick={() => {
                  setView("active");
                  wipeData();
                }}
              >
                Activos
              </button>

              <button
                className={styles.btn}
                onClick={() => setView("disabled")}
              >
                Desactivados
              </button>

              <button className={styles.btn} onClick={() => setView("create")}>
                Crear Nuevo
              </button>
            </div>
          </div>
          <div className={styles.main}>
            <table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>DNI</th>
                  <th>Telefono</th>
                  <th>Nacimiento</th>
                  <th className={styles.ancho}>Condicion</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {allUsers &&
                  allUsers.map((user, i) =>
                    user.condition === view || view === "all" ? (
                      <tr className={styles.fila}>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.dni}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.birthdate}</td>
                        <td>
                          <div className={styles.condition}>
                            <div>{user.condition}</div>
                            {view === "active" ? (
                              <div>
                                <button
                                  className={styles.disableBtn}
                                  onClick={() => {
                                    addDisabled(user);
                                    setTimeout(() => {
                                      handleDisabled();
                                    }, 500);
                                  }}
                                >
                                  <MdDelete className={styles.disableIcon} />
                                </button>
                              </div>
                            ) : null}
                            {view === "disabled" ? (
                              <div>
                                <button
                                  className={styles.disableBtn}
                                  onClick={() => {
                                    addUndisabled(user);
                                    setTimeout(() => {
                                      handleUndisabled();
                                    }, 500);
                                  }}
                                >
                                  <MdDeleteForever
                                    className={styles.disableIcon}
                                  />
                                </button>
                              </div>
                            ) : null}
                          </div>
                        </td>
                        <td>
                          <div>
                            <button
                              className={styles.disableBtn}
                              onClick={() => {
                                setUserToUpdate(i);
                                setView("update");
                              }}
                            >
                              <MdEdit className={styles.updateIcon} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ) : null
                  )}
                {empty(view) ? (
                  <tr>
                    <th className={styles.filaUnica} colSpan={8}>
                      No se encontraton usuarios
                    </th>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {view === "create" ? (
        <div className={styles.createContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.label}>
              <label>email : </label>
              <input
                className={styles.input}
                type="text"
                name="email"
                value={newUser.email}
                onChange={handleChangeUser}
              />
            </div>
            <div className={styles.label}>
              <label>contraseña : </label>
              <input
                className={styles.input}
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.label}>
              <label>nombre :</label>
              <input
                className={styles.input}
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleChangeUser}
              />
            </div>
            <div className={styles.label}>
              <label>apellido :</label>
              <input
                className={styles.input}
                type="text"
                name="lastName"
                value={newUser.lastName}
                onChange={handleChangeUser}
              />
            </div>
            <div className={styles.label}>
              <label>dni :</label>
              <input
                className={styles.input}
                type="text"
                name="dni"
                value={newUser.dni}
                onChange={handleChangeUser}
              />
            </div>
            <div className={styles.label}>
              <label>telefono :</label>
              <input
                className={styles.input}
                type="text"
                name="phoneNumber"
                value={newUser.phoneNumber}
                onChange={handleChangeUser}
              />
            </div>
            <div className={styles.label}>
              <label>fecha de nacimiento :</label>
              <input
                className={styles.input}
                type="text"
                name="birthdate"
                value={newUser.birthdate}
                onChange={handleChangeUser}
              />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.label}>
              <label>calle : </label>
              <input
                className={styles.input}
                type="text"
                name="street"
                value={newAddress.street}
                onChange={handleChangeAddress}
              />
            </div>
            <div className={styles.label}>
              <label>numero :</label>
              <input
                className={styles.input}
                type="text"
                name="number"
                value={newAddress.number}
                onChange={handleChangeAddress}
              />
            </div>
            <div className={styles.label}>
              <label>codigo postal :</label>
              <input
                className={styles.input}
                type="text"
                name="zipCode"
                value={newAddress.zipCode}
                onChange={handleChangeAddress}
              />
            </div>
            <div className={styles.label}>
              <label>localidad :</label>
              <input
                className={styles.input}
                type="text"
                name="city"
                value={newAddress.city}
                onChange={handleChangeAddress}
              />
            </div>
            <div className={styles.label}>
              <label>provincia :</label>
              <input
                className={styles.input}
                type="text"
                name="province"
                value={newAddress.province}
                onChange={handleChangeAddress}
              />
            </div>
            <button className={styles.createBtn} onClick={() => handleCreate()}>
              CREATE
            </button>
          </div>
        </div>
      ) : null}
      {view === "update" ? (
        <div className={styles.createContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.label}>
              <label>nombre :</label>
              <input
                className={styles.input}
                type="text"
                name="name"
                value={allUsers[userToUpdate].name}
                onChange={handleChangeUser}
              />
            </div>
            <div className={styles.label}>
              <label>apellido :</label>
              <input
                className={styles.input}
                type="text"
                name="lastName"
                value={allUsers[userToUpdate].lastName}
                onChange={handleChangeUser}
              />
            </div>
            <div className={styles.label}>
              <label>dni :</label>
              <input
                className={styles.input}
                type="text"
                name="dni"
                value={allUsers[userToUpdate].dni}
                onChange={handleChangeUser}
              />
            </div>
            <div className={styles.label}>
              <label>telefono :</label>
              <input
                className={styles.input}
                type="text"
                name="phoneNumber"
                value={allUsers[userToUpdate].phoneNumber}
                onChange={handleChangeUser}
              />
            </div>
            <div className={styles.label}>
              <label>fecha de nacimiento :</label>
              <input
                className={styles.input}
                type="text"
                name="birthdate"
                value={allUsers[userToUpdate].birthdate}
                onChange={handleChangeUser}
              />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.label}>
              <label>calle : </label>
              <input
                className={styles.input}
                type="text"
                name="street"
                value={allUsers[userToUpdate].address.street}
                onChange={handleChangeAddress}
              />
            </div>
            <div className={styles.label}>
              <label>numero :</label>
              <input
                className={styles.input}
                type="text"
                name="number"
                value={allUsers[userToUpdate].address.number}
                onChange={handleChangeAddress}
              />
            </div>
            <div className={styles.label}>
              <label>codigo postal :</label>
              <input
                className={styles.input}
                type="text"
                name="zipCode"
                value={allUsers[userToUpdate].address.zipCode}
                onChange={handleChangeAddress}
              />
            </div>
            <div className={styles.label}>
              <label>localidad :</label>
              <input
                className={styles.input}
                type="text"
                name="city"
                value={allUsers[userToUpdate].address.city}
                onChange={handleChangeAddress}
              />
            </div>
            <div className={styles.label}>
              <label>provincia :</label>
              <input
                className={styles.input}
                type="text"
                name="province"
                value={allUsers[userToUpdate].address.province}
                onChange={handleChangeAddress}
              />
            </div>
            <button className={styles.createBtn} onClick={() => handleCreate()}>
              UPDATE
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
