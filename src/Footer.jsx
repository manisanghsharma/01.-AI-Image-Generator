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
          </p>
          {width < 610 ? (
              <FaGithub
                  role="button"
                  onClick={() => window.open("https://www.github.com/manisanghsharma")}
                  id="footer-git"
              />
          ) : null}
      </footer>
  );
}
export default Footer