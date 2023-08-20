import React, { useState } from "react";
import ColorChange from "./ColorChange";
import Button from "./Button";



function ButtonArea() {
  const [buttons, setButtons] = useState([
  { color: "red", text: "red" , text1: "This is red area", count: 0 },
  { color: "green", text: "green" , text1: "This is green area", count: 0 },
  { color: "blue", text: "Blue" , text1: "This is blue area", count: 0 },
  { color: "orange", text: "orange", text1: "This is orange area", count: 0 },
]);
	const [buttonAreaBackgroundColor, setButtonAreaBackgroundColor] = useState("white");



  const handleButtonClick = (index,color) => {
    const updatedButtons = [...buttons];
    updatedButtons[index].count += 1;
    setButtons(updatedButtons);
     setButtonAreaBackgroundColor(color);

  };

  return (
  	
    <div className="button_Area">
    

      {buttons.map((button, index) => (
        <Button
          key={index}
          index={index} 
          color={button.color}
          text={button.text}
          text1={button.text1}
          count={button.count}
          onClick={() => handleButtonClick(index, button.color)}
       
        />
      ))}
      	<ColorChange buttonAreaBackgroundColor={buttonAreaBackgroundColor} />

    </div>
  );
}

export default ButtonArea;

