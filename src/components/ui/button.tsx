import React from "react";

type CustomButtonProps = {
  buttontext: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ buttontext }) => {
  return (
    <button className=" bg-gray hover:bg-hover-gray text-black pt-0.5 pb-0.5 w-full rounded-2xl text-sm">
      {buttontext}
    </button>
  );
};

export default CustomButton;
