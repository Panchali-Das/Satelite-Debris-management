// Import ethers.js
/*import { ethers } from "ethers";

// Connect to Ethereum using MetaMask
async function connectToMetaMask() {
  if (window.ethereum) {
    try {
      // Request account access
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Create a new provider using MetaMask
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Get the signer (the account that will sign transactions)
      const signer = provider.getSigner();

      console.log("Connected to MetaMask successfully!");
      return signer;
    } catch (error) {
      console.error("User rejected request", error);
    }
  } else {
    console.error("MetaMask is not installed!");
  }
}*/
