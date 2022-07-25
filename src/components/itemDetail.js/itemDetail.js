import './itemDetail.css';
import Card from 'react-bootstrap/Card';


const ItemDetail = (productos) => {

    console.log(productos)

    return(

        <Card key={productos.id} style={{ width: '18rem' }}>
        
            <Card.Img variant="top" src={productos.imagen}/>

            <Card.Body>
              <Card.Title><h2>{productos.nombre}</h2></Card.Title>
               <Card.Text>
               <p>{productos.descripcion}</p>               
               
               <h3>${productos.precio}</h3>
              
        </Card.Text>
        
      </Card.Body>
      
      </Card>
    )

};


export default ItemDetail