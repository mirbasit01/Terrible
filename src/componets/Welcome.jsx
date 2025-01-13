// import React, { useContext, useEffect, useState } from "react";
// import { AiFillPlayCircle } from "react-icons/ai";
// import { SiEthereum } from "react-icons/si";
// import { BsInfoCircle } from "react-icons/bs";
// import Loader from "./Loader";
// import Web3 from "web3";
// // import { contractABI } from './utils/contract';
// // import { contractAddress } from './utils/contractAddress';
// import { contractABI } from "../utils/contract";
// import {contractAddress} from "../utils/contractAddress"

// const Welcome = () => {
//   // let web3;
// // let contract;
//   // const [account, setAccount] = useState(null);
//   // const [contract, setContract] = useState(null);
//     // const [isConnected, setIsConnected] = useState(false);
//           // const [adre, setadre] = useState(null)

  
// //     const connectWallet = async () => {
// //   // Check if MetaMask is installed
// //   if (window.ethereum) {
// //     // Create a Web3 instance
// //     web3 = new Web3(window.ethereum);

// //     try {
// //       // Request account access
// //       const accounts = await window.ethereum.request({
// //         method: 'eth_requestAccounts',
// //       });

// //       // Use the first account in the array (MetaMask only supports one account by default)
// //       const userAddress = accounts[0];

// //       console.log("Connected Wallet Address:", userAddress);
// //               setadre(accounts[0]);  // Set the wallet address after connecting

// //       // Create contract instance
// //       contract = new web3.eth.Contract(contractABI, contractAddress);

// //       // Now you can interact with the contract using the contract instance.
// //       // Example: Get contract data or call contract functions
// //       const data = await contract.methods.someFunction().call({ from: userAddress });
// //       console.log("Contract Data:", data);

// //       // You can also listen to events, send transactions, etc.
// //     } catch (error) {
// //       console.error("Error connecting wallet:", error);
// //     }
// //   } else {
// //     console.log("MetaMask is not installed");
// //   }
// // };

//   // // Function to disconnect the wallet
//   // const disconnectWallet = () => {
//   //   setadre("");  // Clear the wallet address to disconnect
//   // };
//   // Function to disconnect the wallet
// // const disconnectWallet = () => {
// //   // Optionally, you can prompt the user for confirmation before disconnecting
// //   const userConfirmed = window.confirm("Are you sure you want to disconnect the wallet?");
// //   if (userConfirmed) {
// //     setadre("");  // Clear the wallet address to disconnect
// //   }
// // };

// // useEffect(() => {
  
// // connectWallet()

  
// // }, [connectWallet])

//   // Function to connect wallet
 
//   const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


//   // // const connectWallet = () => {

//   // // }
   
 
//   //  const [adre, setAdre] = useState(null);  // Store the wallet address
//   // const [web3, setWeb3] = useState(null);   // Web3 instance state
//   // const [contract, setContract] = useState(null); // Contract instance state

//   // // Function to connect to MetaMask and the smart contract
//   // const connectWallet = async () => {
//   //   if (window.ethereum) {
//   //     const web3Instance = new Web3(window.ethereum);
//   //     setWeb3(web3Instance); // Set the Web3 instance in state
      
//   //     try {
//   //       // Request account access
//   //       const accounts = await window.ethereum.request({
//   //         method: 'eth_requestAccounts',
//   //       });

//   //       const userAddress = accounts[0];
//   //       setAdre(userAddress);  // Set the connected wallet address

//   //       // Initialize contract instance
//   //       const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
//   //       setContract(contractInstance); // Set the contract instance in state

//   //       // Example: Call a function from the contract (replace 'someFunction' with your actual function name)
//   //       const data = await contractInstance.methods.someFunction().call({ from: userAddress });
//   //       console.log("Contract Data:", data);

//   //     } catch (error) {
//   //       console.error("Error connecting wallet:", error);
//   //     }
//   //   } else {
//   //     console.log("MetaMask is not installed");
//   //   }
//   // };

//   // // Function to disconnect the wallet
//   // const disconnectWallet = () => {
//   //   const userConfirmed = window.confirm("Are you sure you want to disconnect the wallet?");
//   //   if (userConfirmed) {
//   //     setAdre(null);  // Clear the wallet address to disconnect
//   //   }
//   // };

//   // const handelsubmit = () => {

//   // }
// //   const [adre, setAdre] = useState(null);  // Wallet address
// // const [web3, setWeb3] = useState(null); // Web3 instance
// // const [contract, setContract] = useState(null); // Contract instance
// // const [formData, setFormData] = useState({ addressTo: '', amount: '', message: '' });
// // const [isLoading, setIsLoading] = useState(false);

// // const handelChange = (e, name) => {
// //   setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
// // };

// // const connectWallet = async () => {
// //   if (window.ethereum) {
// //     const web3Instance = new Web3(window.ethereum);
// //     setWeb3(web3Instance);

// //     try {
// //       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
// //       const userAddress = accounts[0];
// //       setAdre(userAddress);

// //       const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
// //       setContract(contractInstance);

// //       console.log("Wallet connected:", userAddress);
// //     } catch (error) {
// //       console.error("Error connecting wallet:", error);
// //     }
// //   } else {
// //     alert("MetaMask is not installed. Please install it to connect.");
// //   }
// // };

// // // Function to disconnect the wallet
// // const disconnectWallet = () => {
// //   // Optionally, you can prompt the user for confirmation before disconnecting
// //   const userConfirmed = window.confirm("Are you sure you want to disconnect the wallet?");
// //   if (userConfirmed) {
// //     setAdre("");  // Clear the wallet address to disconnect
// //   }
// // };


// // const handelsubmit = async () => {
// //   if (!web3 || !adre || !contract) {
// //     alert("Please connect your wallet first.");
// //     return;
// //   }

// //   const { addressTo, amount, message } = formData;

// //   if (!addressTo || !amount || !message) {
// //     alert("All fields are required.");
// //     return;
// //   }

// //   setIsLoading(true);

// //   try {
// //     const tx = await contract.methods
// //       .sendTransaction(addressTo, web3.utils.toWei(amount, "ether"), message)
// //       .send({ from: adre });
// //     console.log("Transaction successful:", tx);
// //   } catch (error) {
// //     console.error("Transaction failed:", error);
// //   }

// //   setIsLoading(false);
// // };

//                                   //  
//                                   // State to store the connected wallet address
// const [adre, setAdre] = useState(null); // Wallet address

// // State to store the Web3 instance for blockchain interaction
// const [web3, setWeb3] = useState(null); // Web3 instance

// // State to store the smart contract instance
// const [contract, setContract] = useState(null); // Contract instance

// // State to manage form data (recipient address, amount, and message)
// // const [formData, setFormData] = useState({ addressTo: '', amount: '', message: '' });

// // State to manage the loading status during transactions
// const [isLoading, setIsLoading] = useState(false); // Tracks if a transaction is in progress

// // Function to handle changes in the form fields
// // const handelChange = (e, name) => {
// //   // Update the form data dynamically based on the input field's name
// //   setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
// //   console.log(handelChange)
// // };

// // Function to connect the user's wallet using MetaMask
// const connectWallet = async () => {
//   if (window.ethereum) {
//     // Create a new Web3 instance using MetaMask's provider
//     const web3Instance = new Web3(window.ethereum);
//     setWeb3(web3Instance); // Store the Web3 instance in state

//     try {
//       // Request MetaMask to connect to the user's wallet
//       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//       const userAddress = accounts[0]; // Use the first account returned
//       setAdre(userAddress); // Save the wallet address in state

//       // Create a smart contract instance using ABI and contract address
//       const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
//       setContract(contractInstance); // Save the contract instance in state

//       console.log("Wallet connected:", userAddress); // Log the connected wallet address
//     } catch (error) {
//       console.error("Error connecting wallet:", error); // Log any errors
//     }
//   } else {
//     // Alert the user if MetaMask is not installed
//     alert("MetaMask is not installed. Please install it to connect.");
//   }
// };

// // Function to disconnect the user's wallet
// const disconnectWallet = () => {
//   // Ask the user for confirmation before disconnecting
//   const userConfirmed = window.confirm("Are you sure you want to disconnect the wallet?");
//   if (userConfirmed) {
//     setAdre(""); // Clear the wallet address from state
//   }
// };
// // State to manage form data (recipient address, amount, and message)
// const [formData, setFormData] = useState({ addressTo: '', amount: '', message: '', extraField: '' });

// // Function to handle changes in the form fields
// // const handelChange = (e, name) => {
// //   // Update the form data dynamically based on the input field's name
// //   setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
// // };


//   const Input = ({placeholder, name, value, type, handelChange}) =>  (
//     <input
//     placeholder={placeholder}
//     type={type}
//     value={value}
//     step='0.0001'
//     onChange={(e) => handelChange(e, name)}
//     className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//     />
//   )
  

  
// // Function to handle form submission and send a transaction
// const handelsubmit = async () => {
//   // Check if the Web3 instance, wallet address, and contract instance are available
//   if (!web3 || !adre || !contract) {
//     alert("Please connect your wallet first."); // Alert the user if any are missing
//     return;
//   }

//   // Destructure the form data for ease of use
//   const { addressTo, amount, message } = formData;

//   // Ensure all form fields are filled
//   if (!addressTo || !amount || !message) {
//     alert("All fields are required."); // Alert the user if any field is empty
//     return;
//   }

//   // Set the loading state to true while the transaction is in progress
//   setIsLoading(true);

//   try {
//     // Call the smart contract function to send a transaction
//     const tx = await contract.methods
//       .sendTransaction(addressTo, web3.utils.toWei(amount, "ether"), message) // Convert amount to Wei
//       .send({ from: adre }); // Specify the sender's address
//     console.log("Transaction successful:", tx); // Log the successful transaction
//   } catch (error) {
//     console.error("Transaction failed:", error); // Log any errors during the transaction
//   }

//   // Set the loading state back to false after the transaction completes
//   setIsLoading(false);
// };

//   return (
//     <div className="flex w-full  justify-center items-center">
//       <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
//     <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
//        <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
//             Send Crypto <br /> across the world
//           </h1>
//            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
//             Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
//           </p>
//            {/* <button
//               type="button"
//               onClick={connectWallet}
//               className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
//             >
//               <AiFillPlayCircle className="text-white mr-2" />
//               <p className="text-white text-base font-semibold">
//                 Connect Wallet
//               </p>
//             </button>
//              <button
//               type="button"
//               onClick={connectWallet}
//               className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
//             >
//               <AiFillPlayCircle className="text-white mr-2" />
//               <p className="text-white text-base font-semibold">
//                 DesConnect Wallet
//               </p>
//             </button> */}
//             {adre && adre.length > 0 ? (
//         // If the wallet is connected
//         <button
//           type="button"
//           onClick={disconnectWallet}
//           className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
//         >
//           <AiFillPlayCircle className="text-white mr-2" />
//           <p className="text-white text-base font-semibold">
//             Disconnect Wallet
//           </p>
//         </button>
//       ) : (
//         // If no wallet is connected
//         <button
//           type="button"
//           onClick={connectWallet}
//           className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
//         >
//           <AiFillPlayCircle className="text-white mr-2" />
//           <p className="text-white text-base font-semibold">
//             Connect Wallet
//           </p>
//         </button>
//       )}

//               {/*  */}
//                <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
//             <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
//               Reliability
//             </div>
//             <div className={companyCommonStyles}>Security</div>
//             <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
//               Ethereum
//             </div>
//             <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
//               Web 3.0
//             </div>
//             <div className={companyCommonStyles}>Low Fees</div>
//             <div className={`rounded-br-2xl ${companyCommonStyles}`}>
//               Blockchain
//             </div>  
             
             
//         </div>
//     </div> 
//     <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
//    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
//     <div  className="flex justify-between flex-col w-full h-full"> 
//  <div className="flex justify-between items-start">
//                 <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
//                   <SiEthereum fontSize={21} color="#fff" />
//                 </div>
//                 <BsInfoCircle fontSize={17} color="#fff" />
//               </div>
//                <div className="text-white font-light text-sm">
//            {/* 0xjndfjmasd...fsnjnvskd */}
//             {adre && adre.length > 0 ? adre : "No wallet connected"}
//                      {/* {adre} */}
//                </div>
//                <div className="text-white font-semibold  text-lg">
//                                   Ethereum

//         </div>
//     </div>
//    </div>
// {/* 
//    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
//    <Input placeholder='Adrees To' name='addressTo' type='text' handelChange={handelChange}/>
//    <Input placeholder='Amount (ETH)' name='Amount' type='number' handelChange={handelChange}/>
//    <Input placeholder='Amount (ETH)' name='Amount' type='text' handelChange={handelChange}/>
//    <Input placeholder='Enter Msg ' name='message' type='text' handelChange={handelChange}/>
    
//    <div  className="h-[1px] w-full bg-gray-400 my-2"/>

//      {false ? (
//       <Loader/>
//      ) : (
//        <button
//        type="button"
//        onClick={handelsubmit}
//        className="text-white  w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer">
        
//          Send Now 
//        </button>
//      )}
//    </div> */}
//     <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
//     <Input 
//       placeholder="Address To" 
//       name="addressTo" 
//       type="text" 
//       value={formData.addressTo} 
//       handelChange={handelChange} 
//     />
//     <Input 
//       placeholder="Amount (ETH)" 
//       name="amount" 
//       type="number" 
//       value={formData.amount} 
//       handelChange={handelChange} 
//     />
//     <Input 
//       placeholder="Enter Message" 
//       name="message" 
//       type="text" 
//       value={formData.message} 
//       handelChange={handelChange} 
//     />
//     <Input 
//       placeholder="Extra Field" 
//       name="extraField" 
//       type="text" 
//       value={formData.extraField} 
//       handelChange={handelChange} 
//     />
//     <div className="h-[1px] w-full bg-gray-400 my-2" />

//     {isLoading ? (
//       <Loader />
//     ) : (
//       <button
//         type="button"
//         onClick={handelsubmit}
//         className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
//       >
//         Send Now
//       </button>
//     )}
//   </div>
//              </div>
//       </div>
//     </div>
//   )
// }

// export default Welcome


import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Web3 from "web3";
import { contractABI } from "../utils/contract";
import { contractAddress } from "../utils/contractAddress";

const Welcome = () => {
  // State management for wallet address, web3, contract, loading state, and form data
  const [adre, setAdre] = useState(null); // Wallet address
  const [web3, setWeb3] = useState(null); // Web3 instance
  const [contract, setContract] = useState(null); // Contract instance
  const [isLoading, setIsLoading] = useState(false); // Loading state for transactions
      const [transactionStatus, setTransactionStatus] = useState("");

  // const [formData, setFormData] = useState({
  //   addressTo: '',
  //   amount: '',
  //   message: '',
  //   keyword: '' // Add the keyword field here
  // });


  const [formData, setFormData] = useState({
  addressTo: '',
  amount: '',
  message: '',
  keyword: '' // Add keyword to the form state
});

  // Function to handle changes in input fields
  // const handelChange = (e, name) => {
  //   setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  // };
  const handelChange = (e, name) => {
  setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
};


  // Function to connect to MetaMask and set up web3 and contract
  const connectWallet = async () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const userAddress = accounts[0];
        setAdre(userAddress);

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


  // Function to disconnect the user's wallet
const disconnectWallet = () => {
  // Ask the user for confirmation before disconnecting
  const userConfirmed = window.confirm("Are you sure you want to disconnect the wallet?");
  if (userConfirmed) {
    setAdre(""); // Clear the wallet address from state
  }
};
  // Function to handle form submission and send transaction
  // const handelsubmit = async () => {
  //   if (!web3 || !adre || !contract) {
  //     alert("Please connect your wallet first.");
  //     return;
  //   }

  //   const { addressTo, amount, message, keyword } = formData;

  //   if (!addressTo || !amount || !message || !keyword) {
  //     alert("All fields are required.");
  //     return;
  //   }

  //   setIsLoading(true);

  //   try {
  //     // Call the correct contract method with the correct parameters
  //     const tx = await contract.methods
  //       .addToBlockchain(addressTo, web3.utils.toWei(amount, "ether"), message, keyword) // Pass keyword here
  //       .send({ from: adre });

  //     console.log("Transaction successful:", tx);
  //   } catch (error) {
  //     console.error("Transaction failed:", error);
  //   }

  //   setIsLoading(false);
  // };
const handelsubmit = async () => {
  if (!web3 || !adre || !contract) {
    alert("Please connect your wallet first.");
    return;
  }

    const accounts = await web3.eth.getAccounts();

  const { addressTo, amount, message, keyword } = formData;

  if (!addressTo || !amount || !message || !keyword) {
    alert("All fields are required.");
    return;
  }

  setIsLoading(true);

  try {
    const tx = await contract.methods
      .addToBlockchain(addressTo, web3.utils.toWei(amount, "ether"), message, keyword)
      .send({ from: accounts[0] });

    console.log("Transaction successful:", tx);
     // Set success message upon successful transaction
      setTransactionStatus(`Transaction successful: ${tx.transactionHash}`);
  } catch (error) {
    console.error("Transaction failed:", error);
     // Set error message if the transaction fails
      setTransactionStatus(`Transaction failed: ${error.message}`);
  }

  setIsLoading(false);
};

  
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
{/* 
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button> */}
    {adre && adre.length > 0 ? (
        // If the wallet is connected
        <button
          type="button"
          onClick={disconnectWallet}
          className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          <AiFillPlayCircle className="text-white mr-2" />
          <p className="text-white text-base font-semibold">
            Disconnect Wallet
          </p>
        </button>
      ) : (
        // If no wallet is connected
        <button
          type="button"
          onClick={connectWallet}
          className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          <AiFillPlayCircle className="text-white mr-2" />
          <p className="text-white text-base font-semibold">
            Connect Wallet
          </p>
        </button>
      )}
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

      {/* Transaction Status Display */}
      <div style={{ marginTop: "20px", color: "green" }}>
        {transactionStatus && (
          <div>
            <p>{transactionStatus}</p>
          </div>
        )}
      </div>

        </div>
      </div>
    </div>
  );
};

export default Welcome;
