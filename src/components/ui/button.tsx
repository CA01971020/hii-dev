import React from "react";

type CustomButtonProps = {
  buttontext: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ buttontext }) => {
  return (
    <button className=" bg-stone-200 hover:bg-hover-gray text-black pt-1 pb-1 pr-4 pl-4 rounded text-sm">
      {buttontext}
    </button>
  );
};

export default CustomButton;
