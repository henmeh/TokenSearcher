const Moralis = require("moralis");

Moralis.initialize("dOiVpAxnylme9VPx99olzmbyQzB4Jk2TgL0g1Y5A");
Moralis.serverURL = "https://kuuj059ugtmh.usemoralis.com:2053/server";

//Moralis.start({ serverUrl: "dOiVpAxnylme9VPx99olzmbyQzB4Jk2TgL0g1Y5A", appId: "https://kuuj059ugtmh.usemoralis.com:2053/server" }); 

export const testfunction = async () => {
    console.log("Hallo");
    const options = { q: "Pancake", chain: "bsc", filter: "name" };
    const NFTs = await Moralis.Web3API.token.searchNFTs({ q: "Pancake", chain: "bsc", filter: "name" });
    console.log(NFTs);
}