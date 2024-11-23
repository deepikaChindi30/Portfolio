import logo from "../assets/newIcon.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import resume from "../assets/DeepikaChindi_2024.pdf"
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
const NavBar = () => {
  return( <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" style={{ backgroundColor: "transparent" }} src={logo} alt="Logo"></img>
    </div>
    <div className="m-8 flex item-center justify-center gap-4 text-2xl">
    <a
          href="https://www.linkedin.com/in/deepika-chindi-b29766272"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
        <FaLinkedin />
        </a>
        <a
          href="https://github.com/deepikaChindi30"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500"
        >
        <FaGithub/>
        </a>
        <a
          href={resume} 
          download="Deepika_Chindi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500 text-lg font-semibold"
          title="Download"
        >
          Resume
        </a>
        {/* <FaSquareXTwitter/>
        <FaInstagram/> */}
        
    </div>
  </nav>)
  
}

export default NavBar;