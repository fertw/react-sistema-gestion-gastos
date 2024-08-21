import React, { useEffect, useState } from 'react';
import { obtenerGastos, Gasto } from '../services/gastoService';



const Gastos: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [gastos, setGastos] = useState<Gasto[]>([]);


    useEffect(() => {
        const fetchGastos = async () => {
            try {
                const gastosData = await obtenerGastos();
                setGastos(gastosData);
                setLoading(false);
            }
            catch (error) {
                console.log('Error al obtener los gastos:', error);
                setLoading(false);
            }
      
        };
        fetchGastos();    
    }, []);





    if (loading) {
        return <p>Cargando gastos...</p>
    }

    return (
        <div>
            <h1>Lista de Gastos</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripcion</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {gastos.map(gasto => (
                        <tr key={gasto.id}>
                            <td>{gasto.id}</td>
                            <td>{gasto.descripcion}</td>
                            <td>{gasto.monto}</td>
                        </tr>      
                    ))}      
                </tbody>
        </table>
        </div>
    )
}

export default Gastos;