"use client";

import { ButtonProps } from "types/type";

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-4 py-2
        border-4 border-black
        shadow-[4px_4px_0px_0px_#000]
        active:shadow-none
        active:translate-x-[2px]
        active:translate-y-[2px]
        transition
        font-retro text-xs
        ${className}
      `}
    >
      {children}
    </button>
  );
}
