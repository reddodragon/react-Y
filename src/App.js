import "./App.css";
import Home from "./Pages/Home/home"
import SearchResult from './Pages/SearchResults/SearchResult'
import Detail from './Pages/Detail/Detail'

import { Route, Link } from "wouter";
import "./";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <svg
            className="App-logo"
            xmlns="http://www.w3.org/1000/svg"
            viewBox="-11.5 -10.23174 23 20.46348"
          >
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" stroke-width="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </Link>

        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResult} />
        <Route path="/gif/:id" component={Detail} />
      </section>
    </div>
  );
}

export default App;
