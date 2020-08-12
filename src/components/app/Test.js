import React from "react";
import { useHistory } from "react-router-dom";

function HomeButton() {
    const history = useHistory();
  
    function handleClick() {
      history.push("/Page");
    }
  
    return (
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    );
}

export default HomeButton;