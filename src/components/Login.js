import { useRef, useState } from "react";
import { validateSignInData, validateSignUpData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { NETFLIX_BG_BANNER, USER_AVATAR_DEFAULT } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [formDataError, setFormDataError] = useState(null);

  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form submit called");

    let isValid;

    if (isSignInForm) {
      isValid = validateSignInData(
        emailRef.current.value,
        passwordRef.current.value
      );
    } else {
      isValid = validateSignUpData(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    }

    setFormDataError(isValid);
    console.log(isValid);

    if (isValid !== null) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: USER_AVATAR_DEFAULT,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;

              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              setFormDataError(error.code + " - " + error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode + " - " + errorMessage);
          setFormDataError(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          const { uid, email, displayName, photoURL } = user;

          dispatch(
            addUser({
              uid,
              email,
              displayName,
              photoURL,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode + " - " + errorMessage);
          setFormDataError(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className={` w-screen h-screen  overflow-x-hidden relative `}>
      <div className=" w-full h-full relative ">
        <img
          src={NETFLIX_BG_BANNER}
          alt="bg-banner"
          className=" w-full h-full object-cover bg-cover  "
        />

        <div className=" w-full h-full backdrop-brightness-50 absolute top-0 left-0 ">
          <Header />

          {/* Form Container */}
          <section className=" w-full md:w-[500px] h-[700px] mx-auto bg-black bg-opacity-80 border-white  ">
            <div className=" w-3/4 flex flex-col pt-12 px mx-auto  ">
              <p className=" text-white text-4xl font-semibold ">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </p>
              <form>
                <div
                  id="formInputFields"
                  className=" my-6 flex flex-col gap-y-2 "
                >
                  {!isSignInForm && (
                    <input
                      type="text"
                      ref={nameRef}
                      placeholder="Full Name"
                      className=" w-full appearance-none p-4 bg-[#333] placeholder:text-gray-300  placeholder:font-thin rounded-md focus:border border-b-yellow-300 border-b-2 text-white  "
                    />
                  )}
                  <input
                    type="text"
                    ref={emailRef}
                    placeholder="Email or Phone Number"
                    className=" w-full appearance-none p-4 bg-[#333] placeholder:text-gray-300  placeholder:font-thin rounded-md focus:border border-b-yellow-300 border-b-2 text-white  "
                  />
                  <input
                    type="password"
                    ref={passwordRef}
                    placeholder="Password"
                    className=" w-full appearance-none p-4 bg-[#333] placeholder:text-gray-300  placeholder:font-thin rounded-md focus:border border-b-yellow-300 border-b-2 text-white  "
                  />
                </div>

                <p className=" my-2 text-red-500 font-semibold ">
                  {formDataError}
                </p>

                <button
                  onClick={(e) => handleFormSubmit(e)}
                  className=" text-white font-semibold  w-full bg-red-600 rounded-md py-3 mt-16 "
                >
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <div className=" flex justify-between items-center my-2 ">
                  <p className=" flex items-center font-thin text-sm text-white ">
                    <input
                      type="checkbox"
                      className="  w-3 h-3 rounded-sm bg-gray-100 mr-2  "
                    />
                    Remember Me
                  </p>

                  <p className=" font-thin text-sm text-white ">Need help?</p>
                </div>
              </form>

              <div className=" mt-10 ">
                <p className=" text-white opacity-65 ">
                  {isSignInForm ? (
                    <>
                      New to Netflix?{" "}
                      <span
                        onClick={toggleSignInForm}
                        className="cursor-pointer text-white opacity-100 underline font-semibold"
                      >
                        Sign Up Now
                      </span>
                    </>
                  ) : (
                    <>
                      Already a user?{" "}
                      <span
                        onClick={toggleSignInForm}
                        className="cursor-pointer text-white opacity-100 underline font-semibold"
                      >
                        Sign In
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Login;
