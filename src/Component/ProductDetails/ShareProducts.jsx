
import { Link } from "react-router-dom";
import { FaFacebook,FaTwitter,FaYoutube,FaInstagram,FaLinkedin   } from "react-icons/fa";

const ShareProducts = () => {
    return (
        <div className="space-y-1 ">
            <h1 className="font-bold">Share this products : </h1>
            <div className="flex gap-2 text-xl ">
                <Link>
                <FaFacebook className="text-blue-500"></FaFacebook>
                </Link>
                <Link>
                <FaTwitter className="text-blue-500"></FaTwitter>
                </Link>
                <Link>
                <FaYoutube className="text-red-600"></FaYoutube>
                </Link>
                <Link>
                <FaInstagram className="text-red-500"></FaInstagram>
                </Link>
                <Link>
                <FaLinkedin className="text-sky-700"></FaLinkedin>
                </Link>
            </div>
        </div>
    );
};

export default ShareProducts;