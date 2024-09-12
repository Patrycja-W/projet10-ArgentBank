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
  const userName = useSelector((state) => state.user.userName);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleSave = async (newUserName) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName: newUserName }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        console.error(data.message);
      } else {
        dispatch(
          updateUser({
            userName: data.body.userName,
            firstName,
            lastName,
          })
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditUser
          token={token}
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
