import { RiVisaFill } from "react-icons/ri";

const CopyRight = () => {
    return (
        <div>
            <div className="grid justify-center py-2 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©2024 All rights reserved</span>
				<a rel="noopener noreferrer" href="#">
					<span>Privacy policy</span>
				</a>
				<a rel="noopener noreferrer" href="#">
					<span>Terms of service</span>
				</a>
			</div>
			<div className="flex justify-center items-center pt-4 space-x-2 lg:pt-0 lg:col-end-13">
                <h1>We are using safe payment for </h1>
				<a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
					{/* <RiVisaFill/> */}
                    <img src="https://i.ibb.co/X3rkPn1/visa.png" alt="" />
				</a>
				<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
					<img src="https://i.ibb.co/jH66Sy3/card.png" alt="" />
				</a>
				<a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
					<img src="https://i.ibb.co/tpZHSgp/Discover.png" alt="" />
				</a>
			</div>
		</div>
        </div>
    );
};

export default CopyRight;