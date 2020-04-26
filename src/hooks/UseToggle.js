import { useState } from "react";

const useToggle = (initialState) => {
  const [toggle, setToggle] = useState(initialState);

  const toggleState = () => {
    setToggle((old) => !old);
  };
  return [toggle, toggleState];
};

export default useToggle;
