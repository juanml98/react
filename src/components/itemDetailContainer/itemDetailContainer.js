import { React, useEffect, useState } from 'react';
import ItemDetail from '../itemDetail.js/itemDetail';
import { getProductById } from '../../utils/productos';
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css';
import customFetch from '../../utils/customFetch';
import productos from '../../utils/productos';

const ItemDetailContainer = () => {
    
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect (() => {
        
        customFetch(data, 1000).then(ItemDetail => setData(ItemDetail))

        getProductById(id).then(response => {
            setData(response)
        })
    },[]);

    return (
            <div className='ItemDetail'>
                <ItemDetail {...productos} />
            </div>
    );
};

export default ItemDetailContainer