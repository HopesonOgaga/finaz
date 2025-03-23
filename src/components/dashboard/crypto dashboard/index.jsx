import React, { useState } from "react";
import NavBar from "../../constanst/navbarr/navbar";
import LinksFooter from "../../constanst/footer/links";
import Footer from "../../constanst/footer";
import { FaCopy } from "react-icons/fa";

// Sample state data for user wallet and deposit history
const CryptoDepositDashboard = () => {
  const [walletBalance, setWalletBalance] = useState({
    BTC: 2.5,
    ETH: 5.3,
    LTC: 10.2,
  });

  const [deposits, setDeposits] = useState([
    {
      id: 1,
      currency: "Bitcoin (BTC)",
      amount: 0.5,
      date: "2025-03-20",
      status: "Completed",
    },
    {
      id: 2,
      currency: "Ethereum (ETH)",
      amount: 1.2,
      date: "2025-03-15",
      status: "Completed",
    },
    {
      id: 3,
      currency: "Bitcoin (BTC)",
      amount: 0.8,
      date: "2025-03-10",
      status: "Pending",
    },
  ]);

  const [selectedCurrency, setSelectedCurrency] = useState("Bitcoin (BTC)");
  const [depositAmount, setDepositAmount] = useState("");
  const [copied, setCopied] = useState(null);

  // Default Wallet Addresses for each cryptocurrency
  const walletAddresses = {
    "Bitcoin (BTC)": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    "Ethereum (ETH)": "0x32Be343B94f860124dC4fEe278FDCBD38C102D88",
    "Litecoin (LTC)": "LTPuHZzEnwFdjPMcL44vhEukymaymXrD2r",
  };

  // Handle deposit form submission
  const handleDeposit = () => {
    if (depositAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    const newDeposit = {
      id: deposits.length + 1,
      currency: selectedCurrency,
      amount: parseFloat(depositAmount),
      date: new Date().toISOString().split("T")[0], // Current date
      status: "Pending",
    };
    setDeposits([newDeposit, ...deposits]);
    setDepositAmount(""); // Reset the input field
  };

  // Copy address to clipboard
  const handleCopy = (address) => {
    navigator.clipboard.writeText(address)
      .then(() => {
        setCopied(address);
        setTimeout(() => setCopied(null), 2000);  // Reset after 2 seconds
      })
      .catch((err) => console.error('Failed to copy: ', err));
  };

  return (
    <>
      <NavBar></NavBar>
      <section className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="md:text-center text-left mb-6">
            <h1 className="md:text-4xl text-xl font-bold text-gray-800">
              Crypto Deposit Dashboard
            </h1>
            <p className="md:text-lg text-xs text-gray-600">
              Manage your cryptocurrency deposits and wallet balance
            </p>
          </div>

          {/* User Profile */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex items-center space-x-4">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
              <p className="text-gray-600">johndoe@example.com</p>
            </div>
          </div>

          {/* Deposit Form */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Deposit Cryptocurrency
            </h2>
            <div className="mb-4">
              <label htmlFor="currency" className="block text-gray-600">
                Select Cryptocurrency
              </label>
              <select
                id="currency"
                className="w-full p-2 mt-2 border rounded-md"
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
              >
                <option value="Bitcoin (BTC)">Bitcoin (BTC)</option>
                <option value="Ethereum (ETH)">Ethereum (ETH)</option>
                <option value="Litecoin (LTC)">Litecoin (LTC)</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-gray-600">
                Deposit Amount
              </label>
              <input
                type="number"
                id="amount"
                className="w-full p-2 mt-2 border rounded-md"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>

            {/* Display and Copy Wallet Address */}
            <div className="mb-4">
              <label htmlFor="walletAddress" className="block text-gray-600">
                {selectedCurrency} Wallet Address
              </label>
              <div className="flex items-center space-x-2 mt-2">
                <span
                  id="walletAddress"
                  className="w-full break-all text-gray-700"
                >
                  {walletAddresses[selectedCurrency]}
                </span>
                <button
                  onClick={() => handleCopy(walletAddresses[selectedCurrency])}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaCopy /> {copied === walletAddresses[selectedCurrency] ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <button
              onClick={handleDeposit}
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Deposit
            </button>
          </div>

          {/* Deposit History */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Deposit History
            </h2>
            <div className="space-y-4">
              {deposits.map((deposit) => (
                <div
                  key={deposit.id}
                  className="flex justify-between items-center border-b py-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-semibold text-gray-700">
                        {deposit.currency.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {deposit.currency}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Amount: {deposit.amount} {deposit.currency}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{deposit.date}</p>
                    <p
                      className={`text-sm ${
                        deposit.status === "Completed"
                          ? "text-green-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {deposit.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <LinksFooter></LinksFooter>
      <Footer></Footer>
    </>
  );
};

export default CryptoDepositDashboard;
