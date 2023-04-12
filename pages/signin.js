import React from "react";

import styles from "../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";

import LoginInput from "../components/custom/loginIput";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";

import { getProviders } from "next-auth/react";

import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import BarLoader from "react-spinners/BarLoader";
import {getCsrfToken} from 'next-auth/react'


function Signin({ providers, csrfToken, callbackUrl }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const [message, setMessage] = useState({
    error: "",
    successMessage: "",
  });

  const [loading, setLoading] = useState(false);
  
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: user.email,
      password: user.password,
    });

    if (result?.error) {
      setLoading(false);
      setMessage({ ...message, error: result.error });
    }

    if (result?.ok) {
      const session = await getSession();
      console.log(session);
      const successMessage = "You have successfully logged in !";
      setLoading(false);

      setMessage({ ...message, successMessage });

        router.push(callbackUrl || "/");
 

    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
   
  };

  return (
    <>
     

      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.goback__svg}>
              <BiLeftArrowAlt />
            </div>

            <span>Shop over +1 million products !</span>
          </div>

          <div className={styles.login__form}>
            <Image src="/profilelogo.svg" width={100} height={100} alt="not" />
            <h3>Sign in</h3>
            <p> Sign in and start shopping immediately !</p>

            <form onSubmit={handleSubmit}>
              <LoginInput
                icon="user"
                placeholder="Username"
                onChange={handleChange}
                type="text"
                name="email"
                value={user.email}
                required={true}
              />
              <LoginInput
                icon="password"
                placeholder="Password"
                onChange={handleChange}
                type="password"
                name="password"
                value={user.password}
                required={true}
              />
              {message.error && (
                <div
                  className={styles.login__error}
                  onAnimationEnd={() => setMessage({ ...message, error: "" })}
                  key={message.error}
                >
                  <p>{message.error}</p>
                </div>
              )}

              {message.successMessage && (
                <div
                  className={styles.login__success}
                  onAnimationEnd={() =>
                    setMessage({ ...message, successMessage: "" })
                  }
                  key={message.successMessage}
                >
                  <p>{message.successMessage}</p>
                </div>
              )}

              <div className={styles.links}>
                <span>
                  <Link className={styles.links__span__a} href="/signup">
                    Create an account
                  </Link>
                </span>
                <span>
                  <Link
                    className={styles.links__span__a}
                    href="auth/forgot"
                  >
                    Forgot password
                  </Link>
                </span>
              </div>

              <button className={styles.loginButton} type="submit">
                {
                  loading ? <BarLoader
                  color="#fff"
                  height={5}
                  loading = {loading}
                  speedMultiplier={2}
                  width={100}
                />
                : "Sign in"
                }

              </button>

              <div className={styles.divider}>
                <span>or</span>
              </div>
              { providers &&
                Object.values(providers).map((item, index) =>
                item.id === "credentials" ? null : (
                  <div className={styles.login__social} key={index}>
                    <a onClick={() => signIn(item.id)}>
                      <Image
                        src={`/${item.id}.svg`}
                        width={20}
                        height={20}
                        alt={`${item.name}`}
                      />
                      <span>Continue with {`${item.name}`}</span>
                    </a>
                  </div>
                )
              )}
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default Signin;

export async function getServerSideProps(context) {
  const { req, query } = context;
  const providers = await getProviders();

  const session = await getSession({ req });

  const csrfToken = await getCsrfToken(context);
  const { callbackUrl } = query;

  let defaultCallbackUrl = "/";

  if (callbackUrl) {
    defaultCallbackUrl = callbackUrl;
  }

  if (session) {
    return {
      redirect: {
        destination: defaultCallbackUrl,
      },
    };
  }

  return {
    props: { providers, session, csrfToken, callbackUrl: defaultCallbackUrl },
  };
}
