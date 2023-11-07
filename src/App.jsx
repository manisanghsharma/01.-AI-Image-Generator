import { useState } from "react"
import Footer from "./Footer";
import Images from "./Images";
import Header from "./Header";
import Input from "./Input";

function App() {
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('dark');
  const [listItems, setListItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = "https://api.openai.com/v1/images/generations";


  const handleSearch = async() => {
    setSearch('');
    setListItems([]);
    try{
      setIsLoading(true);
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "Bearer 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",
                "User-Agent": "Chrome",
        },
        body:JSON.stringify({
           prompt: `${search}`,
           n:4,
           size: "512x512"
        }),
      });
      let data = await response.json();
      let data_array = data.data;
      console.log(data_array);
      setListItems(data_array);
      setImgurl(data_array[0].url);
    }

    finally{
      setIsLoading(false);
    }

  }

  return (
    <>
      <Header />
      <div className="container">
          
          <Input 
            search={search} 
            setSearch={setSearch} 
            handleSearch={handleSearch}
            theme={theme}
            setTheme={setTheme}
          />
          {isLoading && <p id="loading">Loading Images...</p>}
          {isLoading ||
              (listItems.length != 0 && (
                  <ul>
                      {listItems.map((image) => (
                          <Images image={image} />
                      ))}
                  </ul>
              ))}

      </div>
      <Footer />
      </>
  );
}

export default App
