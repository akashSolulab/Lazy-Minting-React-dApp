import React from "react";
import art1 from "../image/art1.jpg";
import art2 from "../image/art2.jpg";
import art3 from "../image/art3.jpg";
import art4 from "../image/art4.jpg";
import { ethers } from "ethers";

export default function Cards(props) {
  console.log("props: ", props);

  return (
    <div className="row mt-5 gap-5" style={{paddingLeft: "300px", paddingTop: "100px"}}>
      <div className="card col-4 ml-5 text-center" style={{ width: "14rem" }}>
        <img src={art1} className="card-img-top mt-3" style={{width: "100%", height: "250px"}} alt="flower" />
        <div className="card-body">
          <h5 className="card-title fw-bold fs-4">Flower Pot</h5>
          <p className="card-text fw-bold">Pablo Picasso</p>
          <div id="price-0">
            <p className="fw-bold">Current Price: <i className='fab fa-ethereum'></i> {props?.NFTObject && ethers.utils.formatEther(String(props?.NFTObject?.[0]?.minPrice))} </p>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => {props.buyNFT(0)}}>
            BUY
          </button>
        </div>
      </div>

      <div className="card col-4 text-center" style={{ width: "14rem" }}>
        <img src={art2} className="card-img-top mt-3" style={{width: "100%", height: "250px"}} alt="flower" />
        <div className="card-body">
          <h5 className="card-title fw-bold fs-4">Maniacc</h5>
          <p className="card-text fw-bold">Vincet Van</p>
          <div id="price-1">
            <p className="fw-bold">Current Price: <i className='fab fa-ethereum'></i> {props?.NFTObject && ethers.utils.formatEther(String(props?.NFTObject?.[1]?.minPrice))} </p>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => {props.buyNFT(1)}}>
            BUY
          </button>
        </div>
      </div>

      <div className="card col-4 text-center" style={{ width: "14rem" }}>
        <img src={art3} className="card-img-top mt-3" style={{width: "100%", height: "250px"}} alt="flower" />
        <div className="card-body">
          <h5 className="card-title fw-bold fs-4">Namia Wall</h5>
          <p className="card-text fw-bold">Lionardo Da Vinci</p>
          <div id="price-2">
            <p className="fw-bold">Current Price: <i className='fab fa-ethereum'></i> {props?.NFTObject && ethers.utils.formatEther(String(props?.NFTObject?.[2]?.minPrice))} </p>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => {props.buyNFT(2)}}>
            BUY
          </button>
          
        </div>
      </div>

      <div className="card col-4 text-center" style={{ width: "14rem" }}>
        <img src={art4} className="card-img-top mt-3" style={{width: "100%", height: "250px"}} alt="flower" />
        <div className="card-body">
          <h5 className="card-title fw-bold fs-4">Pitty Women</h5>
          <p className="card-text fw-bold">Salvador</p>
          <div id="price-3">
            <p className="fw-bold">Current Price: <i className='fab fa-ethereum'></i> {props?.NFTObject && ethers.utils.formatEther(String(props?.NFTObject?.[3]?.minPrice))} </p>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => {props.buyNFT(3)}}>
            BUY
          </button>
        </div>
      </div>
    </div>
  );
}
