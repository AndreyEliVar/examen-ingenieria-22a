import Refrescos from "../Data/Refrescos";
import Monedas from "../Data/Monedas";

export function calcularTotal(refrescosSeleccionados) {
    let total = 0;
    refrescosSeleccionados.forEach((refrescoActual) => {
        if (refrescoActual.cantidad > 0) {
            Refrescos.forEach((refresco) => {
                if (refrescoActual.nombre === refresco.nombre) {
                    total += refresco.precio * refrescoActual.cantidad;
                }
            });
        }
    });
    return total;
}

export function calcularCambio(totalPagar, montoIngresado) {
    let cambio = 0;
    let copyCambio = 0;
    let monedas = [
        { moneda: "25", cantidad: 0 },
        { moneda: "50", cantidad: 0 },
        { moneda: "100", cantidad: 0 },
        { moneda: "500", cantidad: 0 },
    ];
    if (montoIngresado > totalPagar) {
        cambio = montoIngresado - totalPagar;
        copyCambio = cambio;
        let monedasDisponibles = Monedas.filter(
            (moneda) => moneda.cantidad > 0
        );
        let monedasDisponiblesFiltradas = monedasDisponibles.filter(
            (moneda) => moneda.valor <= cambio
        );
        let monedasDisponiblesOrdenadas = monedasDisponiblesFiltradas.sort(
            (a, b) => b.valor - a.valor
        );

        monedasDisponiblesOrdenadas.forEach((moneda) => {
            if (moneda.valor !== 1000) {
                while (cambio >= moneda.valor && moneda.cantidad > 0) {
                    cambio -= moneda.valor;
                    monedas[moneda.id - 1].cantidad++;
                }
            }
        });
    } else {
        cambio = 0;
        monedas = null;
    }

    return { cambio: copyCambio, monedas, residuo: cambio };
}
