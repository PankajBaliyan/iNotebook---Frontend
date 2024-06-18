import AllNotes from "./Note/AllNotes";
import CreateNote from "./Note/CreateNote";
import React, { useState } from "react";

const Addnote = (props) => {
  const [type, setType] = useState("createNote");
  const containerClass = "container " + (type === "createNote" ? "right-panel-active" : "");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

  return (
    <div className="App">
      <div className={containerClass} id="container">
        <CreateNote />
        <AllNotes />

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>All Notes!</h1>
              <p>Want to see all your notes, click here...</p>
              <button className="ghost" id="allNotes" onClick={() => handleOnClick("allNotes")}>
                All Notes
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Create Note!</h1>
              <p>Want to create a new note ? click here...</p>
              <button
                className="ghost "
                id="createNote"
                onClick={() => handleOnClick("createNote")}
              >
                Create Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addnote;
