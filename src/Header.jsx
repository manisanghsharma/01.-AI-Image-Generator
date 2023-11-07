import { FaGithub } from "react-icons/fa";

const themeImg = document.getElementById("theme");
const Header = ({theme, setTheme}) => {
    const changeTheme = () => {
            if(theme == 'dark'){
                themeImg.src = "/src/assests/moon.png";
                setTheme('light');
            }   

            else{
                themeImg.src = "/src/assests/sun.png";
                setTheme("dark");
            }
    }
    const githubUrl = "https://www.github.com/manisanghsharma";
    return (
        <header className="header">
            <img id="theme" src="/src/assests/sun.png" onClick={changeTheme}/>
            <h1>AI Image Generator</h1>
            <button id="github" onClick={() => window.open(githubUrl)}>
                <FaGithub id="git-icon" />
                Checkout on Github
            </button>
        </header>
    );
};
export default Header;
