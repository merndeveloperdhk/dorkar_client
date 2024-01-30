import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import useHook from "../../hook/useHook";


const Header = () => {
    const{user} = useHook();
    console.log(user);
    return (
        <div className="flex flex-col md:flex-row md:justify-between bg-slate-100 p-2 ">
            <div>
                <h1>Welcome message</h1>
            </div>
            {/* Right menu */}
            <div className="flex flex-col md:flex-row gap-1 md:gap-3">
                <NavLink>Blog</NavLink>
                <NavLink to='/postAdd'>Post Add</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
                <NavLink>My Account</NavLink>
                <NavLink to='/register' className="flex items-center gap-1"><FaRegUser></FaRegUser> Sign in/Register</NavLink>
               
            </div>
        </div>
    );
};

export default Header;