import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ratings from "../Products/Ratings";



const RelatedProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect( () => {
    fetch('http://localhost:5000/addPost')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
      
      {/* first */}
       {
            products.slice(0,4).map((product, idx) => <div key={idx} className="card card-compact  bg-base-100 rounded-none">
           
  
            <div>
            <div className=" bg-white border p-2  relative border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
          <img
            className="rounded-t-lg md:h-48 md:w-48 w-full mx-auto object-fit"
            src={product.picture}
            alt={product.title}
          />
        
        <div className="p-2 text-center">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
          </a>
          <a href="#">
            <h5 className="mb-2 text-md font-bold tracking-tight text-green-700 dark:text-white">
              {name}
            </h5>
          </a>
          <a href="#">
            <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
              {product.email}
            </h5>
          </a>
          <div className="flex justify-between">
          <a href="#">
            <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">
              Cat: {product.category}
            </h5>
          </a>
          <a href="#">
            <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.division}
            </h5>
          </a>
          </div>
          <div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <Ratings />
            <div className="flex justify-between items-center space-y-1">
            <p>$<span className="text-blue-600 font-semibold">{product.price} </span></p>
            <p>size:LG</p>
            <p>views: 0 </p>
            </div>
          </p>
          </div>
          <Link
            to={`/details/${product._id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
        <p className="absolute top-2 left-1 bg-black text-white px-2 py-1 rounded">Hot</p>
        <p className="absolute top-2 right-1 bg-green-600 text-white px-2 py-1 rounded">-12%</p>
      </div>
        </div>
           
          </div>)
          } 
        
     
    </div>
  );
};

export default RelatedProduct;
