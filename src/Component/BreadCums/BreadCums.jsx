import { Link } from "react-router-dom";


const BreadCums = () => {
    return (
        <div>
            <nav aria-label="breadcrumb" className="w-full py-2 dark:bg-gray-800 dark:text-gray-100">
	<ol className="flex h-8 space-x-2 dark:text-gray-100">
		<li className="flex items-center">
			<Link to='/' rel="noopener noreferrer"  title="Back to homepage" className="flex items-center hover:underline">Home</Link>
		</li>
		<li className="flex items-center space-x-1">
			<span className="dark:text-gray-400">/</span>
			<a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline">Parent</a>
		</li>
		<li className="flex items-center space-x-1">
			<span className="dark:text-gray-400">/</span>
			<a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline">Parent</a>
		</li>
		<li className="flex items-center space-x-1">
			<span className="dark:text-gray-400">/</span>
			<a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline hover:no-underline cursor-default">Current</a>
		</li>
	</ol>
</nav>
        </div>
    );
};

export default BreadCums;