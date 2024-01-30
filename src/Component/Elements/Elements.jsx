import { useEffect, useState } from "react";
import SingleElement from "./SingleElement";

const Elements = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addPost')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1>service length : {services.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {
                    services.map(service => <SingleElement
                    key={service._id}
                    service={service}
                    ></SingleElement>)
                }
            </div>
        </div>
    );
};

export default Elements;