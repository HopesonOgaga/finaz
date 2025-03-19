import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  // State to manage dropdown visibility
  const [isSharesDropdownOpen, setIsSharesDropdownOpen] = useState(false);
  const [isShareProfileOpen, setProfileOpen] = useState(false);
  // Function to toggle dropdown visibility
  const toggleSharesDropdown = () => {
    setIsSharesDropdownOpen(!isSharesDropdownOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!isShareProfileOpen);
  };

  return (
    <section className="w-full bg-navblue px-4 py-8">
      {/* Top section with logo, text, and buttons */}
      <div className="w-full h-full pl-0 pr-0 ">
        {/* <TradingTicket></TradingTicket> */}
      </div>
      <div className="flex flex-col sm:flex-row justify-around items-center w-full py-6">
        <div className="flex flex-col items-center sm:items-start">
          {/* Logo and text */}
          <div className="text-2xl font-bold flex items-center">
            <p className="text-white font-bold flex items-center">
              finanzez
              <span className="w-3 h-3 mt-1 bg-red-500 rounded-full shadow-md mx-1"></span>
              net
            </p>
          </div>

          {/* Optional image (currently empty) */}
          <div className="text-white font-semibold underline mt-2">
            <p className="underline">Depot Eröffnen</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 py-4">
          <div>
            <Link to={"https://tinyurl.com/48e5evud"}>
              {" "}
              <button className="btn bg-white border-red-300 text-red-500 font-medium capitalize rounded-lg shadow-md w-36 h-10 hover:bg-red-100 transition-colors ease-in-out">
                1 Share Free
              </button>
            </Link>
          </div>
          <div>
            <Link to={"https://tinyurl.com/5n745n5a"} className="w-full h-full">
              {" "}
              <button className="btn bg-navpink text-white font-medium capitalize rounded-lg shadow-md w-36 h-10 hover:bg-yellow-600 transition-colors ease-in-out">
                Buy Crypto
              </button>
            </Link>
          </div>
          <div>
            <Link to={"https://shorturl.at/eaDLB"} className="w-full h-full">
              <button className="btn bg-navgreen text-white font-medium capitalize rounded-lg shadow-md w-36 h-10 hover:bg-green-600 transition-colors ease-in-out">
                ETF Savings Plan
              </button>
            </Link>
          </div>
          <div>
            <button
              onMouseEnter={toggleProfile}
              onClick={toggleProfile}
              className="btn bg-white text-blue-600 font-medium capitalize rounded-lg shadow-md w-36 h-10 hover:bg-blue-50 transition-colors ease-in-out flex justify-center items-center space-x-2"
            >
              <span>Register</span>
              <div className="border-2 rounded-full  w-10 h-10 flex justify-center items-center">
                <img
                  src="./img/profile.png"
                  alt="register"
                  className="w-6 h-6"
                />
              </div>
            </button>
            {isShareProfileOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg py-4 mt-2 w-[20vw] p-4 z-10">
                <ul className="w-full h-full flex flex-col gap-4  ">
                  <Link to="/overview">
                    <li className="capitalize hover:underline hover:text-blue-500">
                      overview
                    </li>
                  </Link>
                  <Link to="/profileData">
                    <li className="capitalize hover:underline hover:text-blue-500 ">
                      <img src="" alt="" />
                      <p>securities</p>
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="capitalize hover:underline hover:text-blue-500">
                      <img src="" alt="" />
                      <p>model portfolios</p>
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="capitalize hover:underline hover:text-blue-500">
                      <img src="" alt="" />
                      <p>watchlist</p>
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="capitalize hover:underline hover:text-blue-500">
                      <img src="" alt="" />
                      <p>my news</p>
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="capitalize hover:underline hover:text-blue-500">
                      <img src="" alt="" />
                      <p>newsletter</p>
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="capitalize hover:underline hover:text-blue-500">
                      <img src="" alt="" />
                      <p>forum</p>
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="capitalize hover:underline hover:text-blue-500">
                      <img src="" alt="" />
                      <p>trading desk</p>
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="capitalize hover:underline hover:text-blue-500">
                      <img src="" alt="" />
                      <p>apps</p>
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="capitalize hover:underline hover:text-blue-500">
                      <img src="" alt="" />
                      <p>social media</p>
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="capitalize hover:underline hover:text-blue-500">
                      <img src="" alt="" />
                      <p>podcast</p>
                    </li>
                  </Link>
                  <div className="text-white font-semibold underline mt-2 border-b-4 border-navblue"></div>
                  <Link to="/login">
                    <li className="capitalize hover:underline hover:text-blue-500">
                      <img src="" alt="" />
                      <p>profile</p>
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="capitalize hover:underline hover:text-blue-500">
                      <img src="" alt="" />
                      <p>logout</p>
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Links */}
      <div className="w-full">
        <nav className="flex justify-center gap-6 py-4">
          <ul className="flex gap-6 text-white text-lg font-medium">
            {/* Shares with dropdown */}
            <li
              className="relative capitalize hover:text-gray-300 transition-colors"
              onMouseEnter={toggleSharesDropdown}
              onMouseLeave={toggleSharesDropdown}
            >
              <a href="#shares" aria-label="Go to Shares section">
                Shares
              </a>
              {/* Dropdown Menu */}
              {isSharesDropdownOpen && (
                <ul className="absolute bg-white shadow-lg rounded-lg py-4 mt-2 w-64 z-10">
                  <p className="text-xl capitalize text-navblue underline  p-2">
                    stock overview
                  </p>
                  <li className="capitalize px-4 py-2 hover:bg-gray-200">
                    <a
                      href="#broker-overview"
                      aria-label="Go to Broker Overview"
                      className="text-navblue  capitalize text-sm"
                    >
                      Broker Overview
                    </a>
                  </li>
                  <li className="capitalize px-4 py-2 hover:bg-gray-200">
                    <a
                      href="#stocks-news"
                      aria-label="Go to Stocks News"
                      className="text-navblue  capitalize text-sm "
                    >
                      Stocks News
                    </a>
                  </li>
                  <li className="capitalize px-4 py-2 hover:bg-gray-200">
                    <a
                      href="#dates"
                      aria-label="Go to Dates"
                      className="text-navblue  capitalize text-sm "
                    >
                      Dates
                    </a>
                  </li>
                  <li className="capitalize px-4 py-2 hover:bg-gray-200">
                    <a
                      href="#real-time-prices"
                      aria-label="Go to Real Time Prices"
                      className="text-navblue  capitalize text-sm "
                    >
                      Real Time Prices
                    </a>
                  </li>
                  <li className="capitalize px-4 py-2 hover:bg-gray-200">
                    <a
                      href="#investment-trends"
                      aria-label="Go to Investment Trends"
                      className="text-navblue  capitalize text-sm "
                    >
                      Investment Trends
                    </a>
                  </li>
                  <li className="capitalize px-4 py-2 hover:bg-gray-200">
                    <a
                      href="#dividends"
                      aria-label="Go to Dividends"
                      className="text-navblue  capitalize text-sm "
                    >
                      Dividends
                    </a>
                  </li>
                  <li className="capitalize px-4 py-2 hover:bg-gray-200">
                    <a
                      href="#stock-prices"
                      aria-label="Go to Stock Prices"
                      className="text-navblue  capitalize text-sm "
                    >
                      Stock Prices
                    </a>
                  </li>
                  {/* Add 3 more links to make up 10 total */}
                  <li className="capitalize px-4 py-2 hover:bg-gray-200">
                    <a
                      href="#link-8"
                      aria-label="Go to Link 8"
                      className="text-navblue  capitalize text-sm "
                    >
                      Link 8
                    </a>
                  </li>
                  <li className="capitalize px-4 py-2 hover:bg-gray-200">
                    <a
                      href="#link-9"
                      aria-label="Go to Link 9"
                      className="text-navblue  capitalize text-sm "
                    >
                      Link 9
                    </a>
                  </li>
                  <li className="capitalize px-4 py-2 hover:bg-gray-200">
                    <a
                      href="#link-10"
                      aria-label="Go to Link 10"
                      className="text-navblue  capitalize text-sm "
                    >
                      Link 10
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#news" aria-label="Go to News section">
                News
              </a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#indices" aria-label="Go to Indices section">
                Indices
              </a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#funds" aria-label="Go to Funds section">
                Funds
              </a>
            </li>
            <li className="uppercase hover:text-gray-300 transition-colors">
              <a href="#etfs" aria-label="Go to ETFs section">
                ETFs
              </a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#certificates" aria-label="Go to Certificates section">
                Certificates
              </a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a
                href="#leverage-products"
                aria-label="Go to Leverage Products section"
              >
                Leverage Products
              </a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#bonds" aria-label="Go to Bonds section">
                Bonds
              </a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#raw-materials" aria-label="Go to Raw Materials section">
                Raw Materials
              </a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#crypto" aria-label="Go to Crypto section">
                Crypto
              </a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#currency" aria-label="Go to Currency section">
                Currency
              </a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#counselor" aria-label="Go to Counselor section">
                Counselor
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
