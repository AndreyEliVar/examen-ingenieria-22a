import styles from "../../Styles/App.module.css";
import SeccionRefrescos from "../../Components/SeccionRefrescos";
import SeccionDinero from "../../Components/SeccionDinero";
import DesgloseDinero from "../../Components/DesgloseDinero";
import {calcularTotal, calcularCambio} from "../../logic/Calculadora"
import {realizarVerificacionPago} from "../../logic/VerificadorErrores"
import { useState, useEffect } from "react";

function App() {
    const [montoPago, setMontoPago] = useState(0);
    const [montoTotal, setMontoTotal] = useState(0);
    const [vuelto, setVuelto] = useState(0);
    const [abiertoAlertaCantidad, setAbiertoAlertaCantidad] = useState(false);
    const [textoAlertaCantidad, setTextoAlertaCantidad] = useState("");
    const [abiertoAlertaPago, setAbiertoAlertaPago] = useState(false);
    const [textoAlertaPago, setTextoAlertaPago] = useState("");
    const [refrescosSeleccionados, setRefrescosSeleccionados] = useState([
        { nombre: "Coca-Cola", cantidad: 0 },
        { nombre: "Fanta", cantidad: 0 },
        { nombre: "Pepsi", cantidad: 0 },
        { nombre: "Sprite", cantidad: 0 },
    ]);

    useEffect(() => {
        setMontoTotal(calcularTotal(refrescosSeleccionados));
    }, [refrescosSeleccionados]);

    useEffect(() => {
      if (montoPago > 0 && montoTotal > 0) {
        let values = calcularCambio(montoTotal, montoPago);
        setVuelto(values.cambio);
      }
      if (montoPago === 0) {
        setVuelto(0);
      }
    }, [montoPago, montoTotal]);

    const handleClickPago = () => {
      let puedoPagar = realizarVerificacionPago(montoPago, montoTotal);
      if (puedoPagar.puedoPagar === false) {
        setAbiertoAlertaPago(true);
        setTextoAlertaPago(puedoPagar.error);
        setTimeout(() => {
          setAbiertoAlertaPago(false);
        }, 2500);
      }
    }

    return (
        <div className="App">
            <div className={styles.contenido}>
                <div className={styles.seccionSuperior}>
                    <SeccionRefrescos
                        refrescosSeleccionados={refrescosSeleccionados}
                        setRefrescosSeleccionados={setRefrescosSeleccionados}
                        setAbiertoAlertaCantidad={setAbiertoAlertaCantidad}
                        setTextoAlertaCantidad={setTextoAlertaCantidad}
                        abiertoAlertaCantidad={abiertoAlertaCantidad}
                        textoAlertaCantidad={textoAlertaCantidad}
                        cantidad="10"
                        precio="650"
                    />
                </div>
                <div className={styles.seccionInferior}>
                    <div className={styles.seccionDinero}>
                        <SeccionDinero
                            montoPago={montoPago}
                            setMontoPago={setMontoPago}
                        />
                    </div>
                    <div className={styles.seccionDesglose}>
                        <DesgloseDinero 
                          monto={montoTotal} 
                          vuelto={vuelto}
                          refrescosSeleccionados={refrescosSeleccionados}
                          setRefrescosSeleccionados={setRefrescosSeleccionados}
                          setAbiertoAlertaCantidad={setAbiertoAlertaCantidad}
                          setTextoAlertaCantidad={setTextoAlertaCantidad}
                          abiertoAlertaCantidad={abiertoAlertaCantidad}
                          textoAlertaCantidad={textoAlertaCantidad}
                          handleClickPago={handleClickPago}
                          abiertoAlertaPago={abiertoAlertaPago}
                          textoAlertaPago={textoAlertaPago}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
