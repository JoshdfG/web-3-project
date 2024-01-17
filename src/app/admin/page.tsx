"use client";
import React, { useState, useRef,useEffect } from "react";

export default function Admin() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const [isChecked1, setIsChecked1] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1((prevChecked) => !prevChecked);
    setIsLoading1(true);

    if (!isChecked1) {
      setTimeout(() => {
        setIsLoading1(false);
      }, 200);
    }
  };
  type Errors = {
    name?: string;
    email?: string;
    password?: string;
    wallet?:string;
  };
  
  type SetErrors = (errors: Errors) => void;
  type SetIsFormValid = (isValid: boolean) => void;

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [wallet, setWallet] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    validateForm();
  }, [name, email, password,wallet]);

  const validateForm = () => {
    let errors: Errors = {};

    if (!name) {
      errors.name = 'Required!';
    }

    if (!email) {
      errors.email = 'Required!';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }

    if (!password) {
      errors.password = 'Required!';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }
    
    if (!wallet) {
      errors.wallet = 'Required!';
    } else if (password.length < 16) {
      errors.wallet = 'Enter a valid wallet address.';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };
  return (
    <>
      <div className="min-h-[100dvh] mt-12 w-[85%] md:w-[60%] lg:w-[40%] mx-auto">
        <h1
          className="text-center uppercase text-red-300 mt-12 text-sm font-bold scroll-smooth tracking-wider"
          id="pricing"
        >
          Become an admin
        </h1>

        <div className="border-2 rounded-2xl border-red-300  w-[7%] md:w-[4%] mx-auto mt-2"></div>
        <div className="card backdrop-blur-sm bg-gray-200/10 text-center p-6 m-4  mx-auto rounded-2xl text-white/80 ">
          <div>
            <h1 className="font-semibold  capitalize text-2xl mb-16 mt-8">
              Register
            </h1>
          </div>
          <div className="relative">
            <label htmlFor="">
              <input
                ref={inputRef}
                type="text"
                placeholder="Company Name"
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="input-box w-[80%] bg-transparent border-b-2  mb-16 outline-none"
              />
              
               {errors.name && name && 
                (<p className="text-red-500 text-sm absolute top-0 right-0 mt-[24px] mr-12">{errors.name}</p>)
                }
            </label>
            <label htmlFor="">
              <input
                ref={inputRef}
                type="text"
                required
                placeholder="E-mail"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-[80%] bg-transparent border-b-2 mb-16 outline-none"
              />
                 {errors.email && email && 
                (<p className="text-red-500 text-sm absolute top-0 right-0 mt-[24px] mr-12">{errors.email}</p>)
                }
            </label>
            <label htmlFor="">
              <input
                ref={inputRef}
                type="Password"
                placeholder="Blockchain Wallet"
                required
                value={wallet}
                onChange={(e)=>setWallet(e.target.value)}
                className="w-[80%] bg-transparent border-b-2 mb-16 outline-none"
              />
                  {errors.wallet && wallet && <p className="text-red-500 text-sm  absolute top-0 right-0 mt-[205px] mr-12">{errors.wallet}</p>}
            </label>
            <label htmlFor="">
              <input
                ref={inputRef}
                type="Password"
                placeholder="Password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-[80%] bg-transparent border-b-2 mb-6 outline-none"
              />
               {errors.password && password && <p className="text-red-500 text-sm absolute top-0 right-0 mt-[294px] mr-12">{errors.password}</p>}
            </label>
          </div>
          <div className="flex justify-between mx-auto w-[80%]">
            <div className="links-container flex align-middle justify-center mb-4">
              <label htmlFor="check1" className="check-box">
                <input
                  ref={inputRef}
                  id="check1"
                  type="checkbox"
                  className="checkbox hidden"
                  checked={isChecked1}
                  onChange={handleCheckboxChange1}
                />
                {!isChecked1 ? (
                  <svg
                    className=""
                    id="not-completed-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="12"
                      stroke="#8A8A8A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="4 6"
                    />
                  </svg>
                ) : isLoading1 ? (
                  <svg
                    className="loading "
                    id="loading"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2"
                      stroke="#e3e3e3"
                      stroke-width="2.08333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="completed"
                    id="completed"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" fill="#00703c"></circle>
                    <path
                      d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
                      fill="#fff"
                    ></path>
                  </svg>
                )}
              </label>
              <span className="mr-2 ">I Agree to the terms & Conditions</span>
            </div>
          </div>
          <button
            className="logo bg-blue-900 w-[80%] p-2 rounded-xl active:bg-blue-950"
            onClick={handleButtonClick}
          >
            Register
          </button>
          <div>
            <p className=" mt-6 mb-8">
              Already have an account ?
              <a href="/login" className="hover:text-blue-400 ml-1">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
