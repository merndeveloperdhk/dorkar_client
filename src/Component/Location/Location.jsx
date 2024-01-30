import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div className="space-y-2 min-h-40 overflow-y-auto">
      <div className="flex justify-between items-center bg-slate-100 px-2">
        <h1 className="text-xl font-semibold">Location :</h1>
        <h1 className="text-2xl font-semibold">-</h1>
      </div>
      <div className="flex flex-col gap-2">
        <Link>Dhaka</Link>
        <Link>Chittagonj</Link>
        <Link>Sylhet</Link>
        <Link>Khulna</Link>
      </div>
    </div>
  );
};

export default Location;
