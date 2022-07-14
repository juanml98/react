import React, {useState, useEffect} from "react";
import ItemCount from "../itemCount/itemCount";
import productos from "../../utils/productos";
import ItemList from "../itemList/itemList";
import customFetch from "../../utils/customFetch";



function ItemListContainer() {
    
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

export default ItemListContainer