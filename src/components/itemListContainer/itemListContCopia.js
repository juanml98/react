import React, {useState, useEffect} from "react";
import customFetch from "../../utils/customFetch";
import productos from "../../utils/productos";
import ItemList from "../itemList/itemList";
/*import ItemCount from "../itemCount/itemCount";*/

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function ItemListContainer() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(1000, productos)
        .then(resultado => setItems(resultado))
    }, [items]);

  return (
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>
        
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemListContainer;



/*function ItemListContainer() {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(1000, productos)
        .then(resultado => setItems(resultado))
    }, [items]);


    return (
      <div >
        <ItemList productos={items} />
        <ItemCount 
        stock={10} 
        initial={0}
        onAdd={(n) => alert (`Se han añadido ${n} productos`)}/>

        </div>
       
    )
} 

export default ItemListContainer*/