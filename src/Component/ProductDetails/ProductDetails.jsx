import { Helmet } from "react-helmet-async";
import ProductImg from "./ProductImg";
import RightProduct from "./RightProduct";
import { MdLocalShipping, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import RelatedProduct from "../RelatedProduct/RelatedProduct";
import MoreItems from "./MoreItems";
import ShareProducts from "./ShareProducts";
import ReviewTabs from "./ReviewTabs";


const ProductDetails = () => {


  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-2 my-4 ">
      <Helmet>
        <title>Product Details | welcome to my site</title>
      </Helmet>
      <div className=" md:w-1/4 bg-yellow-200 px-2">
        <h1>
          d Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
          incidunt est! Reiciendis quis laboriosam maxime excepturi magnam
          impedit soluta ipsam veniam quam quisquam officiis enim ea aut
          aspernatur harum rem exercitationem, molestiae tempora suscipit sit
          voluptates. Est vitae minus repudiandae reiciendis minima fugit, optio
          hic nostrum ea, itaque totam unde!
        </h1>
        <ProductImg></ProductImg>
        <RightProduct></RightProduct>
      </div>
      {/* Right side */}
      <div className="md:w-3/4  ">
        <div className="flex flex-col md:flex-row gap-3 bg-slate-200 p-2">
          <div className="w-full md:w-1/2 overflow-hidden">
          
            <img
                className="min-h-fit overflow-hidden "
                src ="https://i.ibb.co/HzVXtyn/AKA8518.jpg"
                alt=""
              /> 
            
            {/* Sub image */}
            <div className="mt-2 flex flex-col md:flex-row gap-1 overflow-hidden ">
           <img src="https://i.ibb.co/HzVXtyn/AKA8518.jpg" alt="" className="w-[25%]"/>
           <img src="https://i.ibb.co/HzVXtyn/AKA8518.jpg" alt="" className="w-[25%]"/>
           <img src="https://i.ibb.co/HzVXtyn/AKA8518.jpg" alt="" className="w-[25%]"/>
           <img src="https://i.ibb.co/HzVXtyn/AKA8518.jpg" alt="" className="w-[25%]"/>
           
           
            </div>
            
          </div>
          <div className=" w-full md:w-1/2 px-2">
          
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold">Product Name : </h1>
             
              <div className="flex gap-3">
                <h1>Star mark</h1>
                <h1>Write a review</h1>
              </div>
              <div>
                <div className="flex items-center gap-1 ">
                <h1 className="font-semibold">ManuFacturer: </h1><span className="font-bold ">manufacturer</span>
                </div>
                <h1 className="my-1">Made of Country: <span className="font-bold">made_country</span></h1>
                <h1>Price: <span className="text-xl text-orange-500 font-bold">$price</span></h1>
                
              </div>
              <div>Description: <br/>
            
             {/*   {
                readMore ? <>
                <p>
                  {description.substring(0,50)} ...<Link onClick={()=>setReadMore(false)} className="text-green-600">Read more</Link>
                </p>
                </>: <>
                <p>
                  {description}<Link onClick={()=> setReadMore(true)} className="text-red-600"> ...Read less</Link>
                </p>
                </>
               } */}
              </div>
              <h1 className="text-green-500">in stock: 20</h1>
            </div>
            <label htmlFor="">Quantity</label>
            <div className="flex justify-between w-3/4 gap-3 items-center">
              <div className="flex flex-col ">
                {/* <label htmlFor="">Quantity</label> */}
                <div className=" flex w-1/6 text-3xl gap-1">
                  <button>-</button>{" "}
                  <input type="text" className="w-20 border text-center text-xl py-1" />{" "}
                  <button>+</button>
                </div>
              </div>
              <button type="button" className="flex gap-1 items-center btn bg-orange-500 text-white">
                <MdOutlineShoppingCartCheckout />
                <p>Add to Cart</p>
              </button>
              {/* Buy now button */}
              <button className="btn bg-teal-800 text-white">Buy Now</button>
            </div>
            {/* whish list and compare */}
            <div className="flex md:gap-6 md:mt-3 mb-1 md:text-lg font-semibold w-full">
              <div className="flex items-center gap-1">
                <button className="flex items-center gap-1">
                <FaRegHeart />
                Add to wish list
                </button>
                
              </div>
              <div className="flex items-center gap-1">
                <button className="flex items-center gap-1">
                <IoIosGitCompare />
                compare
                </button>
                
              </div>
            </div>
            {/* Share Products */}
            <div className="">
            {/* <IoIosGitCompare /> */}
            <ShareProducts></ShareProducts>
            </div>
            
            {/* Ready to shop */}
            <div className="flex gap-2 items-center md:mt-4 px-2  bg-slate-300">
              <MdLocalShipping />
              <h1>Ready to ship</h1>
            </div>
          </div>
          
        </div>
        {/* Morad items */}
        <div className="bg-slate-100 md:w-1/2 mt-2">
              <MoreItems></MoreItems>
            </div>
            {/* Review tabs */}
            <ReviewTabs></ReviewTabs>
        {/* Related Products */}
        <div className="md:mt-4 bg-slate-200 p-2">
          <h1 className="text-2xl font-bold md:mb-6">Related Products</h1>
          <div>
            <RelatedProduct></RelatedProduct>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
