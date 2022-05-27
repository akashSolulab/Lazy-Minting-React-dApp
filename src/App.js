import './App.css';
import {ethers} from 'ethers';
import axios from 'axios';
import Cards from './components/NFT-Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MetamaskCard from './components/MetamaskCard';

function App() {
  let signer;
  let connectWallet = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", [])
    signer = provider.getSigner()
    console.log(await signer.getAddress());
  }

  function getRequest() {
    return axios.get('http://127.0.0.1:3000/api/getMetadataDetail')
  }

  let output = async(index) => {
    console.log("output: ", await (await getRequest()).data[index].minPrice);
    let res = await (await getRequest()).data;
    return res
  }
  
  let ans = output(0)
  console.log("ans: ", ans);

  return (
    <div>
      <Navbar/>
      <main>
        <MetamaskCard
        connectWallet={connectWallet}
        />
        <Cards
        output={output}
        />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
