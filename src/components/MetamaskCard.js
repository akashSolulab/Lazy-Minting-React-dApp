import React from "react";

export default function MetamaskCard(props) {
  return (
    <button
      type="button"
      className="btn btn-primary mt-5"
      style={{ position: "absolute", right: "50px", top: "50px" }}
      onClick={() => {props.connectWallet()}}
    >
      Connect Wallet
    </button>
  );
}
