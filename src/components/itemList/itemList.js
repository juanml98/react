import React from "react";
import Item from "../item/item";
import './itemList.css';


const ItemList = ({productos}) =>{
    return(
        <div className='List'>
            <div className='Listh1Container'>
                <h1 className='Listh1'>Nuestros productos</h1>
            </div>
            <div className='CardSection'>
               {productos.map(productos => 
                <Item key={productos.id} {...productos}/>)}
            </div>
        </div>
    )
}





export default ItemList




/*function ItemList ({productos}) {

<div className='CardSection'>
               {productos.map(productos => 
                <Item key={productos.id} {...productos}/>)}
            </div>




    return (

        <div> 
            {productos.length ? (
                productos.map((p) => 
                <Item 
                key={p.id} 
                nombre={p.nombre}
                imagen={p.imagen}
                precio={p.precio}/>)
            ) : (
                <h3>Cargando..</h3>
            )}
    </div>   
    );
};*/


