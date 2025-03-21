import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  // State to manage dropdown visibility
  const [isSharesDropdownOpen, setIsSharesDropdownOpen] = useState(false);
  const [isShareProfileOpen, setProfileOpen] = useState(false);
  const [ismenu, setMenuOpen] = useState(false);
  const [isProfile, setProfile] = useState(false)

  // Function to toggle dropdown visibility
  const toggleSharesDropdown = () => {
    setIsSharesDropdownOpen(!isSharesDropdownOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!isShareProfileOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!ismenu);
  };

  const toggleInsideProfile =()=>{
       setProfile(!isProfile)
  }

  return (
    <section className="max-w-full h-[20vh] md:h-full bg-navblue p-4 md:px-6 md:py-6 ">
      <div className="flex w-full h-full">
        <div className="flex flex-col items-start md:items-start w-full h-full">
          {/* Logo and text */}
          <div className="text-2xl font-bold flex items-center gap-3">
            <div >
              <img onClick={toggleMenu}
                className="md:hidden block w-10 h-8 rounded-sm shadow-md bg-white cursor-pointer"
                src="/img/icons/menu.png"
                alt="Menu"
              />
              {ismenu && (
                <div className="w-screen  h-[150vh] bg-white rounded-md shadow-md z-50 absolute  right-1 mt-2">
                  <ul className="w-full h-full p-4 flex flex-col gap-4">
                   <Link to={"https://shorturl.at/OHjQJ"} className=" flex w-full gap-2 items-center">
                   <img className="w-10 h-10" alt="" src="/img/grid/img-oskar-logo.svg"></img>
                    <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue ">
                      open a depot
                    </li>
                   </Link>
                    <div className=" border-gray-400 border w-full "></div>
                   <Link to={'https://shorturl.at/cBCgr'} className=" flex w-full gap-2 items-center">
                   <img className="w-10 h-10" src="/img/grid/zero.svg" alt=""></img>
                   <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue ">
                      etf Savings plan
                    </li>
                   </Link>
                    <div className=" border-gray-400 border w-full "></div>
                    <li onClick={toggleInsideProfile} className="text-lg capitalize  hover:underline font-semibold text-navblue ">
                      log in
                      {isProfile &&  <ul className="w-full h-full flex flex-col gap-4 p-4 no-underline ">
                  <Link to="/overview"  className=" flex w-full gap-2 items-center">
                  <img src="/navicons/ice-cube.png" alt="overview" className="w-4 h-4"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">overview</li>
                  </Link>
                  <Link to="/profileData"  className=" flex w-full gap-2 items-center">
                   <img className="h-4 w-4" src="/navicons/packages.png" alt="shinnig"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">securities</li>
                  </Link>
                  <Link to="#"  className=" flex w-full gap-2 items-center">
                  <img className="h-4 w-4" src="/navicons/shining.png" alt="shinnig"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">model portfolios</li>
                  </Link>
                  <Link to="#"  className=" flex w-full gap-2 items-center" >
                    <img src="/navicons/star.png" className="h-4 w-4" alt="star"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">watchlist</li>
                  </Link>
                  <Link to="https://www.tradingview.com/markets/stocks-usa/#hotlist-stocks-widget"  className=" flex w-full gap-2 items-center">
                    <img className="w-4 h-4" src="/navicons/news.png" alt="news"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">my news</li>
                  </Link>
                  <Link to="#"  className=" flex w-full gap-2 items-center">
                    <img src="/navicons/telegram.png" alt="newsletter" className="w-4 h-4"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">newsletter</li>
                  </Link>
                  <Link to="#"  className=" flex w-full gap-2 items-center">
                    <img className="h-4 w-4" src="/navicons/forum.png" alt="forum"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">forum</li>
                  </Link>
                  <Link to="https://www.tradingdesk.de/"  className=" flex w-full gap-2 items-center">
                    <img src="/navicons/presentation.png" alt="trading" className="w-4 h-4"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">trading desk</li>
                  </Link>
                  <Link to="#"  className=" flex w-full gap-2 items-center">
                    <img className="w-4 h-4" alt="" src="/navicons/mobile-phone.png"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">apps</li>
                  </Link>
                  <Link to="#"  className=" flex w-full gap-2 items-center">
                   <img className="w-4 h-4" src="/navicons/thumbs-up.png" alt="social"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">social media</li>
                  </Link>
                  <Link to="https://www.thestockpodcast.com/episodes/"  className=" flex w-full gap-2 items-center">
                     <img className="w-4 h-4" src="/navicons/podcast.png" alt=""></img>
                    <li className="capitalize hover:underline hover:text-blue-500">podcast</li>
                  </Link>
                  <div className="text-white font-semibold underline mt-2 border-b-4 border-navblue"></div>
                  <Link to="/login" className=" flex w-full gap-2 items-center" >
                  <img className="w-4 h-4 " src="/img/profile.png" alt="profile"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">profile</li>
                  </Link>
                  <Link to="#" className=" flex w-full gap-2 items-center" >
                     <img className="h-4 w-4" src="/navicons/quit.png" alt="quit"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">logout</li>
                  </Link>
                </ul>}
                    </li>
                  
                    <div className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue "></div>
                   <div className="underline border-navblue border-2 border"></div>
                    <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue ">
                      shares
                    </li>
                    <div className=" border-gray-400 border w-full "></div>
                    <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue ">
                      news
                    </li>
                    <div className=" border-gray-400 border w-full "></div>
                    <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue ">
                      indices
                    </li>
                    <div className=" border-gray-400 border w-full "></div>
                    <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue ">
                      funds
                    </li>
                    <div className=" border-gray-400 border w-full "></div>
                    <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue ">
                      etfs
                    </li>
                    <div className=" border-gray-400 border w-full "></div>
                    <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue ">
                      Certificates
                    </li>
                    <div className=" border-gray-400 border w-full "></div>
                    <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue ">
                      leverage products
                    </li>
                    <div className=" border-gray-400 border w-full "></div>
                    <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue ">
                      raw materials
                    </li>
                    <div className=" border-gray-400 border w-full "></div>
                    <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue ">
                      bonds
                    </li>
                    <div className=" border-gray-400 border w-full "></div>
                    <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue ">
                      Crypto
                    </li>
                    <div className=" border-gray-400 border w-full "></div>
                    <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue ">
                      currency
                    </li>
                    <div className=" border-gray-400 border w-full "></div>
                    <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue ">
                      counsellor
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link to="/" className="w-full h-full">
              <p className="text-white font-bold flex items-center">
                finanzez
                <span className="w-3 h-3 mt-1 bg-red-500 rounded-full shadow-md mx-1"></span>
                net
              </p>
            </Link>
          </div>

          {/* Optional image (currently empty) */}
          <div className="text-white font-semibold underline mt-2">
            <p className="underline">Depot Eröffnen</p>
          </div>
        </div>

        {/* Action buttons - visible on medium and larger screens */}
        <div className="flex gap-4 py-4 hidden sm:flex sm:gap-8">
          <div>
            <Link to={"https://tinyurl.com/48e5evud"}>
              
              <button  className="p-1 btn bg-white border-red-300 text-red-500 font-medium capitalize rounded-lg shadow-md w-36 h-10 hover:bg-red-100 transition-colors ease-in-out flex items-center">
              <img src="/img/grid/zero.svg" className="w-10 h-20 "></img> 1 Share Free
              </button>
            </Link>
          </div>
          <div>
            <Link to={"https://tinyurl.com/5n745n5a"}>
              <button className="btn bg-navpink text-white font-medium capitalize rounded-lg shadow-md w-36 h-10 hover:bg-yellow-600 transition-colors ease-in-out">
                Buy Crypto
              </button>
            </Link>
          </div>
          <div>
            <Link to={"https://shorturl.at/eaDLB"}>
              <button className="btn bg-navgreen text-white font-medium capitalize rounded-lg shadow-md w-36 h-10 hover:bg-green-600 transition-colors ease-in-out">
                ETF Savings Plan
              </button>
            </Link>
          </div>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={toggleProfile}
              className="btn bg-white text-blue-600 font-medium capitalize rounded-lg shadow-md w-36 h-10 hover:bg-blue-50 transition-colors ease-in-out flex justify-center items-center space-x-2"
            >
              <span>Register</span>
              <div className="border-2 rounded-full w-10 h-10 flex justify-center items-center">
                <img src="./img/profile.png" alt="register" className="w-6 h-6" />
              </div>
            </button>
            {isShareProfileOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg py-4 mt-2 w-[20vw] p-4 z-40 right-10">
                <ul className="w-full h-full flex flex-col gap-4">
                  <Link to="/overview"  className=" flex w-full gap-2 items-center">
                  <img src="/navicons/ice-cube.png" alt="overview" className="w-4 h-4"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">overview</li>
                  </Link>
                  <Link to="/profileData"  className=" flex w-full gap-2 items-center">
                   <img className="h-4 w-4" src="/navicons/packages.png" alt="shinnig"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">securities</li>
                  </Link>
                  <Link to="#"  className=" flex w-full gap-2 items-center">
                  <img className="h-4 w-4" src="/navicons/shining.png" alt="shinnig"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">model portfolios</li>
                  </Link>
                  <Link to="#"  className=" flex w-full gap-2 items-center" >
                    <img src="/navicons/star.png" className="h-4 w-4" alt="star"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">watchlist</li>
                  </Link>
                  <Link to="https://www.tradingview.com/markets/stocks-usa/#hotlist-stocks-widget"  className=" flex w-full gap-2 items-center">
                    <img className="w-4 h-4" src="/navicons/news.png" alt="news"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">my news</li>
                  </Link>
                  <Link to="#"  className=" flex w-full gap-2 items-center">
                    <img src="/navicons/telegram.png" alt="newsletter" className="w-4 h-4"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">newsletter</li>
                  </Link>
                  <Link to="#"  className=" flex w-full gap-2 items-center">
                    <img className="h-4 w-4" src="/navicons/forum.png" alt="forum"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">forum</li>
                  </Link>
                  <Link to="https://www.tradingdesk.de/"  className=" flex w-full gap-2 items-center">
                    <img src="/navicons/presentation.png" alt="trading" className="w-4 h-4"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">trading desk</li>
                  </Link>
                  <Link to="#"  className=" flex w-full gap-2 items-center">
                    <img className="w-4 h-4" alt="" src="/navicons/mobile-phone.png"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">apps</li>
                  </Link>
                  <Link to="#"  className=" flex w-full gap-2 items-center">
                   <img className="w-4 h-4" src="/navicons/thumbs-up.png" alt="social"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">social media</li>
                  </Link>
                  <Link to="https://www.thestockpodcast.com/episodes/"  className=" flex w-full gap-2 items-center">
                     <img className="w-4 h-4" src="/navicons/podcast.png" alt=""></img>
                    <li className="capitalize hover:underline hover:text-blue-500">podcast</li>
                  </Link>
                  <div className="text-white font-semibold underline mt-2 border-b-4 border-navblue"></div>
                  <Link to="/login" className=" flex w-full gap-2 items-center" >
                  <img className="w-4 h-4 " src="/img/profile.png" alt="profile"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">profile</li>
                  </Link>
                  <Link to="#" className=" flex w-full gap-2 items-center" >
                     <img className="h-4 w-4" src="/navicons/quit.png" alt="quit"></img>
                    <li className="capitalize hover:underline hover:text-blue-500">logout</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Burger icon */}
        <div className="flex gap-6">
          <Link to={'/'} className="">
            <div className="bg-white w-10 h-10 rounded-full items-center shadow-sm flex justify-center md:hidden block">
              <img className="md:hidden block w-6 h-6" src="/img/profile.png" alt="Profile" />
            </div>
          </Link>
        </div>
      </div>

      {/* Main Navigation Links - responsive */}
      <div className="w-full">
        <nav className="flex flex-col sm:flex-row justify-center gap-6 py-4">
          <ul className="flex hidden md:block md:flex gap-6 text-white text-lg font-medium">
            <li
              className="relative capitalize hover:text-gray-300 transition-colors"
              onMouseEnter={toggleSharesDropdown}
              onMouseLeave={toggleSharesDropdown}
            >
              <a href="https://shorturl.at/CKHFo" aria-label="Go to Shares section">Shares</a>
              {/* Dropdown Menu */}
              {isSharesDropdownOpen && (
                <ul className="absolute bg-white shadow-lg rounded-lg py-4 mt-2 w-64 z-10">
                  <p className="text-lg capitalize text-navblue underline p-2">stock overview</p>
                  <li className="capitalize px-4 py-2 hover:bg-gray-200">
                    <a href="#broker-overview" className="text-navblue capitalize text-sm">Broker Overview</a>
                  </li>
                  <li className="capitalize px-4 py-2 hover:bg-gray-200">
                    <a href="#investments" className="text-navblue capitalize text-sm">Investments</a>
                  </li>
                  <li className="capitalize px-4 py-2 hover:bg-gray-200">
                    <a href="#performance" className="text-navblue capitalize text-sm">Performance</a>
                  </li>
                  <li className="capitalize px-4 py-2 hover:bg-gray-200">
                    <a href="#taxes" className="text-navblue capitalize text-sm">Tax Information</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#news" aria-label="Go to News section">News</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#indices" aria-label="Go to Indices section">Indices</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#funds" aria-label="Go to Funds section">Funds</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#etfs" aria-label="Go to ETFs section">ETFs</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#certificates" aria-label="Go to Certificates section">Certificates</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#leverage" aria-label="Go to Leverage Products section">Leverage Products</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#commodities" aria-label="Go to Commodities section">Commodities</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#bonds" aria-label="Go to Bonds section">Bonds</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#crypto" aria-label="Go to Crypto section">Crypto</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#currency" aria-label="Go to Currency section">Currency</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="https://www.finanzen.net/ratgeber/" aria-label="Go to Advisor section">Counselor</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
