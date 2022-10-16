import { useState } from "react";
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import Button from "react-bootstrap/Button";

function ButtonFavorite(props) {

    const [isInList, setIsInList] = useState(props.isInList);
    
    const checkInList = (value) => {
        setIsInList(value)
    }

    return (
        <Button id={props.id} variant={isInList ? "success" : "danger"} onClick={props.onClick()}><BsFillEmojiHeartEyesFill /></Button>

    );
}

export default ButtonFavorite;