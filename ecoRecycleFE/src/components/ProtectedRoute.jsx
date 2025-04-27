import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
