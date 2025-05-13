import React from "react";
import { InputProps } from "types/type";

function InputComponent(
  {
    id = "",
    type = "text",
    className = "",
    value,
    onChange,
    ...rest
  }: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <input
      id={id}
      type={type}
      className={`w-full border-2 border-black bg-gray-100 px-2 py-1 text-black outline-none ${className}`}
      value={value}
      onChange={onChange}
      ref={ref}
      {...rest}
    />
  );
}

const Input = React.forwardRef(InputComponent);
Input.displayName = "Input";

export default Input;
