import logo from "./logo.svg";
import "./App.css";

function App() {
  let post = "Title 1";

  return (
    <div className="App">
      <div className="black-nav">
        <h4>MARSHOT PROJECT</h4>
      </div>
      <h4 style={{ color: "red" }}>{post}</h4>
    </div>
  );
}

export default App;
