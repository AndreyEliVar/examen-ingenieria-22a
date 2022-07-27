import styles from '../../Styles/DesgloseDinero.module.css';
import Button from '@mui/material/Button';


export default function DesgloseDinero(props) {
        

    return (
        <div className={styles.contenido}>
            <h1 className={styles.titulo}>Desglose</h1>
            <div className={styles.desglose}>
            
            </div>
            <div className={styles.seccionValores}>
                <h1 className={styles.texto}>Costo Total: ₡ {props.monto}</h1>
                <h1 className={styles.texto} >Vuelto: ₡ {props.vuelto}</h1>
            </div>
            <div className={styles.seccionBotones}>
                <Button sx={{backgroundColor: "#1AB3F6", width: "171px", fontSize: "14px", fontFamily: "Roboto Slab"}} variant="contained">Pagar</Button>            
            </div>
        </div>
    );
}