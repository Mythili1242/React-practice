import { Navigate } from "react-router-dom";
const index = ({ isLoggedIn, children }) => {
if (!isLoggedIn) {
return <Navigate to="/" replace />;
}
return children;
};
export default index;


