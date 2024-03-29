'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const username = useRef("");
  const password = useRef("");
  const [message, setMessage] = useState("");

  const { status } = useSession();

  const onSubmit = async () => {
    console.log("Signing in...");
    
    setMessage('Signing in...');

    try {
      const signInResponse = await signIn("credentials", {
        username: username.current,
        password: password.current,
        redirect: true,
        callbackUrl: "/dashboard"
      })

      if (!signInResponse || signInResponse.ok !== true) {
        setMessage("Invalid credentials");
      } else {
        router.refresh();
      }

    } catch (err) {
      console.log(err);
    }

    setMessage(message);
  }

  useEffect(() => {
    console.log(status);
    
    if (status === 'authenticated') {
      router.refresh();
      router.push('/dashboard');
    }
  }, [status]);

  return (
    <div id="Connexion">
      <div className="left">
        <div className="login">
          <h1>Welcome back</h1>
          <h2>Please enter your details.</h2>
          <h3>{message}</h3>
          <div className='form'>
            <label htmlFor="username">Username</label>
            <input type="username" name="username" id="Username" placeholder="Enter username" required maxLength={64} onChange={e => (username.current = e.target.value)} />
            <label htmlFor="Password">Password</label>
            <input type="password" name="Password" id="Password" placeholder="**********" required maxLength={64} onChange={e => (password.current = e.target.value)} />
            <div className="middle">
              <div className="remember">
                <input type="checkbox" name="CheckBox" id="CheckBox" />
                <label htmlFor="CheckBox">Remember for 30 days</label>
              </div><a href="#" className='select-none'>Forgot password</a>
            </div>
            <button className="SubmitBtn" onClick={onSubmit}>Sign in</button>
          </div>
          <div className="bottom">
            <p>Don&rsquo;t have an account? </p>
            <a href="/auth/signup" className='select-none' >Sign up</a>
          </div>
        </div>
      </div>
      <div className="image">
        <Image src="/img/connexion-white.png" alt="Application preview image" width={720} height={960} className='max-h-full max-w-full' />
        {/* {theme == "dark" ? <img src="Dashboard-dark.png" alt="Application dark mode" id="imgDarkMode" /> : ""} */}
      </div>
    </div>
  )
}

export default Page;