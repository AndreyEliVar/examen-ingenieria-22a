import { calcularTotal } from "../../logic/Calculadora";
import {
    cantidadRefrescosValida,
    monedasEnMaquina,
    cantidadMonedasValida,
    realizarVerificacionPago,
} from "../../logic/VerificadorErrores";

describe("calcular total", () => {
    it("si no tiene refrescos seleccionados retorna 0", () => {
        const refrescosSeleccionados = [
            { nombre: "Coca-Cola", cantidad: 0 },
            { nombre: "Fanta", cantidad: 0 },
            { nombre: "Pepsi", cantidad: 0 },
            { nombre: "Sprite", cantidad: 0 },
        ];
        const total = calcularTotal(refrescosSeleccionados);
        expect(total).toBe(0);
    });
    it("Si se selecciona un fresco de cada tipo retorna el monto de la suma de acuerdo a su valor", () => {
        const refrescosSeleccionados = [
            { nombre: "Coca-Cola", cantidad: 1 },
            { nombre: "Fanta", cantidad: 1 },
            { nombre: "Pepsi", cantidad: 1 },
            { nombre: "Sprite", cantidad: 1 },
        ];
        const total = calcularTotal(refrescosSeleccionados);
        expect(total).toBe(2375);
    });
});

describe("cantidad refrescos valida", () => {
    it("si no tiene refrescos seleccionados retorna false", () => {
        const refrescosSeleccionado = "Coca-Cola";
        const cantidad = 5;
        const resultado = cantidadRefrescosValida(
            refrescosSeleccionado,
            cantidad
        );
        expect(resultado).toEqual(
            expect.objectContaining({ cantidadRefrescos: true })
        );
    });
    it("Si se selecciona un fresco de cada tipo retorna true", () => {
        const refrescosSeleccionado = "Coca-Cola";
        const cantidad = 100;
        const resultado = cantidadRefrescosValida(
            refrescosSeleccionado,
            cantidad
        );
        expect(resultado).toEqual(
            expect.objectContaining({ cantidadRefrescos: false })
        );
    });
});

describe("monedas en maquina", () => {
    it("si tiene monedas retorna true", () => {
        const resultado = monedasEnMaquina();
        expect(resultado).toBe(true);
    });
});

describe("cantidad monedas valida", () => {
    it("si tiene monedas retorna true", () => {
        const montoIngresado = 100;
        const totalPagar = 100;
        const resultado = cantidadMonedasValida(montoIngresado, totalPagar);
        expect(resultado).toEqual(
            expect.objectContaining({ cantidadMonedas: true })
        );
    });
    it("si no tiene monedas retorna false", () => {
        const montoIngresado = 0;
        const totalPagar = 100;
        const resultado = cantidadMonedasValida(montoIngresado, totalPagar);
        expect(resultado).toEqual(
            expect.objectContaining({ cantidadMonedas: false })
        );
    });
});

describe("realizar verificacion pago", () => {
    it("si no tiene errores retorna true", () => {
        const montoIngresado = 100;
        const totalPagar = 100;
        const resultado = realizarVerificacionPago(montoIngresado, totalPagar);
        expect(resultado).toEqual(
            expect.objectContaining({ puedoPagar: true })
        );
    });
    it("si tiene errores retorna false", () => {
        const montoIngresado = 0;
        const totalPagar = 100;
        const resultado = realizarVerificacionPago(montoIngresado, totalPagar);
        expect(resultado).toEqual(
            expect.objectContaining({ puedoPagar: false })
        );
    });
});
