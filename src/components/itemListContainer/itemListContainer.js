import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../utils/productos';
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/itemList';


const ItemListContainer = () =>{
    const [productos, setProducts] = useState([]);

    const { categoria } = useParams();

    console.log(categoria);

    useEffect(() => {
        if(!categoria){
            getProducts().then(response => {
                setProducts(response)
            })
        }else{
            getProductsByCategory(categoria).then(response => {
                setProducts(response)
            })
        }
    }, [categoria])
   

    return(
        <div className='ItemList'>
            
            < ItemList productos={productos}/>

          
        </div> 
    )
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