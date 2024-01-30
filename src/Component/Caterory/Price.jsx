import { Link } from "react-router-dom";

const Price = () => {
  return (
    <div className="space-y-2 min-h-40 overflow-y-auto">
      <div className="flex justify-between items-center bg-slate-100 px-2">
        <h1 className="text-xl font-semibold">Price :</h1>
        <h1 className="text-2xl font-semibold">-</h1>
      </div>
      <div className="flex flex-col gap-2">
        <Link>Below $200</Link>
        <Link>$201 - $300</Link>
        <Link>$301 - $400</Link>
        <Link>$401 - $500</Link>
        <Link>Above $500</Link>
      </div>
    </div>
  );
};

export default Price;
