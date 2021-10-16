import React, { useEffect } from "react";
// Styling 
import { Wrapper, Input } from './HomeView.styles';
// Moralis
import { Moralis } from "moralis";

Moralis.start({serverUrl: process.env.REACT_APP_MORALIS_SERVER_URL, appId: process.env.REACT_APP_MORALIS_APPLICATION_ID});


const Home = () => {
  const componentDidMount = async () => {
    /*const options = { address: "0x2953399124F0cBB46d2CbACD8A89cF0599974963", chain: "polygon" };
    const NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
    console.log(NFTs);
    const NFTs1 = await Web3Api.token.getNFTMetadata(options);
    console.log(NFTs1);
    const nftOwners = await Moralis.Web3API.token.getNFTOwners(options);
    console.log(nftOwners);
    */    
  };

  const startSearch = async (searchString) => {
    //all chains to search
    const chains = ["eth", "bsc", "matic", "avalanche"];
    //storing the searchresults
    let searchResults = [];
    //search for metadata
    for(let i = 0; i < chains.length; i++) {
      const options = { q: searchString, chain: chains[i], filter: "global" };
      const NFTs = await Moralis.Web3API.token.searchNFTs(options);
      NFTs.result.forEach((element) => searchResults.push(element));
    }
    console.log(searchResults);
  }

  useEffect(() => {
      componentDidMount();
  });

    return (
      <Wrapper>
        <Input className="input-form" type="text" onKeyDown={(event) => event.keyCode === 13 && startSearch(event.target.value)}/>
      </Wrapper>
    );
};

export default Home;