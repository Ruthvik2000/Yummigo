import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";  // ✅ Use 'react-router-dom'
import useOnlineStatus from "../utils/Hooks/useOnline";
import UserContext from "../utils/Hooks/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center px-6 py-4 bg-pink-100 sm:bg-yellow-50 md:bg-blue-100 lg:bg-orange-50 xl:bg-green-100 shadow-md fixed top-0 z-50">
      
      {/* Logo & Title */}
      <div className="flex items-center gap-4 w-full lg:w-auto justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              className="w-20 h-20 rounded-full"
              src={LOGO_URL}
              alt="Yummigo Logo"
            />
          </Link>
          <h1 className="text-2xl font-bold text-orange-600">Yummigo</h1>
        </div>

        {/* Menu button only visible on small screens */}
        <button
          className="text-2xl lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Nav links */}
      <ul className={`flex-col lg:flex-row flex items-center gap-4 text-gray-700 font-medium text-xl transition-all duration-200 ease-in ${menuOpen ? 'flex' : 'hidden'} lg:flex`}>
        <li className="text-sm">
          Online Status: {onlineStatus ? "✅" : "🔴"}
        </li>

        <li>
          <Link
            to="/"
            className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded-md transition"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded-md transition"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="px-4 py-2 hover:bg-orange-500 hover:text-white rounded-md transition"
          >
            Contact Us
          </Link>
        </li>

        <li>
          <button className="px-4 py-2 border border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white rounded-md transition"
                onClick={()=>
                    {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
        </li>

        <li className="px-4 font-bold">{loggedInUser}</li>
      </ul>
    </div>
  );
};

//Layout wrapper that includes the Header and pushes content down
const headerpage = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-28 px-4">{children}</div>
    </>
  );
};

export default headerpage;
