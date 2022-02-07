import React from "react";
import "./Form.css";
const Form = () => {
    const num = 1
  return (
    <div className="form-bg py-5">
      <div className="bg-tran">
        <h4 className="text-uppercase text-white">join the game</h4>
        <div className="d-flex justify-content-center align-items-center">
          <button className="my-btn"></button>
          <input className="my-input" placeholder="1st Gen" type="text" />
        </div>
        <span>1000/1000 Minted</span>
        <div>
          <button className="my-color">+</button>
          <input className="midel-input" type="text" value={num}/>
          <button className="my-color">-</button>
        </div>
        <p>Current cost: per token</p>
        <span className="connect-wallet">Disconnect</span>
      </div>

      <div className="bg-tran mt-5">
        <h4 className="text-uppercase  text-white">play genx</h4>
        <br />
        <span className="connect-wallet">Connect Wallet</span>
      </div>
    </div>
  );
};

export default Form;
