import { useEffect, useState } from 'react';
import {ethers} from 'ethers';
import axios from 'axios';
import {abi} from './ABI';
import {BeatLoader} from 'react-spinners';
import { css } from '@emotion/react';
import Cards from './components/NFT-Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MetamaskCard from './components/MetamaskCard';

function App() {

  // state hook
  let [NFTObject, setNFTObject] = useState()
  useEffect(()=> {
    getNFTDetail()
  }, [])

  // Getting signer address from a web wallet
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  let signer;
  let connectWallet = async() => {
    await provider.send("eth_requestAccounts", [])
    signer = provider.getSigner()
    console.log("signer address:", await signer.getAddress());
  }

  // Initializing smart-contract instance
  const contractABI = abi;
  const contractAddress = process.env.REACT_APP_NFT_CONTRACT_ADDRESS
  const contractInstance = new ethers.Contract(contractAddress, contractABI, provider);

  // get request to fetch NFT data
  function getRequest() {
    return axios.get('http://127.0.0.1:3000/api/getMetadataDetail')
  }

  // getting valuable data out the above request
  let getNFTDetail = async() => {
    let res = await (await getRequest()).data;
    console.log("res", res);
    setNFTObject(res)
  }

  // calling redeem function from smart-contract
  let buyNFT = async(index) => {
    let newNFTObject = [...NFTObject]
    let transactionObject = {
      tokenId: newNFTObject[index].tokenId,
      minPrice: newNFTObject[index].minPrice,
      uri: newNFTObject[index].tokenURI,
      signature: newNFTObject[index].signature
    }
    console.log("transaction object: ", transactionObject);
    let transactionValue = transactionObject.minPrice;
    console.log(transactionValue);
    let options = {value: transactionValue}
    let tx = await contractInstance.connect(signer).redeem('0xd25973623F1edFFD612393F04fb8ae9d3aEE5EdA', transactionObject, options);
    console.log(tx);
  }

  return (
    <div>
      <Navbar/>
      <main>
        <MetamaskCard
        connectWallet={connectWallet}
        />
        <Cards
        NFTObject={NFTObject}
        buyNFT={buyNFT}
        />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
