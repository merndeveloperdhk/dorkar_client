import { useEffect } from "react";
import SingleProduct from "./SingleProduct";
// import PaginationButton from "../Pagination/PaginationButton";


const Products = () => {
  // const [products, setProducts] = useState([]);
 
  
  useEffect( () => {
    /* fetch('http://localhost:5000/addPost')
    .then(res => res.json())
    .then(data => setProducts(data)) */
   /*  axios.get(`http://localhost:5000/addPost`, {withCredentials:true})
    .then(res =>{
      setProducts(res.data)
    }) */
  },[])
  return (
   <div>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
          {
           (product => <SingleProduct
            key={product._id}
            product={product}
            ></SingleProduct>)
          }
    </div>
    {/* <PaginationButton></PaginationButton> */}
   </div>
  );
};

export default Products;
