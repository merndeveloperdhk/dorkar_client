import Header from "./Header";
import HeaderBottom from "./HeaderBottom";
import NavMenu from "./NavMenu";


const Navbar = () => {
    return (
        <div className="space-y-3">
            <Header></Header>
            <NavMenu></NavMenu>
            <HeaderBottom></HeaderBottom>
        </div>
    );
};

export default Navbar;