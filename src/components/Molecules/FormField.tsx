import React from "react";
import FormInput from "../Atoms/client/FormInput";

type FormFieldProps = {
  label?: string;
  name: string;
  type?: "text" | "email" | "textarea";
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
};

const FormField = ({
  name,
  type = "text",
  placeholder,
  ...rest
}: FormFieldProps) => {
  return (
    <div>
      <FormInput
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default FormField;
