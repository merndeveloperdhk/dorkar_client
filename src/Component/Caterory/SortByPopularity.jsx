import { TfiMenuAlt } from "react-icons/tfi";

const SortByPopularity = () => {
    return (
        <div>
             <div>
            <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500  block w-full  p-2 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
          >
            <option selected><TfiMenuAlt/>Sort By Popularity</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        </div>
    );
};

export default SortByPopularity;