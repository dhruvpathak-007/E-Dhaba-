import { assets } from "../../assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        To Know More About Developer
        <br /> Connect On
      </p>
      <div className="app-download-platforms">
        <a
          href="https://www.linkedin.com/in/dhruv-pathak-7773191b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.play_store} alt="" />
        </a>
        <a href="https://github.com/dhruvpathak-007">
          <img src={assets.app_store} alt="" />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
