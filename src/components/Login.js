import { useState } from "react";
import Header from "./Header";
const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  
  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg"
          alt="background"
          className="w-full min-h-full"/>
      </div>
      <form className="w-2/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">{ isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
        <input
          type="text"
          placeholder="Full Name"
          className="border-white rounded-lg p-4 my-4 w-full bg-black"
        />)}
        <input
          type="text"
          placeholder="Email Address"
          className="border-white rounded-lg p-4 my-4 w-full bg-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-white rounded-lg p-4 my-4 w-full bg-black"
        />
        <button className="rounded-lg bg-red-700 p-4 my-6 w-full">{ isSignInForm? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{ isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
