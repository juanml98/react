import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';


const ItemCount = ({stock, initial, onAdd}) => {
   
    const [count, setCount] = useState(initial);

    const increment = () => {
        setCount (count + 1)
    };

    const decrement = () => {
        setCount((valAnt) => (valAnt > 0 ? count - 1 : count));
    }

    const eliminar = () => {
        setCount(0)
    }

    
    return (
        <div style={{display: "flex"}}> 

            <button className="btn btn-danger mx-2"onClick={decrement} label='-'>-</button>
            <h1>{count}</h1>
            <button className="btn btn-success mx-2" onClick={increment} label='+'>+</button>
            <button className="btn btn-secondary mx-1" onClick={eliminar}>Eliminar</button>
            <Button onClick={() => {
                if (count <= stock) {
                    onAdd(count);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'No hay suficientes productos'
                      });
                }
            }}>Agregar al carrito</Button>
            
        </div>
    );
};

export default ItemCount