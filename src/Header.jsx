import { FaGithub } from "react-icons/fa";

const themeImg = document.getElementById("theme");
const Header = () => {

    const githubUrl = "https://www.github.com/manisanghsharma";
    return (
        <header className="header">
            <h1>AI Image Generator</h1>
            <button id="github" onClick={() => window.open(githubUrl)}>
                <FaGithub id="git-icon" />
                Checkout on Github
            </button>
        </header>
    );
};
export default Header;
