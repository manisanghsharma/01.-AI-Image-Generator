const Images = ({image}) => {
  return (
      <li onClick={() => window.open(image.url)}>
          <img src={image.url} alt="" loading="lazy"/>
      </li>
  );
}
export default Images