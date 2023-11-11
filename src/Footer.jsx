import { FaGithub } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";
const Footer = () => {
    const {width} = useWindowSize();
  return (
      <footer>
          <p
              className="footer"
              onClick={() =>
                  window.open("https://www.buymeacoffee.com/manisangh")
              }
          >
              Buy Me a Coffee!
          {/* {width < 610 ? <FaGithub style={{ fontSize: "15px" }} /> : null}   */}
          </p>
      </footer>
  );
}
export default Footer