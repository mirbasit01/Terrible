import { useState } from "react";
import Web3 from "web3";

const useWallet = (contractABI, contractAddress) => {
    const [web3, setWeb3] = useState(null);
    const [address, setAddress] = useState("");
    const [contract, setContract] = useState(null);

    // Function to connect the wallet
    const connectWallet = async () => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);

            try {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                const userAddress = accounts[0];
                setAddress(userAddress);

                const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
                setContract(contractInstance);

                console.log("Wallet connected:", userAddress);
            } catch (error) {
                console.error("Error connecting wallet:", error);
            }
        } else {
            alert("MetaMask is not installed. Please install it to connect.");
        }
    };

    // Function to disconnect the wallet
    const disconnectWallet = () => {
        const userConfirmed = window.confirm("Are you sure you want to disconnect the wallet?");
        if (userConfirmed) {
            setAddress(""); // Clear the wallet address
            setWeb3(null); // Clear the web3 instance
            setContract(null); // Clear the contract instance
            console.log("Wallet disconnected");
        }
    };

    return { web3, address, contract, connectWallet, disconnectWallet };
};

export default useWallet;
