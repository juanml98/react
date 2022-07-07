import ItemCount from "../itemCount/itemCount"

const ItemListContainer = (props) => {
    return (
    <div>
        <h1>{props.greeting}</h1>
        <ItemCount stock={10} initial={0}/>
     </div>
    )
}

export default ItemListContainer