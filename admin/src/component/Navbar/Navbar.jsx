import { assets } from "../../assets/assets";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <img
        onClick={() => (window.location.href = "http://localhost:5173/")}
        className="logo"
        src={assets.logo}
        alt=""
      />
      <p>Admin Panel</p>
      <img
        onClick={() => (window.location.href = "http://localhost:5173/")}
        className="profile"
        src={assets.profile_image}
        alt=""
      />
    </div>
  );
};

export default Navbar;
