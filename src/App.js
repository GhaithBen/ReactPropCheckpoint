import React from "react";
import Child from "./Profile/ChildComponent";
import Picture from "./Pictures/image.jpg";

function App() {
    const handleName = () => {
        alert("Ghaith Ben Hassine");
    };
    const styleObject = {
        color: "green",
        textAlign: "center",
        fontFamily: "cursive",
    };
    const image = { width: "600px" };
    return (
        <div className="App" style={styleObject}>
            <Child
                fullName="Ben Hassine Ghaith"
                bio="I am a web develper I studied in Go My Code am 27 years old and am passionate with coding"
                profession="web developer"
                handleName={handleName}
            >
                <img src={Picture} alt="ghaith" style={image} />
            </Child>
        </div>
    );
}

export default App;
