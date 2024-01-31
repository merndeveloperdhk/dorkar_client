import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import useHook from "../../hook/useHook";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useHook();
  const handleLogOut = () => {
    logOut().then(() => {
      console.log("logOut successfully done");
      toast.success("logout success");
    });
  };
  console.log(user);
  return (
    <div className="flex flex-col md:flex-row md:justify-between bg-slate-100 p-2 ">
      <div>
        <h1>Welcome <span className="text-green-600 font-semibold">{user? user.displayName || user.email: "Guest"}</span></h1>
      </div>
      {/* Right menu */}
      <div className="flex flex-col md:flex-row gap-1 md:gap-2">
        <NavLink>Blog</NavLink>
        <NavLink to="/postAdd">Post Add</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink>My Account</NavLink>
        {user ? (
          <>
            <span> {user.email || user.displayName}</span>
            {user.photoURL ? (
              <img
                className="w-6 h-6  rounded-full"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <div className="avatar">
                <div className="w-6 h-6 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            )}
            <button onClick={handleLogOut}>LogOut</button>
          </>
        ) : (
          <NavLink to="/register" className="flex items-center gap-1">
            <FaRegUser></FaRegUser> Sign in/Register
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
