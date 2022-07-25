/*import React from "react";
import ItemCount from "../itemCount/itemCount";
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'

function Item({imagen, nombre, id, precio, descripcion}) {
    return (
      <div className="container">
        <div className="col">
        <Card className="row-md-auto" key={id} style={{ width: '20rem', margin: '30px 30px', boxShadow: '0 0 10px gray'}}>
          <Card.Img src={imagen} variant="top"/>
          <Card.Body>
            
            <Card.Title>
            <h2>{nombre}</h2>
            </Card.Title> 
            
            <Card.Text>
              <p>{descripcion}</p>
              <h3>${precio}</h3>
            </Card.Text>
            <ItemCount 
               stock={10} 
               initial={0}
               onAdd={(n) => {
                Swal.fire({
                  icon: 'success',
                  title: (`Se han añadido ${n} productos`)
                });
               }}/>
          </Card.Body>
        </Card>
        </div>
        </div>
      
      );
}

export default Item*/



