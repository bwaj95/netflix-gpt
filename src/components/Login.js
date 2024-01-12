import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  return (
    <div className={` w-screen h-screen  overflow-x-hidden relative `}>
      <div className=" w-full h-full relative ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-banner"
          className="  "
        />

        <div className=" w-full h-full backdrop-brightness-50 absolute top-0 left-0 ">
          <div className=" w-full h-24 bg-gradient-to-b from-black ">
            <img
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="logo"
              className=" h-full w-auto ml-8 "
            />
          </div>

          {/* Form Container */}
          <section className=" w-[500px] h-[700px] mx-auto bg-black bg-opacity-80 border-white  ">
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
                      placeholder="Full Name"
                      className=" w-full appearance-none p-4 bg-[#333] placeholder:text-white placeholder:opacity-6 placeholder:font-thin rounded-md focus:border border-b-yellow-300 border-b-2 "
                    />
                  )}
                  <input
                    type="text"
                    placeholder="Email or Phone Number"
                    className=" w-full appearance-none p-4 bg-[#333] placeholder:text-white placeholder:opacity-6 placeholder:font-thin rounded-md focus:border border-b-yellow-300 border-b-2 "
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className=" w-full appearance-none p-4 bg-[#333] placeholder:text-white placeholder:opacity-6 placeholder:font-thin rounded-md focus:border border-b-yellow-300 border-b-2 "
                  />
                </div>

                <button className=" text-white font-semibold  w-full bg-red-600 rounded-md py-3 mt-16 ">
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <div className=" flex justify-between items-center my-2 ">
                  <p className=" flex items-center font-thin text-sm text-white ">
                    <input
                      type="checkbox"
                      className=" appearance-none w-3 h-3 rounded-sm bg-gray-100 mr-2 "
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
