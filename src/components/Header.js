import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <div className=" w-screen h-full overflow-x-hidden ">
      <div className=" w-full h-24 bg-gradient-to-b from-black flex justify-between px-6 ">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className=" h-full w-auto ml-8 "
        />

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
    </div>
  );
};
export default Header;
