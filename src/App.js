/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
    "MARSHOT",
  ]);
  let [detail, setDetail] = useState(false);

  const handleDetailClick = () => {
    if (detail === false) {
      setDetail(true);
    } else {
      setDetail(false);
    }
  };

  const postMap = (p, i) => {
    return (
      <div className="content" key={i}>
        <h4 onClick={handleDetailClick}>{p}</h4>
        <p>Published on Feb. 17th</p>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>MARSHOT PROJECT</h4>
      </div>

      {title.map(postMap)}
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
