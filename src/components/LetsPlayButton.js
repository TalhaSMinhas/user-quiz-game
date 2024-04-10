import React from "react";

function LetsPlayButton() {
  const sayLetsPlay = () => {
    alert("Let's Play!");
  };

  return <button onClick={sayLetsPlay}>Let's Play!</button>;
}

export default LetsPlayButton;
