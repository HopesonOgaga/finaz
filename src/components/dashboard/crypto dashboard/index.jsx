import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import NavBar from "../../constanst/navbarr/navbar";
import LinksFooter from "../../constanst/footer/links";
import Footer from "../../constanst/footer";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const CryptoDepositDashboard = () => {
  // Sample state data for user wallet and deposit history
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

  // User Info (Profile)
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://i.pravatar.cc/150?img=3", // Placeholder avatar image
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

  // Chart Data for balance visualization (Sample data)
  const chartData = {
    labels: ["BTC", "ETH", "LTC"],
    datasets: [
      {
        label: "Balance",
        data: [walletBalance.BTC, walletBalance.ETH, walletBalance.LTC],
        fill: false,
        borderColor: "#34D399", // Tailwind green
        tension: 0.1,
      },
    ],
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
              src={user.avatar}
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>

          {/* Wallet Balance Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Wallet Balance
            </h2>
            <Line
              data={chartData}
              options={{
                responsive: true,
                scales: { x: { beginAtZero: true }, y: { beginAtZero: true } },
              }}
            />
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
