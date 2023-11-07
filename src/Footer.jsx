const Footer = () => {
  return (
      <footer>
          <p
              className="footer"
              onClick={() =>
                  window.open("https://www.buymeacoffee.com/manisangh")
              }
          >
              Buy Me a Coffee!
          </p>
      </footer>
  );
}
export default Footer