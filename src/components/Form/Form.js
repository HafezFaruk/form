import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [num, setNum] = useState(1)

  const increase = ()=>{
    setNum(num+1)
  } 
  const decrease = () => {
    if (num < 0) {
      setNum(num - 1);
    } else {
      setNum(0);
    }
  }; 

  return (
    <div className="form-bg">
      <div className="bg-tran">
        <h4 className="text-uppercase text-white">join the game</h4>
        <div className="stGen">
          <div className="d-flex justify-content-center align-items-center">
            <button className="my-btn"></button>
            <input className="my-input" placeholder="1st Gen" type="text" />
          </div>
        </div>
        <br />
        <span>1000/1000 Minted</span>
        <div>
          <button onClick={decrease} className="my-color increment">
            -
          </button>
          <input className="midel-input" type="text" value={num} />
          <button onClick={increase} className="my-color">
            +
          </button>
        </div>
        <p>Current cost: per token</p>
        <span className="connect-wallet">Disconnect</span>
      </div>

      <div className="bg-tran mt-4">
        <h4 className="text-uppercase  text-white">play genx</h4>
        <br />
        <span className="connect-wallet">Connect Wallet</span>
      </div>
    </div>
  );
};

export default Form;
