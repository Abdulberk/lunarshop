import React from 'react'
import {useRouter} from 'next/router'
import LoginInput from '../../../components/custom/loginIput'
import {useState} from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from '../../../styles/forgot.module.scss'


function Reset({token}) {

    const [password, setPassword] = useState({
        password: "",
        confirmPassword: "",

    });
    const [message, setMessage] = useState({
        error: "",
        successMessage: "",
    });

    const router = useRouter();


    const handleSubmit = async (e) => {
            e.preventDefault();

            if (!checkPassword()) {
                setMessage({ ...message, error: "Passwords do not match" });
                return;
              }
    try {
        const response = await axios.post("/api/auth/reset", {
            password: password.password,
            token: token
        });
       
        setMessage({ ...message, successMessage: response.data.message });
        
    } catch (error) {
   
        setMessage({ ...message, error: error.response.data.error });
        
    }


    }

    const handleChange = (e) => {
       
        if (e.target.name === "password") {
            setPassword((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }
          if (e.target.name === "confirmPassword") {
            setPassword((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }));
          }

         
    };

    const checkPassword = () => {
      return password.password === password.confirmPassword;
    };


    React.useEffect(() => {
        console.log(password);
      }, [password]);




  return (
    <>
      <div className={styles.forgot}>
        <div className={styles.forgot__container}>
          <div className={styles.forgot__form}>
            <Image src="/forgot6.svg" width={100} height={100} alt="not" />

            <h3>Create new password</h3>
            
            <form onSubmit={handleSubmit}>
              <LoginInput
                icon="password"
                placeholder="Password"
                onChange={handleChange}
                type="password"
                name="password"
                value={password.password}
                required={true}
              />

              <LoginInput
                icon="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                type="password"
                name= "confirmPassword"
                value={password.confirmPassword}
                required={true}
              />

              <button className={styles.resetButton} type="submit">
                Send
              </button>
            </form>

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

export default Reset

export async function getServerSideProps(context) {

    const {query} = context;

    const {token} = query;

    return {
        props: {token}

    }



}
