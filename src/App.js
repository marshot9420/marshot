/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "Title 1";
  let [title, titles] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [like, likes] = useState(0);

  const handleLikeClick = () => {
    likes(like + 1);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>MARSHOT PROJECT</h4>
      </div>
      <div className="content">
        <h4>{title[0]}</h4>
        <p>Published on Feb. 17th</p>
        <span onClick={handleLikeClick}>❤</span>
        <span>{like}</span>
      </div>
      <div className="content">
        <h4>{title[1]}</h4>
        <p>Published on Feb. 17th</p>
      </div>
      <div className="content">
        <h4>{title[2]}</h4>
        <p>Published on Feb. 17th</p>
      </div>
    </div>
  );
}

export default App;
