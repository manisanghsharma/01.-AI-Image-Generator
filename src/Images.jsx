const Images = ({listItems, image, setDisplay, setSliderImg, handleClick, current }) => {
    return (
        <li
            onClick={(e) => {
                setDisplay("block");
                setSliderImg(e.target.src);
                handleClick();
            }}
        >
            <img key={image} src={image.url} alt="" loading="lazy" />
        </li>
    );
};
export default Images;
