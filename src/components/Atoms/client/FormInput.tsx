"use client";

import React from "react";

type FormInputProps = {
  type?: "text" | "email" | "textarea";
  name: string;
  id?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  readOnly?: boolean;
};

const FormInput = ({
  type = "text",
  name,
  id,
  readOnly = false,
  ...rest
}: FormInputProps) => {
  const inputId = id ?? name;

  const sharedClasses =
    "w-full bg-[var(--color-secondary)] text-black placeholder-[var(--color-primary)] font-[400] text-[14px] not-italic font-satoshi px-[20px] py-[20px] outline-none border-none appearance-none";

  const animatingClasses = readOnly
    ? `${sharedClasses} cursor-default relative`
    : sharedClasses;

  if (type === "textarea") {
    return (
      <div className="relative">
        <textarea
          id={inputId}
          name={name}
          rows={6}
          className={animatingClasses}
          readOnly={readOnly}
          {...rest}
        />
        {readOnly && (
          <span
            className="absolute animate-pulse text-black text-[14px]"
            style={{
              right: "25px",
              bottom: "25px",
              pointerEvents: "none",
            }}
          >
            |
          </span>
        )}
      </div>
    );
  }

  return (
    <input
      type={type}
      id={inputId}
      name={name}
      className={animatingClasses}
      readOnly={readOnly}
      {...rest}
    />
  );
};

export default FormInput;
