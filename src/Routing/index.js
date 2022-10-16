import { Routes, Route } from 'react-router-dom';
import Welcome from '../Components/Pages/Welcome';
import Login from '../Components/Pages/Login';
import SingUp from '../Components/Pages/SingUp';
import { ComicContext } from '../Context/ComicsContext';
import { useContext } from 'react';
import Comics from '../Components/Pages/Comics';
// import Comics from '../Pages/Comics';
// import MisComics from '../Pages/MisComics';

// import NotFound from '../Pages/NotFound';
import Detail from '../Components/Pages/Detail';
import NotFound from '../Components/Pages/NotFound';

const Routing = (props) => {
    const {isLogin} = useContext(ComicContext);
    
    
    return (
        <>
            <Routes>
                <Route index element={isLogin?<Comics></Comics>:<Welcome />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path="/SingUp" element={<SingUp />}></Route>
                <Route path="/detail" >
                    <Route path=":character" element={<Detail />}></Route>
                </Route>
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/mis-comics" element={<Comics personal={true} />}> </Route>
                
            </Routes>
        </>
    )
}

export default Routing;
