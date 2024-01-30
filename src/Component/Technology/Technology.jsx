

const Technology = () => {
    return (
        <div className="min-h-40 overflow-y-auto">
      <div className="flex justify-between items-center bg-slate-100 px-2 mb-2">
        <h1 className="text-xl font-semibold">Technology :</h1>
        <h1 className="text-2xl font-semibold">-</h1>
      </div>
      <div className="flex items-center mb-3">
        <input
          
          id="disabled-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="disabled-checkbox"
          className="ms-2 text-sm font-medium text-gray-600 dark:text-gray-500"
        >
          Dell
        </label>
      </div>
      <div className="flex items-center mb-3">
        <input
          
          checked
          id="disabled-checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="disabled-checked-checkbox"
          className="ms-2 text-sm font-medium text-gray-600 dark:text-gray-500"
        >
          Samsung
        </label>
      </div>
      <div className="flex items-center mb-3">
        <input
          
          id="disabled-checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="disabled-checked-checkbox"
          className="ms-2 text-sm font-medium text-gray-600 dark:text-gray-500"
        >
          Oppo
        </label>
      </div>
      <div className="flex items-center mb-3">
        <input
          id="disabled-checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="disabled-checked-checkbox"
          className="ms-2 text-sm font-medium text-gray-600 dark:text-gray-500"
        >
          Apple
        </label>
      </div>
      <div className="flex items-center mb-3">
        <input
          id="disabled-checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="disabled-checked-checkbox"
          className="ms-2 text-sm font-medium text-gray-600 dark:text-gray-500"
        >
          Lenovo
        </label>
      </div>
      <div className="flex items-center mb-3">
        <input
          id="disabled-checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="disabled-checked-checkbox"
          className="ms-2 text-sm font-medium text-gray-600 dark:text-gray-500"
        >
          Vivo
        </label>
      </div>
    </div>
    );
};

export default Technology;