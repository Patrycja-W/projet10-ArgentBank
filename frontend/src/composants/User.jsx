import React from "react";
import { useSelector } from "react-redux";

function User() {
  const firstName = useSelector((state) => state.profilUser.firstName);
  const lastName = useSelector((state) => state.profilUser.lastName);
  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName}
          {lastName}!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
    </>
  );
}
export default User;
