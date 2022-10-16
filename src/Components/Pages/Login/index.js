import css from "./css/styles.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect } from "react";
import { ComicContext } from "../../../Context/ComicsContext.jsx";
import { useContext } from "react";

const Login = (props) => {
    const {isLogin, updateLogin, updateUser} = useContext(ComicContext);
    const navigate = useNavigate();
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [flagSend, setFlag] = useState(false);
    //const [user,setUser] = useState(null);
    const [error, setErrors] = useState({
        userName: "",
        password: "",
        userExist: ""
    });
    const regExpCorreo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

    useEffect(() => {

        if (isLogin ) {
            navigate("/")
         }
    }, [isLogin]);


    const handleSubmit = (e) => {
        e.preventDefault();
        
        setFlag(true);
        let errorPassword = "";
        let errorUser = "";
        let userExist = false;
        let errorLogin = "";
        // check a array of users of that not exist we create a one
        if (!regExpCorreo.test(userName)) {
            errorUser = "el correo no es valido";
        } else {
            errorUser = "";
        }

        if (password.length < 6) {
            errorPassword = "La contrasena debe tener mas de 6 caracteres";
        }
        // get system users
        let users = [];
        users = localStorage.getItem("users");


        if (users.length > 0) {
            users = JSON.parse(users);
            for (const key in users) {
                if (users[key].userName === userName && users[key].password === password) {
                    console.log("user found");
                    localStorage.setItem("user", JSON.stringify(users[key]))
                    userExist = true;
                    updateLogin(true)
                    updateUser(users[key]);
                    navigate("/");
                }
            }
        }

        if (!userExist) {
            errorLogin = "Usuario no encontrado revisa tus datos";
        }

        setErrors({ ...error, userName: errorUser, password: errorPassword, userExist: errorLogin });


    };


    return (
        <>
            <div className="container">
                <div className="row p-3 d-flex justify-content-center">
                    <Form onSubmit={handleSubmit} variant="dark" className={`col-12 col-sm-8 col-m-6 ${css.form}`}>
                        <div className="text-center">
                            <h1 className="text-center">Ingresa a marvel comics</h1>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electroinico</Form.Label>
                            <Form.Control type="text"
                                name="userName"
                                value={userName}
                                onChange={(e) => setuserName(e.target.value)}
                                placeholder="correo electronico"
                                className={flagSend ? (error?.userName ? "is-invalid" : (error?.userExist ? "is-invalid" : "is-valid")) : ""}
                            // className={error?.userName?"is-invalid":""}
                            />
                            <div className="text-danger">
                                {error?.userName}
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password"
                                name="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="contraseña"
                                className={flagSend ? (error?.password ? "is-invalid" : (error?.userExist ? "is-invalid" : "is-valid")) : ""}
                            />
                            <div className="text-danger">
                                {error?.password}
                            </div>
                        </Form.Group>


                        <div className="text-center">
                            <Button variant="dark" type="submit">
                                Ingresar
                            </Button>
                            <div className="text-danger">
                                {error?.userExist}
                            </div>
                        </div>

                    </Form>

                </div>
            </div>

        </>
    );
}

export default Login;