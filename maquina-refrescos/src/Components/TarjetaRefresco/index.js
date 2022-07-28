import styles from "../../Styles/TarjetaRefresco.module.css";

export default function TarjetaRefresco(props) {
    return (
        <div className={styles.contenido}>
            <img
                onClick={props.onClick}
                className={styles.imagen}
                src={props.imagen}
                alt="refresco"
            />
            <div className={styles.texto}>
                <h1 className={styles.cantidad}>{props.cantidad}</h1>
                <h2 className={styles.precio}>Precio: ₡ {props.precio}</h2>
            </div>
        </div>
    );
}
