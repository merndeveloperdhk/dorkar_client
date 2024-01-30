import { CgMenuGridR } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";

const SortByNumber = () => {
    return (
        <div className="flex items-center gap-2">
             <div>
            <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900  text-sm  focus:ring-blue-500  block w-full  p-2 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
          >
            <option selected>Sort Number</option>
            <option value="US">12</option>
            <option value="CA">16</option>
            <option value="FR">20</option>
            <option value="DE">24</option>
          </select>
        </div>
            <div className="flex gap-2 text-2xl">
            <CgMenuGridR />
            <TfiMenuAlt />
            </div>
        </div>
    );
};

export default SortByNumber;