import React from "react";

function Item({imagen, nombre, precio, descripcion}) {
    return (
      <div>
        <h2>{nombre}</h2>
        <img src={imagen} alt={imagen} width="200px" height={170}></img>
        <p>${precio}</p>
        <p>{descripcion}</p>
      </div>
       
    )
}

export default Item