import React from "react";
import styles from "../../styles/forgot.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import LoginInput from "../../components/custom/loginIput";
import {BiArrowBack} from "react-icons/bi"
import Image from "next/image";
import axios from "axios";



function Forgot() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState({
        error: "",
        successMessage: "",
    });

    const router = useRouter();

    

    const gobackHandler = async() => {
        await router.push("/signin");
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("/api/auth/forgot", {
            email
            })

         .then((res) => {

          setMessage({ ...message, successMessage: res.data.message });

         })
          .catch((err) => {
            setMessage({ ...message, error: err.response.data.error });

          });


          


    }

    const handleChange = (e) => {
        setEmail(e.target.value);
    };




  return (
    <>
      <div className={styles.forgot}>
        <div className={styles.forgot__container}>
       

          <div className={styles.forgot__form}>
          <Image src="/forgot6.svg" width={100} height={100} alt = "not" />
                 
            <h3>Forgot password ?</h3>
            <p>
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>
           

            <form onSubmit={handleSubmit}>
              <LoginInput
                icon="user"
                placeholder="Email"
                onChange={handleChange}
                type="text"
                name="email"
                value={email}
                required={true}
              />

              
              <button className={styles.resetButton} type="submit">Send</button>
              </form>
              <div className={styles.gobackButton} onClick={gobackHandler}>
              
              <BiArrowBack  />
              Go back to sign in
                </div>
              
                    
              {message.error && (
                <div
                  className={styles.forgot__error}
                  onAnimationEnd={() => setMessage({ ...message, error: "" })}
                  key={message.error}
                >
                  <p>{message.error}</p>
                </div>
              )}

              {message.successMessage && (
                <div
                  className={styles.forgot__success}
                  onAnimationEnd={() =>
                    setMessage({ ...message, successMessage: "" })
                  }
                  key={message.successMessage}
                >
                  <p>{message.successMessage}</p>
                </div>
              )}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
