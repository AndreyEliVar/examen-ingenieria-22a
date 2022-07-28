import Refrescos from "../Data/Refrescos";
import Monedas from "../Data/Monedas";
import { calcularCambio } from "./Calculadora";

export function pago(refrescosSeleccionados, montoPago, montoTotal) {
    let vuelto = calcularCambio(montoTotal, montoPago); //here

    refrescosSeleccionados.forEach((refrescoActual) => {
        Refrescos.forEach((refresco) => {
            if (refrescoActual.nombre === refresco.nombre) {
                refresco.cantidad -= refrescoActual.cantidad;
            }
        });
    });

    vuelto.monedas.forEach((moneda) => {
        Monedas.forEach((monedaMaquina) => {
            if (moneda.moneda === monedaMaquina.valor) {
                monedaMaquina.cantidad =
                    monedaMaquina.cantidad - moneda.cantidad;
            }
        });
    });
    return { vuelto, refrescosSeleccionados };
}
