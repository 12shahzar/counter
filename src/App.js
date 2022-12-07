import { useState } from "react";
import './App.css';

const App = () => {
  const [num, setnum] = useState(0);
  const [islit, setlit] = useState(true);
  return (
    <div className={`main ${islit ? "lit" : "dark"}`}>
      <div className="toggle">
        <button className={`mode ${islit ? "lit" : "darkmode"}`} onClick={() => {
          setlit(!islit)
        }}>{islit ? "LIT" : "DARK"}</button>
      </div>
      <div className="count">
        <div className={`display ${islit ? "lit" : "darkdisplay"}`}> {num}</div>
        <div className="btncontainer">
          <button className={`btn ${islit ? "lit" : "darkbtn"}`}
            onClick={() => {
              setnum(num + 1)
            }
            }
          > +</button>
          <button className={`btn ${islit ? "lit" : "darkbtn"}`}
            onClick={() => {
              setnum(num - 1)
            }
            }
          >-</button>
        </div>
      </div>

    </div>
  );
}

export default App;
