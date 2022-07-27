import styles from '../../Styles/SeccionRefrescos.module.css'
import TarjetaRefresco from '../../Components/TarjetaRefresco';
import Button from '@mui/material/Button';
import Refrescos from '../../Data/Refrescos';

export default function SeccionRefrescos(props) {


  const handleClick = () => {
    console.log("Hi Im a button");
  }

  return (
    <div >
        <div className={styles.contenido}>
        <div className={styles.button}>
                <Button sx={{backgroundColor: "#1AB3F6", width: "235px"}} variant="contained">Eliminar Seleccionados</Button>
        </div>
        <div className={styles.cards}>
            
        {
                Refrescos.map((refresco, index) => {
                    return (
                        <div className={styles.tarjeta} key={index}>
                            <TarjetaRefresco onClick={handleClick} cantidad={refresco.cantidad} precio={refresco.precio} imagen={refresco.imagen} />
                        </div>
                    )
                }
                )
        }
        </div>
        </div>
    </div>
  );
} 