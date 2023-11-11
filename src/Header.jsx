import { FaGithub } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";

const Header = () => {
    const { width } = useWindowSize();

    const githubUrl = "https://www.github.com/manisanghsharma";
    return (
        <header className="header">
            <img id="robot" src="src/assests/robot.png" alt="" />
            <h1 id="title">AI Image Generator</h1>
            <button id="github" onClick={() => window.open(githubUrl)}>
                <FaGithub id="git-icon" />
                {width > 975 ? "Checkout on Github" : ""}
            </button>
        </header>
    );
};
export default Header;
