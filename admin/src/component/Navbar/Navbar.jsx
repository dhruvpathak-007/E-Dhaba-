import { assets } from "../../assets/assets";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <img
        onClick={() =>
          (window.location.href = "https://e-dhaba-q5v7.onrender.com")
        }
        className="logo"
        src={assets.logo}
        alt=""
      />
      <p>Admin Panel</p>
      <img
        onClick={() =>
          (window.location.href = "https://e-dhaba-q5v7.onrender.com")
        }
        className="profile"
        src={assets.profile_image}
        alt=""
      />
    </div>
  );
};

export default Navbar;
