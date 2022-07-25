import React from "react";
import {Link} from 'react-router-dom';
import ItemCount from "../itemCount/itemCount";
import './item.css';
import Swal from 'sweetalert2';

const Item = (productos) => {

    return(
        <div className='Card'>
            <h1>{productos.nombre}</h1>
            <img src={productos.imagen} alt='imagen'></img>
            <p style={{color: 'white'}}>${productos.precio}</p>
            < Link to={`/detail/${productos.id}`} className='Detalle'>Ver detalle del artículo</Link>
            < ItemCount 
               stock={10} 
               initial={0}
               onAdd={(n) => {
                Swal.fire({
                  icon: 'success',
                  title: (`Se han añadido ${n} productos`)
                });
               }}/>
        </div>
    )
}
export default Item;


/*function Item(productos) {
    return (
      <div className="container">
        <div className="col">
        <Card className="row-md-auto" key={productos.id} style={{ width: '20rem', margin: '30px 30px', boxShadow: '0 0 10px gray'}}>
          <Card.Img src={productos.imagen} variant="top" />
          <Card.Body>
            
            <Card.Title>
              <Card.Link>
                 <h2>{productos.nombre}</h2>
              </Card.Link>

            </Card.Title> 
            
            <Link to={`/detalles/${productos.descripcion}`}>Detalles</Link>
            
          </Card.Body>
        </Card>
        </div>
        </div>
      
      );
}

export default Item*/