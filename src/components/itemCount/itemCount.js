import { useState } from "react"


const ItemCount = (stock, initial, onAdd) => {
   
    const [count, setCount] = useState(0)

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }else{
            setCount(0)
        }
    }


    const increment = () => {
        setCount(count + 1)
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
            
        </div>
    )
}

export default ItemCount