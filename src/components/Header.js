import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    // <div className=" w-screen h-full overflow-x-hidden ">
    <div className=" w-full h-24 bg-gradient-to-b from-black flex justify-between px-6 z-50 ">
      <img src={LOGO_URL} alt="logo" className=" h-full w-auto ml-8 " />

      {user && (
        <div className=" flex gap-x-2 items-center ">
          <img src={user.photoURL} alt="user-icon" className=" w-16 h-10 " />
          <button
            onClick={handleSignOut}
            className=" bg-red-500 rounded-md text-white font-bold text-lg py-2 px-4 "
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
