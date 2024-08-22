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

export const crearGasto = async (gasto: Omit<Gasto, 'id'>): Promise<Gasto> => {
    const response = await axios.post<Gasto>(API_URL, gasto);
    return response.data;
};

export const actualizarGasto = async (id: number, gasto: Omit<Gasto, 'id'>): Promise<Gasto> => {
    const response = await axios.put<Gasto>(`${API_URL}/${id}`, gasto);
    return response.data;
};

export const eliminarGasto = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};
