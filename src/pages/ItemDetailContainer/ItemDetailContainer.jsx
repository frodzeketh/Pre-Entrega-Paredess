import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    const [product, productList] = useState({});
    const { id } = useParams ();

    const fetchProducts = () => {
        fetch ('https://fakestoreapi.com/products/${id}')
        .then ((response) => response.json())
        .then ((data) => productList(data)) 
        .catch ((error) => console.log(error));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

  return (
    <ItemDetail itemSelected={product}/>
  );
};

export default ItemDetailContainer