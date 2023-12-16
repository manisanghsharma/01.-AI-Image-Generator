const Input = ({search, setSearch, handleSearch}) => {
  return (
      <form className="inputBox" onSubmit={(e) => e.preventDefault()}>
          <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Write prompt here..."
              id="searchBox"
          />
          <button id="searchBtn" onClick={() =>{
            setTimeout(handleSearch, 2000)
          }} type="submit">
              Generate
          </button>
      </form>
  );
}
export default Input