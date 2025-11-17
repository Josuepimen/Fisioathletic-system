import React from "react";

export default function InputField({ label, type = "text", ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-font font-medium">{label}</label>
      <input
        type={type}
        className="bg-white border border-neutral/60 rounded-xl px-4 py-2 shadow-sm outline-main text-font"
        {...props}
      />
    </div>
  );
}
