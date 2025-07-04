import { useState } from "react";

const useTransactions = (web3, contract, adre) => {
  const [isLoading, setIsLoading] = useState(false); // For loading state
  const [transactionStatus, setTransactionStatus] = useState(""); // For transaction status
  const [transactionList, setTransactionList] = useState([]); // For storing transaction data

  // Submit a transaction to the blockchain
  const handleSubmit = async (formData) => {
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
      const accounts = await web3.eth.getAccounts();
      const tx = await contract.methods
        .addToBlockchain(addressTo, web3.utils.toWei(amount, "ether"), message, keyword)
        .send({ from: accounts[0] });

      console.log("Transaction successful:", tx);
      setTransactionStatus(`Transaction successful: ${tx.transactionHash}`);
    } catch (error) {
      console.error("Transaction failed:", error);
      setTransactionStatus(`Transaction failed: ${error.message}`);
    }

    setIsLoading(false);
  };

  // Fetch all transactions from the blockchain
  const getAllTransactions = async () => {
    if (!web3 || !contract) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      const transactions = await contract.methods.getAllTransactions().call();
      console.log("Fetched transactions:", transactions);

      // Update state with fetched transactions
      setTransactionList(transactions);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
    }
  };

  return {
    handleSubmit,
    getAllTransactions,
    isLoading,
    transactionStatus,
    transactionList,
  };
};

export default useTransactions;
