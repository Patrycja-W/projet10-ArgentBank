import React, { useState } from "react";
import Button from "../composants/Button";

const EditUser = ({ firstName, lastName, userName, onCancel, onSave }) => {
  const [newUserName, setNewUserName] = useState(userName);

  const handleSave = () => {
    onSave(newUserName);
  };

  return (
    <div>
      <form className="form">
        <h1>Edit User Info</h1>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} disabled />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} disabled />
        </div>

        <div>
          <Button
            className="buttonSaveCancel"
            type="button"
            onClick={handleSave}
          >
            Save
          </Button>
          <Button className="buttonSaveCancel" type="button" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
