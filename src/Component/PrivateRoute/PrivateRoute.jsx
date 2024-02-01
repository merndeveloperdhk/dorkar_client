import { Navigate, useLocation } from "react-router-dom";
import useHook from "../../hook/useHook";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const{user, loading} = useHook();
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-bars loading-md"></span>
    }
    if(user?.email){
        return children;
    }
    // return <Navigate state={{from: location}} to='/login' replace></Navigate>
    // OR
    <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.object
}