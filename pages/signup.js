import React from 'react'
import styles from '../styles/signup.module.scss'
import LoginInput from '../components/custom/loginIput'
import Header from '../components/header/index'
import Footer from '../components/footer/index'

import Link from 'next/link'
import {useState} from 'react'
import axios from 'axios'
import { getProviders } from 'next-auth/react'
import {BounceLoader} from "react-spinners";






function Signup({providers}) {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [message,setMessage] = useState('')


  const inputs = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Username',
      icon: 'user',
      pattern: '[a-zA-Z0-9]{3,}',
      error: 'Username must be at least 3 characters long and contain only letters and numbers',
      required: true,

    },
    {
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      icon: 'email',
      pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
      error: 'Please enter a valid email address',
      required: true,

    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      icon: 'password',
      pattern: '[a-zA-Z0-9]{3,}',
      error: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number',
      required: true,

    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      icon: 'password',
      pattern: '[a-zA-Z0-9]{3,}',
      error: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number',
      required: true,
      
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      

      const {data} = await axios.post('/api/auth/signup', {
        name: user.name,
        email: user.email,
        password: user.password
      })


      if (data) {
        setLoading(false)
        setMessage(data.message)
      }


    }
    catch (err) {
    
        setLoading(false)
        console.log(err)
   
    }

    finally {
      setLoading(false)
    }



  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
    console.log(user)
  }





  return (
    <>
      
      <div className={styles.signup}>
        <div className={styles.signup__container}>
          <div className={styles.signup__form}>
            <h3>Signup</h3>
            <p>Sign up and start shopping immediately !</p>

            <form onSubmit={handleSubmit}>
              {inputs.map((input, index) => (
                <LoginInput
                  key={index}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  icon={input.icon}
                  value={user[input.name]}
                  onChange={handleChange}
                  required={input.required}
                  pattern={input.pattern}
                  error={input.error}

                 


                />
              ))}
              <button
                disabled={loading ? true : false}
                className={styles.submitButton}
                type="submit"


              >
                Signup
              </button>
            </form>

            <p className={styles.already}>
              Already have an account ?{" "}
              <Link href="/login">
                <a className={styles.signup__link}>Login</a>
              </Link>
            </p>
            {message && <p className={styles.error}>{message}</p>}
            <BounceLoader color="#36d7b7" speedMultiplier={2} loading = {loading} size = {50} />
          </div>
        </div>
      </div>
   
    </>
  );
}

export default Signup

