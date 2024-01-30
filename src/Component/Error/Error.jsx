
import { Helmet } from "react-helmet-async";
import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
			<Helmet>
				<title>Error | future e-commerce</title>
			</Helmet>
            <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-4 space-y-4 text-center sm:max-w-md">
    <h2 className="mb-2 font-extrabold text-7xl text-red-500 ">
				<span className="sr-only">Error</span>404
			</h2>
    <MdErrorOutline className="w-40 h-40 text-gray-600" />
		<p className="text-3xl font-bold">Something went wrong!!</p>
		<div className="flex gap-2">
        <Link rel="noopener noreferrer" to='/' className="px-4 py-2 font-semibold rounded bg-red-400 dark:text-gray-900">Back to homepage</Link>
		<Link rel="noopener noreferrer" to='/' className="px-4 py-2 font-semibold rounded bg-slate-400 dark:text-gray-900">Bo Back</Link>
        </div>
	</div>
</section>
        </div>
    );
};

export default Error;