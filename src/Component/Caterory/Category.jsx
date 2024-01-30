import { TfiMenuAlt } from "react-icons/tfi";

const Category = () => {
    return (
        <div>
            <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-r-0"
          >
            <option selected><TfiMenuAlt/>Browse Categories</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
    );
};

export default Category;