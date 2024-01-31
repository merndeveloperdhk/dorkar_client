import { Navigate } from "react-router-dom";
import useHook from "../../hook/useHook";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const{user} = useHook();
    if(user?.email){
        return children;
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.object
}