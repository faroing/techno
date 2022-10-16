//const slideimage from "";
import css from './css/styles.module.css'
import marvelImage from './img/image.jpeg';

const Welcome = (props) => {
    
    return (
        <>
        <div className={`container text-center`}>
                <h3>Welcome to marvel comics fan page</h3>    
        </div>
        <div className={css.welcome}>
            <img src={marvelImage} alt="Welcome to marvel comics fan page" className={css.image}/>  
        </div>
        
        
        
        </>
    )
    
}


export default Welcome;