import { Helmet } from "react-helmet-async";
import BodySection from "../BodySection/BodySection";
import BreadCums from "../BreadCums/BreadCums";


const Home = () => {
    return (
        <div className="mt-2">
            <Helmet><title>Home | Future classified site</title></Helmet>
            <BreadCums></BreadCums>
            <BodySection></BodySection>
            
        </div>
    );
};

export default Home;