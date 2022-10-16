import css from './css/styles.module.css';

const Loading = props => {
    return (  
        <div className={css.loading}>
            {props.children}
        </div>
    );
}

export default Loading;