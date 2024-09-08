import React, { useState } from "react";

const EditUser = ({ firstName, lastName, userName, onSave, onCancel }) => {
  const [newUserName, setNewUserName] = useState(userName);

  const handleSave = () => {
    onSave(newUserName);
  };

  return (
    <div className="edit-form">
      <form>
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
          <button type="button" onClick={handleSave}>
            Save
          </button>

          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
