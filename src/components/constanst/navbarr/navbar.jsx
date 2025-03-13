

// src/NavBar.js
export default function NavBar() {
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
            <p>Depot Eröffnen</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 py-4">
          <div>
            <button className="btn bg-white border-red-300 text-red-500 font-medium capitalize rounded-lg shadow-md w-36 h-10 hover:bg-red-100 transition-colors ease-in-out">
              1 Share Free
            </button>
          </div>
          <div>
            <button className="btn bg-navpink text-white font-medium capitalize rounded-lg shadow-md w-36 h-10 hover:bg-yellow-600 transition-colors ease-in-out">
              Buy Crypto
            </button>
          </div>
          <div>
            <button className="btn bg-navgreen text-white font-medium capitalize rounded-lg shadow-md w-36 h-10 hover:bg-green-600 transition-colors ease-in-out">
              ETF Savings Plan
            </button>
          </div>
          <div>
            <button className="btn bg-white text-blue-600 font-medium capitalize rounded-lg shadow-md w-36 h-10 hover:bg-blue-50 transition-colors ease-in-out flex justify-center items-center space-x-2">
              <span>Register</span>
              <div className="border-2 rounded-full bg-navblue w-8 h-8 flex justify-center items-center">
                <img
                  src="./img/profile.png"
                  alt="register"
                  className="w-6 h-6"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Links */}
      <div className="w-full">
        <nav className="flex justify-center gap-6 py-4">
          <ul className="flex gap-6 text-white text-lg font-medium">
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#shares" aria-label="Go to Shares section">
                Shares
              </a>
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
