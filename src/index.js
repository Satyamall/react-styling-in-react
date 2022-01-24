import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.css";
import "./styles.css";

var style = "class3";
var style2 = "class5";

var style3 = {
  fontSize: 30,
  background: "teal"
};
var style4 = {
  borderRadius: 20
};

function App() {
  return (
    <div className="App">
      <button className={styles.classExample}>test</button>
      <div>
        <button style={style3}>ONE</button>
      </div>
      <div>
        <button style={{ background: "blue", fontSize: 30 }}>TWO</button>
      </div>
      <div>
        <button style={{ background: "blue", fontSize: "30px" }}>THREE</button>
      </div>
      <div>
        <button className="class1">FOUR</button>
      </div>
      <div>
        <button className="class1 class2">FIVE</button>
      </div>
      <div>
        <button className={`${style}`}>SIX</button>
      </div>
      <div>
        <button className={`${style} ${style2}`}>SEVEN</button>
      </div>
      <div>
        <button style={{ ...style3, ...style4 }}>EIGHT</button>
      </div>
      <div>
        <button className={[style, style2].join(" ")}>NINE</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
