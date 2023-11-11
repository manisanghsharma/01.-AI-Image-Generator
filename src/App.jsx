import { useState } from "react";
import Footer from "./Footer";
import Images from "./Images";
import Header from "./Header";
import Input from "./Input";
import ImageSlider from "./ImageSlider";
import { Toaster, toast } from "sonner";

function App() {
    const [search, setSearch] = useState("");
    const [theme, setTheme] = useState("dark");
    const [listItems, setListItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [display, setDisplay] = useState("none");
    const [sliderImg, setSliderImg] = useState(0);
    const [current, setCurrent] = useState(0);
    const apiUrl = "https://api.openai.com/v1/images/generations";

    const handleClick = () => {

        let i;
        for (i = 0; i < listItems.length; i++) {
            if (listItems[i].url === sliderImg) {
                // console.log(i);
                setCurrent(i);
                // console.log(current);
                break;
            }
        }
    };

    const handleNext = () => {
        // console.log(current);
        if (current < listItems.length - 1) {
            setCurrent(current => current + 1);
        } else {
            setCurrent(0);
        }

        // console.log(current);
        setSliderImg(listItems[current].url);
    };

    const handleBack = () => {
        // console.log(current);
        if (current > 0 && current < listItems.length) {
            setCurrent(current - 1);
        } else {
            setCurrent(listItems.length - 1);
        }
        // console.log(current);
        setSliderImg(listItems[current].url);
    };

    const handleSearch = async () => {
        setSearch("");
        setListItems([]);
        try {
            setIsLoading(true);
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer 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",
                    "User-Agent": "Chrome",
                },
                body: JSON.stringify({
                    prompt: `${search}`,
                    n: 4,
                    size: "512x512",
                }),
            });
            let data = await response.json();
            let data_array = data.data;
            setListItems(data_array);
            setImgurl(data_array[0].url);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Header />
            <ImageSlider
                current={current}
                listItems={listItems}
                display={display}
                setDisplay={setDisplay}
                sliderImg={sliderImg}
                handleNext={handleNext}
                handleBack={handleBack}
            />
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
                                <Images
                                    current={current}
                                    listItems={listItems}
                                    setDisplay={setDisplay}
                                    image={image}
                                    sliderImg={sliderImg}
                                    setSliderImg={setSliderImg}
                                    handleClick={handleClick}
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