import styles from '../../Styles/TarjetaRefresco.module.css'
import Box from '@mui/material/Box';

export default function TarjetaRefresco(props) {
  return (
    <div className={styles.contenido}>
        <img className={styles.imagen} src="/Refrescos/fanta.png" alt='refresco' />
        <div className={styles.texto}>
          <h1 className={styles.cantidad}>{props.cantidad}</h1>
          <h2 className={styles.precio}>Precio: ₡ {props.precio}</h2>
        </div>
    </div>
  );
}