import { useState } from "react";


const HighLow = () => {
    const[highLow, setHighLow] = useState(false);

    return (
        <div>
            <button onClick={() => setHighLow(!highLow)}  className="px-3 py-2 border border-blue-200 bg-gray-50-50 rounded">
                {
                    highLow ? <h1 className="font-semibold text-blue-500">High to Low</h1> : <h1 className="font-semibold text-blue-500">Low to High</h1>
                }
                </button>
        </div>
    );
};

export default HighLow;