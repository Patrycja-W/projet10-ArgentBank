import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/user/authSlice";

const LoginButton = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.user.userName);

  const handleLogout = () => {
    if (isLoggedIn) {
      dispatch(logout());
    }
  };

  return (
    <div>
      {isLoggedIn && <span className="user-name">{userName}</span>}{" "}
      <i className="fa fa-user-circle"></i>
      <button className="main-nav-item" onClick={handleLogout}>
        {isLoggedIn ? "Logout" : "Sign In"}
      </button>
    </div>
  );
};

export default LoginButton;
