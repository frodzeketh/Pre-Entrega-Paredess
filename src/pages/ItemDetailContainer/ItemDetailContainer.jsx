import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams ();

    const fetchProduct = () => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then ((response) => response.json())
        .then ((data) => setProduct(data)) 
        .catch ((error) => console.log(error));
    };

    useEffect(() => {
        fetchProduct();
    }, []);

  return (
    <ItemDetail itemSelected={product}/>
  );
};

export default ItemDetailContainer