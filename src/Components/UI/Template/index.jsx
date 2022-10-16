import Header from "../Header";
import Footer from '../Footer'
import Routing from '../../../Routing';
import css from './css/styles.module.css';
import { ComicContext } from "../../../Context/ComicsContext";
import { useContext } from "react";
import Loading from "../Loading";
import Spinner from 'react-bootstrap/Spinner';
import Logo from "../Logo";
import { useEffect } from "react";

const Template = (props) => {

    const { loading } = useContext(ComicContext);
    useEffect(()=>{
        if(!loading){
            // if (localStorage.getItem("user")!==null){
        //     setUser(JSON.parse(localStorage.getItem("user")));
        //     setIsLogin(true);
        // }
        }
    },[loading])


    return (
        <>
            {
                loading &&
                <Loading>
                    <div className="text-center">
                        <Logo />
                        <br /><br />
                        Loading...
                        <br /><br />
                        <Spinner animation="border" variant="light" />  
                    </div>
                </Loading>
            }
            {
                !loading &&
                <>
                    < Header />
                    < Routing />
                    <Footer >
                        Todos los derechos reservados Marvel 2022 - Javier Rodriguez Diaz
                    </Footer>
                </>
            }

        </>
    )


}


export default Template;