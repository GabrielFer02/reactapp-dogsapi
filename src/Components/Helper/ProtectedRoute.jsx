import React from "react";
import { UserContext } from "../../UserContext";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { login } = React.useContext(UserContext);
  const navigate = useNavigate();

  if (login === true) return <Route {...props} />;
  else if (login === false) return navigate("/login");
  else return null;
};

export default ProtectedRoute;
