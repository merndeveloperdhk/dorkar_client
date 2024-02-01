import { useEffect, useState } from "react";
import SingleElement from "./SingleElement";
import useHook from "../../hook/useHook";
import axios from "axios";

const Elements = () => {
    const{user} = useHook();
    const [services, setServices] = useState([]);
    useEffect(() => {
        /* fetch(`http://localhost:5000/addPost?email=${user.email}`)
        .then(res => res.json())
        .then(data => setServices(data)) */
        axios.get(`http://localhost:5000/addPost?email=${user.email}`)
        .then(res => {
            setServices(res.data)
        })
    },[user.email])
    return (
        <div>
            <h1>service length by email : {user.email? services.length : "No matched email"}</h1>
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