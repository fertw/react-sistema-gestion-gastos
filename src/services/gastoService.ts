import axios from "axios";

export interface Gasto {
    id: number;
    fecha: string;
    descripcion: string;
    monto: number;
}

const API_URL = 'http://localhost:8081/api/gastos';

export const obtenerGastos = async (): Promise<Gasto[]> => {
    const response = await axios.get<Gasto[]>(API_URL);
    return response.data;
}