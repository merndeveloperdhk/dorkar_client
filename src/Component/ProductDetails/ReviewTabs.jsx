

const ReviewTabs = () => {
    return (
        <div className="flex flex-col md:flex-row gap-2 justify-between items-start p-2">
            <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100 md:w-2/3 w-full">
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400">Description</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400">Customer Review (111)</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-violet-400 dark:text-gray-50">Vendor Information</a>
	
</div>
<div className="md:w-1/3 w-full md:mt-12">
    <img src="https://i.ibb.co/F06WQXC/bike13.jpg" alt="" />
</div>
        </div>
    );
};

export default ReviewTabs;