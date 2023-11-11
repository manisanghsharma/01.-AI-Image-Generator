import { FaAngleRight, FaAngleLeft, FaTimes } from "react-icons/fa";
import {saveAs} from 'file-saver';
const ImageSlider = ({display, setDisplay, sliderImg, handleBack, handleNext, listItems, current }) => {
    
    const handleDownload = async(url) => {
        // saveAs(sliderImg, 'Image.jpg');
        // const outsideRes = await fetch(outsideUrl);

        // const blob = await outsideRes.blob();
        // const url = window.URL.createObjectURL(blob);
        // const options = [
        //     headers: {
        //         Authorization:
        //             "Bearer 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",
        //     },
        // ];
        const blob = await fetch(url, {
            headers: {
                Authorization:
                    "Bearer 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",
            }
        }).blob();
        saveAs(blob, "image.png");
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
            <button
                onClick={() => handleDownload(sliderImg)}
                id="download"
            >
                Download Image
            </button>
            {/* </a> */}
        </div>
    );
};
export default ImageSlider;
