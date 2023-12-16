import { FaAngleRight, FaAngleLeft, FaTimes } from "react-icons/fa";
import { saveAs } from "file-saver";
const ImageSlider = ({
    display,
    setDisplay,
    sliderImg,
    handleBack,
    handleNext,
    current,
    setContainerDisplay,
    setConvis,
    search
}) => {
    const handleDownload = (url) => {
        saveAs(url, `${search}-${current + 1}`);
    };
    return (
        <div className="img-container" style={{ display: display }}>
            <FaTimes
                id="cross"
                style={{ cursor: "pointer" }}
                role="button"
                onClick={() => {
                    setDisplay("none");
                    setContainerDisplay("block");
                    setConvis("visible");
                }}
            />
            <button id="back" onClick={() => handleBack()}>
                <FaAngleLeft />
            </button>
            <img id="slider-img" src={sliderImg} alt="" />
            <button id="next" onClick={() => handleNext()}>
                <FaAngleRight />
            </button>

            <button onClick={() => handleDownload(sliderImg)} id="download">
                Download Image
            </button>
        </div>
    );
};
export default ImageSlider;
