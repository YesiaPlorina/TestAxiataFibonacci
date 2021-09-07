import "./App.css";

import React, { useState } from "react";

function App() {
  const [input, setInput] = useState(null);
  const [table, setTable] = useState([]);
  const [fib, setFib] = useState([]);
  const [show, setShow] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const onClikInput = () => {
    if (input) {
      var myArr = [];
      for (var i = 0; i < input * input; i++) {
        if (i < 2) {
          myArr.push(i);
        } else {
          myArr.push(myArr[i - 2] + myArr[i - 1]);
        }
      }
      setFib(myArr);

      let fibo = [];
      let tampung = [];
      for (let j = 0; j < myArr.length; j++) {
        const elementFib = myArr[j];
        console.log(j % input, elementFib);

        if ((j + 1) % input === 0) {
          tampung.push(elementFib);
          fibo.push(tampung);
          tampung = [];
        } else if (j === fib.length - 1) {
          fibo.push(tampung);
        } else {
          tampung.push(elementFib);
        }
      }
      console.log(fibo, "Hasil fib");
      setShow(fibo);

      setInput("");
    } else {
      setShow([]);
      alert("Please input number of table");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "50px",
          }}
        >
          <input
            class="text-input"
            type="number"
            value={input}
            name="input"
            onChange={handleInput}
            placeholder="input number"
          />

          <div className="btn-create-data" onClick={onClikInput}>
            <label className="label-sm-bold" style={{ cursor: "pointer" }}>
              input
            </label>
          </div>
        </div>
        <div>
          <table>
            <tbody className="tbody">
              {show &&
                show.map((item, i) => (
                  <tr key={i}>
                    {item.map((item1, j) =>
                      item === 0 ? (
                        <td key={j} align="left"></td>
                      ) : (
                        <td key={j} align="left">
                          {item1}
                        </td>
                      )
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
