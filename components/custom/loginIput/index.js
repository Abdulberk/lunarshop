import React from "react";
import styles from "./styles.module.scss";
import { BiUser } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import { IoKeyOutline } from "react-icons/io5";

function LoginInput({
  icon,
  placeholder,
  type,
  value,
  onChange,
  name,
  required,
  pattern,
  error,
}) {
  const Icon = () => {
    switch (icon) {
      case "user":
        return <BiUser />;
      case "email":
        return <SiMinutemailer />;
      case "password":
        return <IoKeyOutline />;
      default:
        return <BiUser />;
    }
  };

  return (
    <>
      <div className={`${styles.input}`}>
        <Icon />
        <input
          placeholder={placeholder}
          type={type === "text" ? "text" : "password"}
          onChange={onChange}
          value={value}
          name={name}
          pattern={pattern}
          required={required}
        />

<div className = {styles.errorMessage}> {error}</div>
        
      </div>
      

      
        
      
    </>
  );
}

export default LoginInput;
