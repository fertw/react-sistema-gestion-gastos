import React, { useState, useEffect } from 'react';
import { Gasto, crearGasto, actualizarGasto } from '../services/gastoService';

interface GastoFormProps {
    gastoExistente?: Gasto | null; // Cambiado de Gasto | undefined a Gasto | null
    onGuardar: (gasto: Gasto) => void;
    onClose: () => void;
}

const GastoForm: React.FC<GastoFormProps> = ({ gastoExistente, onGuardar, onClose }) => {
    const [descripcion, setDescripcion] = useState(gastoExistente?.descripcion || '');
    const [monto, setMonto] = useState(gastoExistente?.monto.toString() || '');

    useEffect(() => {
        if (gastoExistente) {
            setDescripcion(gastoExistente.descripcion);
            setMonto(gastoExistente.monto.toString());
        }
    }, [gastoExistente]);

    const manejarEnvio = async (e: React.FormEvent) => {
        e.preventDefault();
        const nuevoGasto = {
            descripcion,
            monto: parseFloat(monto)
        };

        try {
            if (gastoExistente) {
                const gastoActualizado = await actualizarGasto(gastoExistente.id, nuevoGasto);
                onGuardar(gastoActualizado);
            } else {
                const gastoCreado = await crearGasto(nuevoGasto);
                onGuardar(gastoCreado);
            }
        } catch (error) {
            console.error('Error al guardar el gasto:', error);
        }
    };

    return (
        <div>
            <h2>{gastoExistente ? 'Editar Gasto' : 'Crear Gasto'}</h2>
            <form onSubmit={manejarEnvio}>
                <div>
                    <label>Descripción:</label>
                    <input 
                        type="text" 
                        value={descripcion} 
                        onChange={(e) => setDescripcion(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Monto:</label>
                    <input 
                        type="number" 
                        value={monto} 
                        onChange={(e) => setMonto(e.target.value)} 
                    />
                </div>
                <button type="submit">Guardar</button>
                <button type="button" onClick={onClose}>Cancelar</button>
            </form>
        </div>
    );
};

export default GastoForm;
