import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ButtonFavorite from "../../UI/ButtonFavorite";
import { ComicContext } from "../../../Context/ComicsContext";
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
const Comics = (props) => {

    //const { data, error, isError, isLoading } = useQuery("getData", getComics);
    const {user,coms,setComs} = useContext(ComicContext);
    
    const handleFavoriteItem = (id) =>{
        
        setComs(prevState => {
            // const itemIndex = prevState.findIndex(
            //     p = p.id === id         
            // )
            const newStatus = !coms[id].isFavorite;
            const update = [...prevState];
            update[id] = {
                ...prevState[id],isFavorite:newStatus
            };
            localStorage.setItem(user.userName+"list",JSON.stringify(update));
            return update;
        });
        console.log("Coms",coms);

    }


    return (

        
        
        <div className="container">
            <div className="text-center">
                {console.log("personal",props.personal)}
                {console.log("nombre",user?.name)}
                {!props?.personal?<h1>Colección de comics Marvel</h1>:<h1>Colección de comics de favoritos<br />{user?.name}</h1>}
                
                <hr />
            </div>
            <div className="row d-flex justify-content-center">

                {coms && coms.length > 0 && coms.filter(item=>{
                    if (props?.personal){
                        return item.isFavorite === true
                    }else{
                        return true
                    }
                }).map((item, index) => (

                    <Card className="m-2" style={{ width: '18rem' }} key={item.id}>
                        
                        <Card.Img variant="top" src={item.thumb} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>

                            <Card.Text>
                                {item?.description}
                            </Card.Text>
                            <hr />
                            <div className="text-center d-flex justify-content-between">
                                <Link className="btn btn-dark" to={`/detail/${item.id}`}>Ver mas</Link>
                                
                                {props?.personal&&<Button className={"btn btn-danger"}
                                    onClick={()=>{
                                        const id = coms.findIndex(
                                            comicItem => {
                                                return comicItem.id === item.id;
                                            }
                                        )
                                        handleFavoriteItem(id);
                                    }}
                                >Eliminar</Button>}
                                {!props?.personal&&<ButtonFavorite
                                    id={index}
                                    favorite={item.isFavorite}
                                    onFavorite ={handleFavoriteItem}
                                ></ButtonFavorite>}    
                                
                            </div>

                        </Card.Body>
                    </Card>
                ))}

            </div>
        </div>


    )


}

export default Comics;