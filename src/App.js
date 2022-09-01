import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Gif from "./services/components/Gif";
import getGifs from "./services/getGifs";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword: "programming" }).then((gifs) => setGifs(gifs));

    //setGifs(DIFERETNS_GIFFS)
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <Gif
            key={singleGif.id}
            title={singleGif.title}
            url={singleGif.url}
            id={singleGif.id}
          ></Gif>
        ))}
      </section>
    </div>
  );
}

export default App;
