import { useState } from "react";

function DropDown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    // setIsOpen((currentIsOpen => !currentIsOpen))
  };

  const renderedOptions = options.map((option) => (
    <div key={option.value}>{option.label}</div>
  ));

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default DropDown;
