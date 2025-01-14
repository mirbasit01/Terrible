import React, { useState, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Web3 from "web3";
import { contractABI } from "../utils/contract";
import { contractAddress } from "../utils/contractAddress";

const Welcome = () => {
  const [adre, setAdre] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState("");
  const [transactionList, setTransactionList] = useState([]);

  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    message: "",
    keyword: "",
  });

  useEffect(() => {
    // Load saved transactions from localStorage on page load
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (savedTransactions) {
      setTransactionList(savedTransactions);
    }
  }, []);

  const handelChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const userAddress = accounts[0];
        setAdre(userAddress);

        const contractInstance = new web3Instance.eth.Contract(
          contractABI,
          contractAddress
        );
        setContract(contractInstance);
        console.log("Wallet connected:", userAddress);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to connect.");
    }
  };

  const disconnectWallet = () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to disconnect the wallet?"
    );
    if (userConfirmed) {
      setAdre(null);
      setContract(null);
      setWeb3(null);
      setTransactionList([]);
    }
  };

  const handelsubmit = async () => {
    if (!web3 || !adre || !contract) {
      alert("Please connect your wallet first.");
      return;
    }

    const { addressTo, amount, message, keyword } = formData;

    if (!addressTo || !amount || !message || !keyword) {
      alert("All fields are required.");
      return;
    }

    setIsLoading(true);

    try {
      const tx = await contract.methods
        .addToBlockchain(
          addressTo,
          web3.utils.toWei(amount, "ether"),
          message,
          keyword
        )
        .send({ from: adre });

      console.log("Transaction successful:", tx);

      // Create a transaction object to store
      const newTransaction = {
        sender: adre,
        receiver: addressTo,
        amount: amount,
        message: message,
        keyword: keyword,
        timestamp: Date.now(),
      };

      // Add the new transaction to the existing list
      const updatedTransactions = [newTransaction, ...transactionList];

      // Update localStorage with the new transactions list
      localStorage.setItem("transactions", JSON.stringify(updatedTransactions));

      // Update state to reflect the new transaction
      setTransactionList(updatedTransactions);

      setTransactionStatus(`Transaction successful: ${tx.transactionHash}`);
    } catch (error) {
      console.error("Transaction failed:", error);
      setTransactionStatus(`Transaction failed: ${error.message}`);
    }

    setIsLoading(false);
  };

  const getAllTransactions = () => {
    // Fetch transactions from localStorage
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (savedTransactions) {
      setTransactionList(savedTransactions);
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </p>

          {adre ? (
            <button
              type="button"
              onClick={disconnectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">Disconnect Wallet</p>
            </button>
          ) : (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">Connect Wallet</p>
            </button>
          )}

          <div className="text-white font-light text-sm">
            {adre || "No wallet connected"}
          </div>
          <div className="text-white font-semibold text-lg">Ethereum</div>

          <div className="flex flex-col w-full mt-10">
            <div className="flex flex-row justify-between mb-2">
              <label className="text-white text-sm">Recipient Address:</label>
              <input
                type="text"
                name="addressTo"
                value={formData.addressTo}
                onChange={(e) => handelChange(e, "addressTo")}
                className="p-2 rounded-md"
                placeholder="Enter recipient address"
              />
            </div>

            <div className="flex flex-row justify-between mb-2">
              <label className="text-white text-sm">Amount (ETH):</label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={(e) => handelChange(e, "amount")}
                className="p-2 rounded-md"
                placeholder="Enter amount"
              />
            </div>

            <div className="flex flex-row justify-between mb-2">
              <label className="text-white text-sm">Message:</label>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={(e) => handelChange(e, "message")}
                className="p-2 rounded-md"
                placeholder="Enter message"
              />
            </div>

            <div className="flex flex-row justify-between mb-2">
              <label className="text-white text-sm">Keyword:</label>
              <input
                type="text"
                name="keyword"
                value={formData.keyword}
                onChange={(e) => handelChange(e, "keyword")}
                className="p-2 rounded-md"
                placeholder="Enter keyword"
              />
            </div>

            <button
              onClick={handelsubmit}
              disabled={isLoading}
              className="bg-[#2952e3] text-white p-3 rounded-full mt-5"
            >
              {isLoading ? "Processing..." : "Send Transaction"}
            </button>
          </div>

          <div>
            <button
              onClick={getAllTransactions}
              className="text-white mt-5"
            >
              Fetch All Transactions
            </button>
            <div>
              {transactionList.length > 0 ? (
                transactionList.map((tx, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: "20px",
                      border: "1px solid #ddd",
                      padding: "10px",
                      color: "white",
                    }}
                  >
                    <p><strong>Sender:</strong> {tx.sender}</p>
                    <p><strong>Receiver:</strong> {tx.receiver}</p>
                    <p><strong>Amount:</strong> {web3.utils.fromWei(tx.amount, "ether")} ETH</p>
                    <p><strong>Message:</strong> {tx.message}</p>
                    <p><strong>Keyword:</strong> {tx.keyword}</p>
                    <p><strong>Timestamp:</strong> {new Date(tx.timestamp).toLocaleString()}</p>
                  </div>
                ))
              ) : (
                <p className="text-white">No transactions found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
