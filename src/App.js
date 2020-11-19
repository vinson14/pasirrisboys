import { useEffect, useState } from "react";
import "./App.css";
import GetData from "./GetData";
import Person from "./Person";
import Vinson from "./images/vinson.jpg";
import Chimin from "./images/chimin.jpg";
import Junhui from "./images/junhui.jpg";

function App() {
    const [winnings, setWinnings] = useState("Loading");

    useEffect(() => {
        const getData = new GetData();
        getData
            .load()
            .then(() => getData.winnings())
            .then((response) => setWinnings(response));
    });
    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row bg-dark">
                    <div className="col">
                        <h1 className="pri-font text-white text-center">
                            The Pasir Ris Boys
                        </h1>
                    </div>
                </div>
                <Person name="Vinson" winnings={winnings.vinson} img={Vinson} />
                <Person
                    name="Chi Min"
                    winnings={winnings.chimin}
                    img={Chimin}
                />
                <Person
                    name="Jun Hui"
                    winnings={winnings.junhui}
                    img={Junhui}
                />
            </div>
        </div>
    );
}

export default App;
