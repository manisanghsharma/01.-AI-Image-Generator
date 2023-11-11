import { FaAngleRight, FaAngleLeft, FaTimes } from "react-icons/fa";
import JsFileDownloader from 'js-file-downloader';
const ImageSlider = ({display, setDisplay, sliderImg, handleBack, handleNext, listItems, current }) => {
    
    const handleDownload = () => {
        new JsFileDownloader({
            url: sliderImg
        })
    }

    return (
        <div className="img-container" style={{ display: display }}>
            <FaTimes
                id="cross"
                style={{ cursor: "pointer" }}
                role="button"
                onClick={() => setDisplay("none")}
            />
            <button id="back" onClick={() => handleBack()}>
                <FaAngleLeft />
            </button>
            <img id="slider-img" src={sliderImg} alt="" />
            <button id="next" onClick={() => handleNext()}>
                <FaAngleRight />
            </button>
            {/* <FaDownload id="download" /> */}
            {/* <a href={sliderImg} download="File" target="_blank" rel="noreferrer"> */}
                <button onClick={() => handleDownload()} id="download">Download Image</button>
            {/* </a> */}
        </div>
    );
};
export default ImageSlider;
