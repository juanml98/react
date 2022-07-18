import React from "react";
import Item from "../item/item";

function ItemList ({productos}) {
    return (
        productos.map(p => (
         <Item
            key={p.id}
            nombre={p.nombre}
            imagen={p.imagen}
            precio={p.precio}
            descripcion={p.descripcion}
         />    
        )
    )
    )
}


export default ItemList