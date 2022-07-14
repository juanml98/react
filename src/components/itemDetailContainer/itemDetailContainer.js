import React, { useEffect, useState } from "react"
import { getProductos } from "../../utils/productos";


const ItemDetailContainer = () => {
    
    const [productos, setProductos] = useState([]);
   
    useEffect(() => {
        getProductos().then(resultado => {
            setProductos(resultado)
        })
    }, []);

    console.log('prueba')
    
    return (
        <div className='itemDetailContainer'>
            <ItemDetailContainer productos = {productos.descripcion}/>
            </div>
    )
}


export default ItemDetailContainer;