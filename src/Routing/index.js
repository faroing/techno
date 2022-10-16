import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Components/Pages/Login';
import Welcome from '../Components/Pages/Welcome';
// import Comics from '../Pages/Comics';
// import MisComics from '../Pages/MisComics';
// import SingUp from '../Pages/SingUp';
// import NotFound from '../Pages/NotFound';
// import Detail from '../Pages/Detail';
const Routing = (props) => {

    return (
        <>
            <Routes>
                <Route index element={<Welcome />}></Route>
                <Route path='/login' element={<Login />}></Route>
                {/* <Route index element={<Comics />}></Route>
                <Route path="/mis-comics" element={<MisComics />}> </Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/SingUp" element={<SingUp />}></Route>
                <Route path="/detail" >
                    <Route path=":character" element={<Detail />}></Route>
                </Route>
                <Route path="*" element={<NotFound />}></Route> */}
            </Routes>
        </>
    )
}

export default Routing;
