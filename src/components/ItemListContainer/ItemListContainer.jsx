import { useState, useEffect } from "react"
import ItemCount from "../../components/ItemCount/ItemCount"
import ItemList from "../../components/ItemList/ItemList"

const ItemListContainer = ( { greeting } ) => {

  const [productList, setProductList] = useState([]);


  const fetchProducts = () => {
    
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => setProductList(data));
    
    
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