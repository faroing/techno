import css from "./css/styles.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ComicContext } from "../../../Context/ComicsContext";
import { useContext } from "react";

const SingUp = (props) => {

    const {updateUser,updateLogin} = useContext(ComicContext);
    
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [nip, setNip] = useState("");
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");
    const [flagSend, setFlag] = useState(false);

    const [error, setErrors] = useState({
        name: "",
        nip: "",
        userName: "",
        password: "",
        userExist: ""
    });

    const regExpCorreo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    const regExpNip = /^[1-9][0-9]{3,9}$/;

    const handleSubmit = (e) => {
        e.preventDefault();

        setFlag(true);
        let errorPassword = "";
        let errorUser = "";
        let errorName = "";
        let errorNip = "";
        let userExist = false;
        // check a array of users of that not exist we create a one
        if (localStorage.getItem("users") === null) {
            localStorage.setItem("users", []);
        }

        if (!regExpCorreo.test(userName)) {
            errorUser = "el correo no es valido";


        } else {
            errorUser = "";
        }

        if (password.length < 6) {
            errorPassword = "La contrasena debe tener más de 6 caracteres";


        } else if (password !== confirmPassword) {
            errorPassword = "La contraseña no coincide"
        }

        if (name.length < 6) {
            errorName = "El nombre debe tener más de 6 caracteres";
        } else {
            errorName = "";
        }

        if (!regExpNip.test(nip) | nip.length < 6) {

            errorNip = "la identificación no es valida";
        } else {
            errorNip = "";
        }

        // get system users
        let users = [];
        users = localStorage.getItem("users");

        if (users.length > 0) {
            users = JSON.parse(users);
            for (const key in users) {
                if (users[key].userName === userName) {
                    userExist = true;
                }
            }
        }

        if (userExist) {
            errorUser = "El usuario ya esta registrado";
        }

        setErrors({ ...error, userName: errorUser, password: errorPassword, nip: errorNip, name: errorName });


        if (errorPassword === "" && errorUser === "" && errorNip === "" && errorName === "") {

            localStorage.setItem("users", JSON.stringify([...users, {name:name,nip:nip, userName: userName, password: password }]));
            localStorage.setItem("user", JSON.stringify({name:name,nip:nip, userName: userName, password: password }));
            updateLogin(true);
            updateUser({name:name,nip:nip, userName: userName, password: password });
            navigate("/");

        }

    };


    return (
        <>


            <Form onSubmit={handleSubmit} variant="dark" className={css.form}>
                <div className="text-center">
                    <h1 className="text-center">Registro de usuario</h1>
                </div>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electroinico</Form.Label>
                    <Form.Control type="text"
                        name="userName"
                        value={userName}
                        onChange={(e) => setuserName(e.target.value)}
                        placeholder="correo electronico"
                        className={flagSend ? (error?.userName.length > 0 ? "is-invalid" : "is-valid") : ""}

                    />
                    <div className="text-danger">
                        {error?.userName}
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombres y apellidos"
                        className={flagSend ? (error?.name.length > 0 ? "is-invalid" : "is-valid") : ""}

                    />
                    <div className="text-danger">
                        {error?.name}
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNip">
                    <Form.Label>Identificación</Form.Label>
                    <Form.Control type="text"
                        name="nip"
                        value={nip}
                        onChange={(e) => setNip(e.target.value)}
                        placeholder="Identifiación"
                        className={flagSend ? (error?.nip.length > 0 ? "is-invalid" : "is-valid") : ""}

                    />
                    <div className="text-danger">
                        {error?.nip}
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password"
                        name="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="contraseña"
                        className={flagSend ? (error?.password ? "is-invalid" : "is-valid") : ""}
                    />
                    <div className="text-danger">
                        {error?.password}
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control type="password"
                        name="ConfirmPassword"
                        onChange={(e) => setConfirmpassword(e.target.value)}
                        placeholder="confirmar contraseña"
                        className={flagSend ? (error?.password ? "is-invalid" : "is-valid") : ""}
                    />
                </Form.Group>

                <div className="text-center">
                    <Button variant="dark" type="submit">
                        Registrar
                    </Button>
                </div>

            </Form>
        </>
    );
}

export default SingUp;