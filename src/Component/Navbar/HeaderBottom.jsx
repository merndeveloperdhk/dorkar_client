import AllCategory from "../Caterory/AllCategory";
import Category from "../Caterory/Category";
import { CiLocationOn, CiShoppingTag } from "react-icons/ci";

const HeaderBottom = () => {
  return (
    
      <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
        {/* category */}
        <div className="col-span-3 ">
          <Category></Category>
        </div>
        {/* middle */}
        <div className="col-span-6">
            <AllCategory></AllCategory>
        </div>
        {/* right */}
        <div className="col-span-3 ">
            <div className="flex justify-between px-4 pt-2">
                <div className="flex gap-2 items-center">
                <CiLocationOn className="text-2xl"/>
                    <h1 className="font-semibold">Track order</h1>
                </div>
                <div className="flex gap-2 items-center">
                <CiShoppingTag className="text-2xl"/>
                    <h1 className="font-semibold">daily deals</h1>
                </div>
            </div>
        </div>
      </div>
    
  );
};

export default HeaderBottom;
