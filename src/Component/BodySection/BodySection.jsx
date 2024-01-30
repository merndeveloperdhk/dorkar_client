import Brand from "../Brand/Brand";
import BrowseCategory from "../Caterory/BrowseCategory";
import Price from "../Caterory/Price";
import Sort from "../Caterory/Sort";
import Color from "../Color/Color";
import FilterSection from "../FilterSection/FilterSection";
import Location from "../Location/Location";
import Pagination from "../Pagination/Pagination";
import Products from "../Products/Products";
import Size from "../Size/Size";
import Technology from "../Technology/Technology";

const BodySection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="col-span-3 space-y-8">
          <FilterSection></FilterSection>
          <BrowseCategory></BrowseCategory>
          <Price></Price>
          <Location></Location>
          <Size></Size>
          <Brand></Brand>
          <Color></Color>
          <Technology></Technology>
        </div>
        <div className="col-span-9 space-y-4">
          <Sort></Sort>
          <Products></Products>
          <Pagination></Pagination> 
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
