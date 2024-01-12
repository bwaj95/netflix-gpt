import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BrowsePage from "./BrowsePage";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <BrowsePage />,
    },
  ]);

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
    onAuthStateChanged(auth, (user) => {
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
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
