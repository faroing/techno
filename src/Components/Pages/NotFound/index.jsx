import css from "./css/styles.module.css";
function NotFound() {
    return (  
        <div className={`text-center" ${css.found}`}>
            <h1>Página no encontrada</h1>
            <h1>404</h1>
        </div>
        
    );
}

export default NotFound;