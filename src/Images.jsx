const Images = ({
    setConvis,
    image,
    setDisplay,
    setSliderImg,
    handleClick,
    setContainerDisplay,
}) => {
    return (
        <li
            onClick={(e) => {
                setDisplay("block");
                setSliderImg(e.target.src);
                handleClick();
                setContainerDisplay("none");
                setConvis("hidden");
            }}
        >
            <img key={image.id} src={image.url} alt="" loading="lazy" />
        </li>
    );
};
export default Images;
