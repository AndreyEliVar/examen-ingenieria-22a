import styles from '../../Styles/SeccionRefrescos.module.css'
import TarjetaRefresco from '../../Components/TarjetaRefresco';
import Button from '@mui/material/Button';
import Refrescos from '../../Data/Refrescos';

export default function SeccionRefrescos(props) {


  const handleClick = (name) => {
    props.setRefrescosSeleccionados(
      props.refrescosSeleccionados.map((refresco, index) => {
        if (refresco.nombre === name) {
          return {
            ...refresco,
            cantidad: refresco.cantidad + 1
          }
        }
        return refresco;
      })
    );
  }

  return (
    <div >
        <div className={styles.contenido}>
        <div className={styles.button}>
                <Button sx={{backgroundColor: "#1AB3F6", width: "235px", fontSize: "14px", fontFamily: "Roboto Slab"}} variant="contained">Eliminar Seleccionados</Button>
        </div>
        <div className={styles.cards}>
            
        {
                Refrescos.map((refresco, index) => {
                    return (
                        <div className={styles.tarjeta} key={index}>
                            <TarjetaRefresco onClick={() => handleClick(refresco.nombre)} cantidad={refresco.cantidad} precio={refresco.precio} imagen={refresco.imagen} />
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