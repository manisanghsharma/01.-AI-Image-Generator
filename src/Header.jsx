import { FaGithub } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";

const Header = () => {
    const { width } = useWindowSize();

    const githubUrl = "https://www.github.com/manisanghsharma";
    return (
        <header className="header">
            <img
                id="robot"
                src="https://i.ibb.co/ZgmMFPx/0n8bbimljc2crngf9177hq2o6u.png"
                alt=""
            />
            <h1 id="title">AI Image Generator</h1>
            <button id="github" onClick={() => window.open(githubUrl)}>
                <FaGithub id="git-icon" />
                {width > 975 ? "Checkout on Github" : ""}
            </button>
        </header>
    );
};
export default Header;
