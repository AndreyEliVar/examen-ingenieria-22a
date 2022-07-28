import Refrescos from "../Data/Refrescos";
import Monedas from "../Data/Monedas";
import {calcularCambio} from "./Calculadora"

export function cantidadRefrescosValida(refrescoSeleccionado, cantidad) {
    let cantidadRefrescos = false;
    let textoError = "La maquina no tiene suficientes refrescos";
    Refrescos.forEach(refresco => {
        if (refresco.nombre === refrescoSeleccionado) {
            if (refresco.cantidad > 0 && cantidad <= refresco.cantidad) {
                cantidadRefrescos = true;
            }
        }
    })
    return {cantidadRefrescos , textoError};
}

export function cantidadMonedasValida(montoIngresado, totalPagar) {
    let cantidadMonedas = false;
    let textoError = "Dinero insuficiente";
    if (montoIngresado >= totalPagar) {
        cantidadMonedas = true;
    }
    return {cantidadMonedas , textoError};
}

export function realizarVerificacionPago(montoIngresado, totalPagar) {
    let puedoPagar = true;
    let vuelto = calcularCambio(totalPagar, montoIngresado);
    let montoValido = cantidadMonedasValida(montoIngresado, totalPagar);
    let error = "";
    if (montoValido.cantidadMonedas === false) {
        error = montoValido.textoError;
        puedoPagar = false;
    } else if ( totalPagar === 0) {
        error = "No hay nada que pagar";
        puedoPagar = false;
    } else if (vuelto.residuo > 0) {
        error = "Fallo al realizar la compra";
        puedoPagar = false;
    }
    return {puedoPagar, error};
}

export function monedasEnMaquina() {
    let hayMonedas = true;
    let monedas = Monedas.filter(moneda => moneda.cantidad > 0);
    if (monedas.length === 0) {
        hayMonedas = false;
    }
    return hayMonedas;
}