import css from "./css/css.module.css";
import Logo from "../Logo";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from "react-router-dom";
import { ComicContext } from '../../../Context/ComicsContext';
import { useContext } from "react";

const Header = (props) => {
  const navigate = useNavigate();
  const {user,isLogin,updateLogin,updateUser} = useContext(ComicContext);
  
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    updateLogin(false);
    updateUser(null);
    navigate("/logIn");
    
  }

  return (
    <>
      <header className={css.header}>
        <nav className="container">
          <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand >
                  <Logo />
                </Navbar.Brand>
              </LinkContainer >

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {isLogin && <>
                    
                    <LinkContainer to="/mis-comics">
                      <Nav.Link>
                        Mis Comics
                      </Nav.Link>
                    </LinkContainer >
                  </>
                  }
                  {!isLogin && <>
                    <LinkContainer to="/login">
                      <Nav.Link>
                        Ingresar
                      </Nav.Link>
                    </LinkContainer >
                    <LinkContainer to="/SingUp">
                      <Nav.Link>
                        Registrarce
                      </Nav.Link>
                    </LinkContainer >
                  </>
                  }

                  {isLogin && <>
                    <Nav.Link >
                      Bienvenido {user?.name} | 
                    </Nav.Link >
                    <Nav.Link onClick={handleLogOut}>
                      Salir
                    </Nav.Link>
                  </>
                  }




                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* <Nav defaultActiveKey="/" as="ul" className={css.menu}>
            <Nav.Item as="li">
              <Link to="/mis-comics">Mis Comics</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/comics-actaule">Todo los comics marvel</Link>
            </Nav.Item>
          </Nav>         */}
          {/* <div>
          <Link to="/">
            <Logo />
          </Link>
        </div> */}
          {/* <div>
          <Link to="/login">login</Link> | <Link to="/singin">registrate</Link>  
        </div> */}

        </nav>

      </header>
    </>
  )
}


export default Header;