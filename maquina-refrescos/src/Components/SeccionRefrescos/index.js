import styles from '../../Styles/SeccionRefrescos.module.css'
import TarjetaRefresco from '../../Components/TarjetaRefresco';
import Button from '@mui/material/Button';

export default function SeccionRefrescos(props) {

    let refrescos = [
        {
            id: 1,
            cantidad: 10,
            precio: 650,
            imagen: '/Refrescos/coca-cola-2.png'
        },
        {
            id: 2,
            cantidad: 10,
            precio: 650,
            imagen: '/Refrescos/fanta.png'
        },
        {
            id: 3,
            cantidad: 10,
            precio: 650,
            imagen: '/Refrescos/pepsi.png'
        },
        {
            id: 4,
            cantidad: 10,
            precio: 650,
            imagen: '/Refrescos/sprite.png'
        }
    ]

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
                refrescos.map((refresco, index) => {
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