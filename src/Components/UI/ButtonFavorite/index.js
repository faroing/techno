import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import Button from "react-bootstrap/Button";

function ButtonFavorite(props) {
    
    const handleFavorite = () =>{
        props.onFavorite(props.id);
    }

    return (
        <Button variant={props.favorite ? "success" : "danger"} onClick={handleFavorite}><BsFillEmojiHeartEyesFill /></Button>
    );
}

export default ButtonFavorite;