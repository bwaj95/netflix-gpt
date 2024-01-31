import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { removeGptSliceData, toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage, removeConfigSliceData } from "../utils/configSlice";

import { MdLanguage } from "react-icons/md";
import { removeMovieSliceData } from "../utils/moviesSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        /**
         * Auth change will be detected by the onAuthStateChanged()
         * and removeUser() will be dispatched to the store.
         */
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    /**
     * onAuthStateChanged() is like an event listener that gets triggered
     * whenever the user state changes.
     * eg: on signin, sigun or sign out
     *
     * instead of handling cases in multiple places, we can use this to handle
     * at one place.
     *
     * on use sign-in or sign-up we need to add user to store and redirect.
     * redirect not possbile here as we are outside router. handle redirect in component.
     *
     * on user sign-out, we need to remove user from store
     */
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());

        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    // <div className=" w-screen h-full overflow-x-hidden ">
    <div className=" w-full h-24 bg-gradient-to-b from-black flex justify-between px-6 z-50 ">
      <img src={LOGO_URL} alt="logo" className=" h-full w-auto ml-8 " />

      {user && (
        <div className=" flex gap-x-2 items-center ">
          {showGptSearch && (
            <div className=" flex items-center gap-x-1 bg-gray-900 text-white py-1 px-2 ">
              <MdLanguage className=" w-8 h-8 " />

              <select
                name="app-language"
                id="app-language"
                className=" bg-gray-900 text-white "
                onChange={(e) => handleLanguageChange(e)}
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option key={language.identifier} value={language.identifier}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            className=" text-white bg-blue-500 hover:bg-blue-600 rounded-lg mx-4 my-1 px-4 py-2  "
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GptSearch"}
          </button>
          <img
            src={user.photoURL}
            alt="user-icon"
            className=" w-16 h-10 hidden md:block "
          />
          <button
            onClick={handleSignOut}
            className=" bg-red-500 rounded-md text-white font-bold text-lg py-2 px-4 hidden md:block "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
    // </div>
  );
};
export default Header;
