import HighLow from "./HighLow";
import SortByNumber from "./SortByNumber";
import SortByPopularity from "./SortByPopularity";



const Sort = () => {
    return (
        <div className="flex justify-between items-center ">
            {/* ledt filter */}
            <div >
                <SortByPopularity></SortByPopularity> 
                
            </div>
            <div>
                <HighLow></HighLow>
            </div>
            {/* Right filter */}
            <div>
                <SortByNumber></SortByNumber>

            </div>
        </div>
    );
};

export default Sort;