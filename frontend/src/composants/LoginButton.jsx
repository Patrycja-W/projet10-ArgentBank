import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/user/authSlice";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.user.userName);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (isLoggedIn) {
      dispatch(logout());
      navigate("/");
    }
  };

  const handleSignIn = () => {
    if (!isLoggedIn) {
      navigate("/signin");
    }
  };

  const handleUserClick = () => {
    if (isLoggedIn) {
      navigate("/user");
    }
  };

  return (
    <div>
      {isLoggedIn && (
        <span
          className="user-name"
          onClick={handleUserClick}
          style={{ cursor: "pointer" }}
        >
          {userName}
        </span>
      )}
      <i className="fa fa-user-circle"></i>
      <button
        className="main-nav-item"
        onClick={isLoggedIn ? handleLogout : handleSignIn}
      >
        {isLoggedIn ? "Logout" : "Sign In"}
      </button>
    </div>
  );
};

export default LoginButton;
