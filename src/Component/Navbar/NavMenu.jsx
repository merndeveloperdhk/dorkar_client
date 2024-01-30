import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaCodeCompare } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";


const NavMenu = () => {
    const menuItem = <>
     <li><Link to='/'>Home</Link></li>
        <li>
          <a>Shop</a>
          <ul className="p-2">
            <li><a>Electronics</a></li>
            <li><a>Computer</a></li>
          </ul>
        </li>
        <li><a>Vendor</a></li>
        <li><a>Blog</a></li>
        <li><a>Pages</a></li>
        <li><Link to="/elements">Elements</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-2xl"><img src="https://i.ibb.co/51f0xrZ/Logo-03.png" alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li>
        <details>
          <summary>Shop</summary>
          <ul className="p-2">
            <li><a>Electronics</a></li>
            <li><a>Computer</a></li>
          </ul>
        </details>
      </li>
      <li><a>Vendor</a></li>
      <li><a>Blog</a></li>
      <li><a>Pages</a></li>
      <li><Link to="/elements">Elements</Link></li>
    </ul>
  </div>
  {/* Right menu  icon */}
  <div className="navbar-end flex flex-col items-center md:flex-row gap-3 ">
    <div className="flex gap-1 justify-center items-center border-r-2 pr-6">
    <BsTelephone className="text-2xl"/>
    <span>
        <h1><span className="text-blue-500 font-semibold">Live Chat</span> or:</h1>
    <h1>12584666</h1>
    </span>
    </div>
    <Link className="flex flex-col justify-center items-center ">
        <FaRegHeart />WishList
        
    </Link>
    <Link className="flex flex-col justify-center items-center relative">
        <FaCodeCompare/>Compare
        <div className="w-5 h-5 flex items-center justify-center rounded-full badge-secondary absolute right-3 -top-[10px]">0</div>
        </Link>
    <Link className="flex flex-col justify-center items-center relative">
        <RiShoppingBagLine/>Cart
        <div className="w-5 h-5 flex items-center justify-center rounded-full badge-secondary absolute -right-1 -top-[10px]">0</div>
        </Link>
    </div>
</div>
        </div>
    );
};

export default NavMenu;