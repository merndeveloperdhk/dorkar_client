import { MdArrowRightAlt, MdOutlineMail } from "react-icons/md";

const Subscribe = () => {
    return (
        <div className="bg-blue-600 p-2">
            <div className="grid grid-cols-1 md:grid-cols-12 justify-between items-center gap-2">
                <div className="col-span-6 flex items-center gap-3 text-white">
                <MdOutlineMail className="text-3xl" />
                    <div>
                    <h1 className="text-xl font-bold">Subscribe to our newsletter</h1>
                    <h1 className="font-semibold">out of the services to the point</h1>
                    </div>
                </div>
                <div className="md:col-span-6  flex gap-2">
                    <input type="search" name="" id="" placeholder="Your email address" className="w-full p-2 rounded " />
                    <button className="bg-slate-700 text-white px-4 rounded flex items-center gap-1">subscribe <MdArrowRightAlt /></button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;