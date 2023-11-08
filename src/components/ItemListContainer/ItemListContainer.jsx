import { useState, useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ( { greeting } ) => {

  const [productList, setproductList] = useState([]);


  const fetchProducts = () => {
    return fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => setproductList(data));
    
  };



useEffect(() => {
  fetchProducts();
}, []);



  return (
    <div>
      <h1>Item List Container </h1>
      
      <ItemCount />
      <ItemList productList={productList} />
    </div>
  )
}

export default ItemListContainer