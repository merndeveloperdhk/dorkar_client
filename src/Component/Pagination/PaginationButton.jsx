import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "../Products/SingleProduct";

const PaginationButton = () => {
  const [products, setProducts] = useState([]);
  const count = products.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const totalPages = Math.ceil(count / itemPerPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  // const allPages = [...Array(totalPages).keys()]
  useEffect(() => {
    
    axios.get(`http://localhost:5000/addPost`,
        { withCredentials: true }
      )
      .then((res) => {
        setProducts(res.data);
      });
  }, [currentPage, itemPerPage]);
  console.log(currentPage, itemPerPage);

  const handleItemPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemPerPage(val);
    setCurrentPage(1);
    console.log(e.target.value);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
          {
            products.map(product => <SingleProduct
            key={product._id}
            product={product}
            ></SingleProduct>)
          }
    </div>
    {/* pagination */}
    <div className="flex md:justify-between justify-center items-center">
      <h1 className="hidden md:block">
        Showing { itemPerPage * currentPage }-{currentPage * itemPerPage} of {products.length} Products
      </h1>
      <p>
        Current page: {currentPage} Total page: {totalPages}
      </p>
      <div className="flex gap-2 items-center">
        <nav
          aria-label="Pagination"
          className="inline-flex -space-x-px rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-100"
        >
          <button
            onClick={handlePreviousPage}
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-700"
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              key={page}
              type="button"
              aria-current="page"
              className={`inline-flex items-center px-4 py-2 text-sm font-semibold border dark:bg-violet-400 dark:text-gray-900 dark:border-gray-700  ${
                currentPage === page && "selected"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-700"
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </nav>
        <div className="flex items-center gap-1 text-green-700">
          <select
            value={itemPerPage}
            onChange={handleItemPerPage}
            className="border text-center rounded  px-2 py-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
          </select>
          <h1 className="font-semibold">Items Per page</h1>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default PaginationButton;
