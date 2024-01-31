import { FaRetweet } from "react-icons/fa";

const ProductImg = ({product}) => {
  return (
    <div>
      <div className=" mb-3 h-72 ">
        <img
          className="rounded-md hover:scale-105 duration-300 overflow-hidden h-full w-full object-cover"
          src={product.picture}
          alt="Shoes"
        />
      </div>
      <div className="mb-3 h-72">
        <img
          className="rounded-md hover:scale-105 duration-300 overflow-hidden h-full w-full object-cover"
          src={product.picture}
          alt="Shoes"
        />
      </div>
      <div className="flex items-center gap-1 justify-center">
    <FaRetweet className="text-xl"></FaRetweet>
      <h1 className="font-bold">Shopping Tweet</h1>
      </div>
    </div>
  );
};

export default ProductImg;
