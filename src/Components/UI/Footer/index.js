import css from "./css/styles.module.css"

const Footer = (props) => {

    return(
        <>
            <footer className={css.footer}>
                {props.children}
            </footer>
        </>
    )

}

export default Footer;