"use client";

import { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./UserForm.css";

export default function UserForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted with:", {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    });
  };

  return (
    <form className="userForm" onSubmit={handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Nom"
        variant="filled"
        fullWidth
        margin="normal"
        inputRef={nameRef}
        required
        sx={textFieldStyles}
      />

      <TextField
        id="email"
        name="email"
        label="Email"
        variant="filled"
        fullWidth
        margin="normal"
        type="email"
        inputRef={emailRef}
        required
        sx={textFieldStyles}
      />

      <TextField
        id="message"
        name="message"
        label="Message"
        variant="filled"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        inputRef={messageRef}
        required
        sx={textFieldStyles}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={submitButtonStyles}
      >
        {"Créer"}
      </Button>
    </form>
  );
}

const textFieldStyles = {
  "& .MuiFilledInput-root": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    color: "white",
    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.3)" },
    "&.Mui-focused": { backgroundColor: "rgba(0, 0, 0, 0.3)" },
    "&:before": { borderBottomColor: "white" },
    "&:hover:before": { borderBottomColor: "white" },
    "& input, & textarea": { color: "white" },
  },
  "& .MuiFilledInput-underline:after": { borderBottomColor: "#fc6d36" },
  "& .MuiInputLabel-root": {
    color: "white",
    "&.Mui-focused": { color: "#fc6d36" },
  },
};

const submitButtonStyles = {
  mt: 2,
  bgcolor: "#fc6d36",
  transition: "all 0.3s ease",
  "&:hover": {
    bgcolor: "#d45e31",
    transform: "scale(1.02)",
  },
};
