import React from "react"
import ItemCount from "../itemCount/itemCount"

const ItemListContainer = ({greeting}) => {
    return (
    <div>
        <h1>{greeting}</h1>
        <ItemCount 
        stock={10} 
        initial={0}
        onAdd={(n) => alert (`Se han añadido ${n} productos`)}/>
     </div>
    )
}

export default ItemListContainer