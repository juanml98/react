import { useState } from "react";


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

            <button className="btn btn-danger mx-3"onClick={decrement} label='-'>-</button>
            <h1>{count}</h1>
            <button className="btn btn-success mx-3" onClick={increment} label='+'>+</button>
            <button className="btn btn-secondary mx-3" onClick={eliminar}>Eliminar</button>
            <button onClick={() => {
                if (count <= stock) {
                    onAdd(count);
                } else {
                    alert("No hay suficientes productos");
                }
            }}>Agregar al carrito</button>
            
        </div>
    );
};

export default ItemCount