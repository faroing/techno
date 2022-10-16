import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ComicContext } from "../../../Context/ComicsContext";
import { useContext } from "react";
import { useEffect,useState } from "react";

const Detail = (props) => {
    
    
    const {coms,setComs,user} = useContext(ComicContext);
    let { character } = useParams();
    const [data,setData] = useState(null);
    
    const handleFavorite = (id) =>{

        const index = coms.findIndex(
            comic => {
                return comic.id === character*1;
            }
        )
        
        
        setComs(prevState => {
        
            const newStatus = !coms[index].isFavorite;
            const update = [...prevState];
            update[index] = {
                ...prevState[index],isFavorite:newStatus
            };
            localStorage.setItem(user.userName+"list",JSON.stringify(update));
            return update;
        });

    }

    useEffect(()=>{

        setData(coms.find(
            comic => {
                return comic.id === character*1;
            }
        ))

    },[coms,character])

    return (
        <>
        
            {
                
                data ?
                    <div className="row">
                        <div className="col-12 col-md-12 text-center">
                            <h2>{data?.title}</h2>
                            
                                { <a href={data?.url} target="_blanck" alt="detail" className="color-black"> Details en marvel.com</a> }
                                <Link to="/" className="btn btn-dark ms-3">Regresar</Link>
                            <hr />
                        </div>
                        <div className="col-12 col-md-4 d-flex">
                            {data?.thumb && <img className="w-100" src={data?.thumb} alt="Comic description"></img>}
                        </div>
                        <div className="col-12 col-md-8 ">
                            <h2 className="text-center">Details del comic</h2>
                            <p className="fs-3">
                                {data?.description}
                            </p>
                            <hr />
                            <div className="text-center">
                                <Button type="button" className={data.isFavorite?"btn btn-success":"btn btn-danger"} onClick={()=>{
                                    handleFavorite(data.id);
                                }}>Agregar a favoritos</Button>
                            </div>

                        </div>
                    </div>


                    : <h1>Loading....</h1>
            }
        </>
    );
}

export default Detail;

