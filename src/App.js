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

  let [today, setToday] = useState(
    new Date().toLocaleDateString("ko-kr", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

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
        <p>{today}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>MARSHOT PROJECT</h4>
      </div>

      {title.map(postMap)}
      {detail == true ? (
        <ModalDetail
          title={title}
          today={today}
          handleTitleClick={handleTitleClick}
        />
      ) : null}
    </div>
  );
}

const ModalDetail = (props) => {
  return (
    <div className="content-detail">
      <h4>{props.title[0]}</h4>
      <p>{props.today}</p>
      <p>Detail Content</p>
      <button>Edit</button>
    </div>
  );
};

export default App;
