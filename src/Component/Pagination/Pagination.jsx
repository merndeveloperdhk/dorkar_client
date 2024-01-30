import { useEffect, useState } from "react";
import PaginationButton from "./PaginationButton";


const Pagination = () => {
    const [products, setProducts] = useState([]);
  useEffect( () => {
    fetch('http://localhost:5000/addPost')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
    return (
        <div className="flex justify-between items-center">
            <h1>Showing 1-10 of {products.length} Products</h1>
            <PaginationButton></PaginationButton>
        </div>
    );
};

export default Pagination;