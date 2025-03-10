// src/NavBar.js

export default function NavBar() {
    return (
      <section className="w-screen bg-navblue pl-4 pr-4">
        {/* Top section with logo, text, and buttons */}
        <div className="flex justify-between w-full h-full p-4 ">
          <div className="flex flex-col items-center">
            {/* Logo and text */}
            <div className="text-2xl font-bold flex items-center w-full">
                <p className="text-white font-bold flex items-center">
                    finanzez
                    <span className="w-3 h-3 mt-4 bg-red-500 rounded-full shadow-md mx-1"></span>
                    net
                </p>
                </div>

            {/* Optional image (currently empty) */}
            <div className="text-white font-semibold underline">
              <p>Depot Eröffnen</p>
            </div>

          </div>
  
          {/* Action buttons */}
          <div className="flex gap-4 py-5">
            <div>
              <input
                    type="search"
                    className="border-b-2 border-transparent focus:border-blue-500 focus:outline-none"
                    placeholder="Search"
                    />

            </div>
            <div>
              <button className="btn bg-white border-red-300   text-red-500 font-medium capitalize rounded-lg shadow-md w-36 h-10">1 Share Free</button>
            </div>
            <div>
              <button className="btn bg-navgold text-white font-medium capitalize rounded-lg shadow-md w-36 h-10">Buy Crypto</button>
            </div>
            <div className="">
              <button className="btn bg-navgreen text-white font-medium capitalize rounded-lg shadow-md w-36 h-10">ETF Savings Plan</button>
            </div>
            <div>
              <button className="btn  bg-white text-blue-600 font-medium capitalize rounded-lg shadow-md w-36 h-10 ">
                Register <img src="register-icon.png" alt="register" className="inline-block w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
  
        {/* Main Navigation Links */}
        <div className="">
          <nav className="flex w-full justify-center gap-6 p-4 ">
            <ul className="flex gap-6 text-white ">
              <li className="font-medium text-lg  capitalize"><a href="#shares">Shares</a></li>
              <li className="font-medium text-lg capitalize"><a href="#news">News</a></li>
              <li className="font-medium text-lg capitalize"><a href="#indices">Indices</a></li>
              <li className="font-medium text-lg capitalize"><a href="#funds">Funds</a></li>
              <li className=" uppercase text-lg font-medium"><a href="#etfs">ETFs</a></li>
              <li className="font-medium text-lg capitalize"><a href="#certificates">Certificates</a></li>
              <li className="font-medium text-lg capitalize"><a href="#leverage-products">Leverage Products</a></li>
              <li className="font-medium text-lg capitalize"><a href="#bonds">Bonds</a></li>
              <li className="font-medium text-lg capitalize"><a href="#raw-materials">Raw Materials</a></li>
              <li className="font-medium text-lg capitalize"><a href="#crypto">Crypto</a></li>
              <li className="font-medium text-lg  capitalize"><a href="#currency">Currency</a></li>
              <li className="font-medium text-lg capitalize"><a href="#counselor">Counselor</a></li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
  