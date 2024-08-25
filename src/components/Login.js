import { useRef, useState } from "react";
import Header from "./Header";
import { fullNameValidator, emailValidator, passwordValidator } from "../utils/validate";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);
  const [fullNameErrorMessage, setFullNameErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{
    // Validate the form data 
    let emailError = emailValidator(email?.current?.value);
    let passwordError = passwordValidator(password?.current?.value);
    let fullNameError = null;
    if(!isSignInForm){
      fullNameError = fullNameValidator(fullName?.current?.value);
    }
    setEmailErrorMessage(emailError);
    setPasswordErrorMessage(passwordError);
    setFullNameErrorMessage(fullNameError);
    // Sign In/ Sign Up
    if ([emailError, passwordError, fullNameError].every(value => value === null)) {
      authUser();
    }
    else{
      console.log("Please check all the fields");
    }
  };

  const authUser = () =>{
    console.log("User is signed in");
    if(!isSignInForm){
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setEmailErrorMessage(errorCode + "-" + errorMessage);
        // ..
      });
    } else{
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user,"logged in user info");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setPasswordErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  }
  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg"
          alt="background"
          className="w-full min-h-full"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="w-2/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            name="firstName"
            placeholder="Full Name"
            className="border-white rounded-lg p-4 my-4 w-full bg-black"
          />
        )}
        {!isSignInForm && (
        <p className="px-2 text-red-600">{fullNameErrorMessage}</p>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="border-white rounded-lg p-4 my-4 w-full bg-black"
        />
        <p className="px-2 text-red-600">{emailErrorMessage}</p>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="border-white rounded-lg p-4 my-4 w-full bg-black"
        />
        <p className="px-2 text-red-600">{passwordErrorMessage}</p>
        <button className="rounded-lg bg-red-700 p-4 my-6 w-full" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
