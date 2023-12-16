import { useState, useEffect } from "react";
import Footer from "./Footer";
import Images from "./Images";
import Header from "./Header";
import Input from "./Input";
import axios from 'axios';
import ImageSlider from "./ImageSlider";

function App() {
    const [search, setSearch] = useState("");
    const [listItems, setListItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [display, setDisplay] = useState("none");
    const [sliderImg, setSliderImg] = useState(0);
    const [current, setCurrent] = useState(0);
    const [convis, setConvis] = useState("visible")
    const [fetchError, setFetchError] = useState(null);
    const [containerDisplay, setContainerDisplay] = useState("");

    const apiUrl = "http://localhost:3500/data";
    // const apiUrl = "https://api.openai.com/v1/images/generations";
    
    // useEffect(() => {
    //     const fetchItems = async() => {
    //         try{
    //             const response = await axios.get(apiUrl);
    //             console.log(response.data);
    //         }
    //         catch(err){
    //             console.log(err.message);
    //         }
    //     }
    //     fetchItems();
    // }, [])

    const handleClick = () => {
        let i;
        for (i = 0; i < listItems.length; i++) {
            if (listItems[i].url === sliderImg) {
                setCurrent(i);
                break;
            }
        }
    };

    const handleNext = () => {
        if (current < listItems.length - 1) {
            setCurrent((current) => current + 1);
        } else {
            setCurrent(0);
        }
        setSliderImg(listItems[current].url);
    };

    const handleBack = () => {
        if (current > 0 && current < listItems.length) {
            setCurrent(current - 1);
        } else {
            setCurrent(listItems.length - 1);
        }
        setSliderImg(listItems[current].url);
    };

    const handleSearch = async () => {
        setSearch("");
        setListItems([]);
        try {
            setIsLoading(true);
            // const response = await fetch(apiUrl, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         Authorization: import.meta.env.VITE_SECRET_KEY,
            //         "User-Agent": "Chrome",
            //     },
            //     body: JSON.stringify({
            //         prompt: `${search}`,
            //         n: 1,
            //         size: "512x512",
            //     }),
            // });
            // let data = await response.json();
            // let data_array = data.data;
            // setListItems(data_array);
            const response = await axios.get(apiUrl);
            console.log(response.data);
            setListItems(response.data);
        } 
        catch(err){
            console.log(err.message);
            setFetchError("Something is wrong with the server")
        }
        
        finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Header />
            <ImageSlider
                search={search}
                setConvis={setConvis}
                current={current}
                display={display}
                setDisplay={setDisplay}
                sliderImg={sliderImg}
                handleNext={handleNext}
                handleBack={handleBack}
                setContainerDisplay={setContainerDisplay}
            />
            <div className="container" style={{ display: containerDisplay, visibility: convis }}>
                <Input
                    search={search}
                    setSearch={setSearch}
                    handleSearch={handleSearch}
                />
                {isLoading && <p id="loading">Loading Images...</p>}
                {isLoading || listItems &&
                    (listItems.length != 0 && (
                        <ul>
                            {listItems.map((image) => (
                                <Images
                                    key={image.id}
                                    setConvis={setConvis}
                                    setDisplay={setDisplay}
                                    image={image}
                                    setSliderImg={setSliderImg}
                                    handleClick={handleClick}
                                    setContainerDisplay={setContainerDisplay}
                                />
                            ))}
                        </ul>
                    ))}
            </div>
            <Footer />
            
        </>
    );
}

export default App;
