/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [like, setLike] = useState(0);
  let [detail, setDetail] = useState(false);

  const handleLikeClick = () => {
    setLike(like + 1);
  };

  const handleDetailClick = () => {
    if (detail === false) {
      setDetail(true);
    } else {
      setDetail(false);
    }
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>MARSHOT PROJECT</h4>
      </div>

      <div className="content">
        <h4 onClick={handleDetailClick}>{title[0]}</h4>
        <p>Published on Feb. 17th</p>
        <span onClick={handleLikeClick}>❤</span>
        <span>{like}</span>
      </div>

      <div className="content">
        <h4>{title[1]}</h4>
        <p>Published on Feb. 17th</p>
        <span onClick={handleLikeClick}>❤</span>
        <span>{like}</span>
      </div>

      <div className="content">
        <h4>{title[2]}</h4>
        <p>Published on Feb. 17th</p>
        <span onClick={handleLikeClick}>❤</span>
        <span>{like}</span>
      </div>

      {detail == true ? <ContentDetail /> : null}
    </div>
  );
}

const ContentDetail = () => {
  return (
    <div className="content-detail">
      <h4>Title</h4>
      <p>Date</p>
      <p>Detail Content</p>
    </div>
  );
};

export default App;
