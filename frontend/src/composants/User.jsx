import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginError } from "../redux/user/authSlice";
import { updateUser } from "../redux/user/userSlice";
import EditUser from "../composants/EditUser";

const User = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("");

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        console.error(data.message);
      } else {
        dispatch(
          updateUser({
            firstName: data.body.firstName,
            lastName: data.body.lastName,
            userName: data.body.userName,
          })
        );
        setUserName(data.body.userName);
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch(loginError({ error }));
    }
  };

  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token]);

  const handleSave = (newUserName) => {
    console.log("Username saved:", newUserName);
    setUserName(newUserName);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditUser
          firstName={firstName}
          lastName={lastName}
          userName={userName}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <div className="header">
          <h1>
            Welcome back <br /> {firstName} {lastName} !
          </h1>

          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Name
          </button>
        </div>
      )}
    </>
  );
};

export default User;
