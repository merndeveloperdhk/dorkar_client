import SortByNumber from "./SortByNumber";
import SortByPopularity from "./SortByPopularity";



const Sort = () => {
    return (
        <div className="flex justify-between ">
            {/* ledt filter */}
            <div >
                <SortByPopularity></SortByPopularity> 
                
            </div>
            {/* Right filter */}
            <div>
                <SortByNumber></SortByNumber>

            </div>
        </div>
    );
};

export default Sort;