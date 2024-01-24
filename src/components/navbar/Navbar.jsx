import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="facebook" />
          </a>

          <a href="#">
            <img src="/instagram.png" alt="instagram" />
          </a>

          <a href="#">
            <img src="/youtube.png" alt="youtube" />
          </a>

          <a href="#">
            <img src="/dribbble.png" alt="dribble" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
