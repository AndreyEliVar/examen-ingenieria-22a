import Monedas from '../../Data/Monedas';
import BotonDinero from '../BotonDinero';
import Button from '@mui/material/Button';
import styles from '../../Styles/SeccionDinero.module.css';


export default function SeccionDinero(props) {
    return (
        <div className={styles.contenido}>
            <div className={styles.deleteSelections}>
                <Button sx={{backgroundColor: "#1AB3F6", width: "265px", fontSize: "14px", fontFamily: "Roboto Slab"}} variant="contained">Eliminar Dinero Ingresado</Button>
            </div>
            <div className={styles.mapButtons}>
            {
                Monedas.map((moneda, index) => {
                    return (
                        moneda.valor === 1000 ? null :
                        <div className={styles.button} key={index}>
                            <BotonDinero cantidad={moneda.valor} />
                        </div>
                    )
                })
            }
                <div className={styles.text}>
                    <h1>Monto Ingresado: {props.monto}</h1>
                </div>
            </div>
            
        </div>
    );
}