import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";


const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect( () => {
    fetch('http://localhost:5000/addPost')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  return (
   <div>
      <h1>Total Products: {products.length}</h1>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {
            products.slice(0,10).map(product => <SingleProduct
            key={product._id}
            product={product}
            ></SingleProduct>)
          }
    </div>
   </div>
  );
};

export default Products;
