import React from "react";

function Item({imagen, nombre, id, precio}) {
    return (
      <div>
        <h3>{nombre}</h3>
        <img src={imagen} alt={imagen} width="200px" height={170}></img>
        <p>${precio}</p>
        <p>{id}</p>
      </div>
       
    )
}

export default Item