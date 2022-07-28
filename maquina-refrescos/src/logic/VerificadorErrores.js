import Refrescos from "../Data/Refrescos";

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