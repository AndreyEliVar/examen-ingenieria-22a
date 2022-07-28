import styles from "../../Styles/DesgloseDinero.module.css";
import Button from "@mui/material/Button";
import TarjetaAlerta from "../../Components/TarjetaAlerta";
import { useState } from "react";

export default function DesgloseDinero(props) {
    const [abiertoAlerta1, setAbiertoAlerta1] = useState(false);
    const [abiertoAlerta2, setAbiertoAlerta2] = useState(false);
    const [textoAlerta1, setTextoAlerta1] = useState("");
    const [textoAlerta2, setTextoAlerta2] = useState("");

    const handleClickMenos = (nombre) => {
        props.setRefrescosSeleccionados(
            props.refrescosSeleccionados.map((refresco, index) => {
                if (refresco.nombre === nombre) {
                    return {
                        ...refresco,
                        cantidad: refresco.cantidad - 1,
                    };
                }
                return refresco;
            }
            )
        )
    }

    const handleClickMas = (nombre) => {
        props.setRefrescosSeleccionados(
            props.refrescosSeleccionados.map((refresco, index) => {
                if (refresco.nombre === nombre) {
                    return {
                        ...refresco,
                        cantidad: refresco.cantidad + 1,
                    };
                }
                return refresco;
            }
            )
        )
    }

    return (
        <div className={styles.contenido}>
            <h1 className={styles.titulo}>Desglose</h1>
            <div className={styles.desglose}>
            <TarjetaAlerta abierto={abiertoAlerta1} mensaje={textoAlerta1}/>
                {props.refrescosSeleccionados.map((refresco, index) => {
                    return refresco.cantidad > 0 ? (
                        <div className={styles.refresco} key={index}>
                            <div className={styles.textoDesglose}>
                                <span className={styles.nombreRefresco}>
                                    {refresco.nombre}
                                </span>
                                <Button
                                    variant="text"
                                    sx={{
                                        fontSize: "25px",
                                        fontFamily: "Roboto Slab",
                                        height: "15px",
                                        paddingBottom: "10px",
                                        color: "#FFFFFF",
                                    }}
                                    onClick={() => handleClickMenos(refresco.nombre)}
                                >
                                    -
                                </Button>
                                <span className={styles.T}>
                                    x {refresco.cantidad}
                                </span>
                                <Button
                                    variant="text"
                                    sx={{
                                        fontSize: "25px",
                                        fontFamily: "Roboto Slab",
                                        height: "15px",
                                        paddingBottom: "10px",
                                        color: "#FFFFFF",
                                    }}
                                    onClick={() => handleClickMas(refresco.nombre)}
                                >
                                    +
                                </Button>
                            </div>
                        </div>
                    ) : null;
                })}
            </div>
            <div className={styles.seccionValores}>
                <h1 className={styles.texto}>Costo Total: ₡ {props.monto}</h1>
                <h1 className={styles.texto}>Vuelto: ₡ {props.vuelto}</h1>
            </div>
            <div className={styles.seccionBotones}>
                <TarjetaAlerta abierto={abiertoAlerta2} mensaje={textoAlerta2} />
                <Button
                    sx={{
                        backgroundColor: "#1AB3F6",
                        width: "171px",
                        fontSize: "14px",
                        fontFamily: "Roboto Slab",
                    }}
                    
                    variant="contained"
                >
                    Pagar
                </Button>
            </div>
        </div>
    );
}
