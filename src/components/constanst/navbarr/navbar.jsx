import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavFaq from "../faq";

export default function NavBar() {
  // State to manage dropdown visibility
  const [isSharesDropdownOpen, setIsSharesDropdownOpen] = useState(false);
  const [isShareProfileOpen, setProfileOpen] = useState(false);
  const [ismenu, setMenuOpen] = useState(false);
  const [isProfile, setProfile] = useState(false)
  const [isNavbar, setNavBar]=useState(false)
  const [isNews , setNewsBar] = useState(false)
  const [isIndices , setIndices] = useState(false)
  const [isFunds, setFunds] = useState(false)
  const [isCertificates, setCertificates] = useState(false)
  const [isEtfs, setEtfs] = useState(false)
  const [isLeverage , setLeverage] = useState(false)
  const [isBonds, setBonds] = useState(false) 
  const [isMalterials, setMlaterials] = useState(false)
  const [isCurrency, setCurrency]= useState(false)
  const [isCounselor, setCounselor] = useState(false)
  const [iscrypto, setCrypto] = useState(false)
  // Function to toggle dropdown visibility
  const toggleCurrency=()=>{
    setCurrency(isCurrency)
  }
  const toggleCrypto =()=>{
    setCrypto(!iscrypto)
  }
  const toggleCounselor =()=>{
    setCounselor(!isCounselor)
  }
  
  const toggleMalterials =()=>{
    setMlaterials(!isMalterials)
  }
  const toggleFunds =()=>{
          setFunds(!isFunds)
  }
   const toggleIndices = ()=>{
          setIndices(!isIndices)
   }
   const togglecertificates =()=>{
    setCertificates(!isCertificates)
   }
   const toggleEtfs =()=>{
    setEtfs(!isEtfs)
   }
   const toggleLeverage =()=>{
      setLeverage(!isLeverage)
   }
   const toggleBonds =()=>{
         setBonds(!isBonds)
   }
  const toggleNews =()=>{
    setNewsBar(!isNews)
  }
  const toggleSharesDropdown = () => {
    setIsSharesDropdownOpen(!isSharesDropdownOpen);
  };

  const toggleNavbar=()=>{
    setNavBar(!isNavbar)

  }

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
          <div className="text-2xl font-bold flex items-center gap-4">
            <div className=" w-full h-full " >
              <div onClick={toggleMenu} className="md:hidden block w-full h-full flex flex-col justify-between items-center cursor-pointer">
                <div className={`w-10 h-1 bg-white rounded-sm transition-transform duration-300 ${ismenu ? "rotate-45 translate-y-2" : ""}`}></div>
                <div className={`w-10 h-1 bg-white rounded-sm transition-opacity duration-300 ${ismenu ? "opacity-0" : "opacity-100"}`}></div>
                <div className={`w-10 h-1 bg-white rounded-sm transition-transform duration-300 ${ismenu ? "-rotate-45 -translate-y-2" : ""}`}></div>
              </div>
              {ismenu && (
                <div className="w-screen  h-[285vh] bg-white rounded-md shadow-md z-50 absolute  right-1 mt-2">
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
                      {isProfile &&  <ul className="w-full h-full flex flex-col gap-4 mt-4 ">
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
                  <Link to="/social"  className=" flex w-full gap-2 items-center">
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
                   <div  className=" ">
                      <div className="flex justify-between items-center w-full">
                      <Link to={''} className="w-full h-full">
                       <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue  ">
                           shares
                       </li></Link>
                         <div><img className="w-8 h-8" onClick={toggleNavbar} src={isNavbar ? "/img/icons/arrow-up.png" : "/img/icons/down-arrow.png"}  alt="+"></img></div>
                      </div>
                      {
                        isNavbar && <div className="   p-4 flex gap-4 flex-col ">
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/GOOG">stock overview</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/COIN'">indices</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://shorturl.at/2SPIJ">real time prices</a></li>
                        <li className="text-base capitalize font-medium text-navblue" ><a href="https://brokerchooser.com/compare">dates</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.marketwatch.com/investing/stock/nvda'">Investments trends</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/NFLX">dividends</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://brokerchooser.com/compare">broker comparison</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.finanzen.net/ratgeber/boerse/">stock guide</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.finanzen.net/ratgeber/c24-bank-test-und-erfahrungen/">selection</a></li>
                      </div>
                      }
                   </div>
                    <div className=" border-gray-400 border w-full "></div>
                    <div  className=" ">
                      <div className="flex justify-between items-center w-full">
                      <Link to={''} className="w-full h-full">
                       <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue  ">
                           news
                       </li></Link>
                         <div><img className="w-8 h-8" onClick={toggleNews} src={isNews ? "/img/icons/arrow-up.png" : "/img/icons/down-arrow.png"}  alt="+"></img></div>
                      </div>
                      {
                        isNews && <div className="   p-4 flex gap-4 flex-col ">
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/GOOG">news overview</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/COIN'">nes search</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://shorturl.at/2SPIJ">indexes news</a></li>
                        <li className="text-base capitalize font-medium text-navblue" ><a href="https://brokerchooser.com/compare">analyses</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.marketwatch.com/investing/stock/nvda'">categories</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/NFLX">top ranking</a></li>
                      </div>
                      }
                   </div>
                    <div className=" border-gray-400 border w-full "></div>
                    <div  className=" ">
                      <div className="flex justify-between items-center w-full">
                      <Link to={''} className="w-full h-full">
                       <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue  ">
                           Indices
                       </li></Link>
                         <div><img className="w-8 h-8" onClick={toggleIndices} src={isIndices ? "/img/icons/arrow-up.png" : "/img/icons/down-arrow.png"}  alt="+"></img></div>
                      </div>
                      {
                        isIndices && <div className="   p-4 flex gap-4 flex-col ">
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/GOOG">index overview</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/COIN'">important indices</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://shorturl.at/2SPIJ">index lists</a></li>
                        <li className="text-base capitalize font-medium text-navblue" ><a href="https://brokerchooser.com/compare">top/flop lists</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.marketwatch.com/investing/stock/nvda'">real time prices</a></li>
                      </div>
                      }
                   </div>
                    <div className=" border-gray-400 border w-full "></div>
                    <div  className=" ">
                      <div className="flex justify-between items-center w-full">
                      <Link to={''} className="w-full h-full">
                       <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue  ">
                           funds
                       </li></Link>
                         <div><img className="w-8 h-8" onClick={toggleFunds} src={isFunds ? "/img/icons/arrow-up.png" : "/img/icons/down-arrow.png"}  alt="+"></img></div>
                      </div>
                      {
                        isFunds && <div className="   p-4 flex gap-4 flex-col ">
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/GOOG">fund overview</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/COIN'">fund search</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://shorturl.at/2SPIJ">fund regions</a></li>
                        <li className="text-base capitalize font-medium text-navblue" ><a href="https://brokerchooser.com/compare">fund news</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.marketwatch.com/investing/stock/nvda'">sustainable Investments</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/NFLX">specials</a></li>
                      </div>
                      }
                   </div>
                    <div className=" border-gray-400 border w-full "></div>
                    <div  className=" ">
                      <div className="flex justify-between items-center w-full">
                      <Link to={''} className="w-full h-full">
                       <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue  ">
                           etfs
                       </li></Link>
                         <div><img className="w-8 h-8" onClick={toggleEtfs} src={isEtfs ? "/img/icons/arrow-up.png" : "/img/icons/down-arrow.png"}  alt="+"></img></div>
                      </div>
                      {
                        isEtfs && <div className="   p-4 flex gap-4 flex-col ">
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/GOOG">etf overview</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/COIN'">etf search</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://shorturl.at/2SPIJ">etf savings plan</a></li>
                        <li className="text-base capitalize font-medium text-navblue" ><a href="https://brokerchooser.com/compare">etf guide</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.marketwatch.com/investing/stock/nvda'">robo Advisor comparison</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/NFLX">investing in children</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://brokerchooser.com/compare">special</a></li>
                      </div>
                      }
                   </div>
                    <div className=" border-gray-400 border w-full "></div>
                    <div  className=" ">
                      <div className="flex justify-between items-center w-full">
                      <Link to={''} className="w-full h-full">
                       <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue  ">
                           Certificates
                       </li></Link>
                         <div><img className="w-8 h-8" onClick={togglecertificates} src={isCertificates ? "/img/icons/arrow-up.png" : "/img/icons/down-arrow.png"}  alt="+"></img></div>
                      </div>
                      {
                        isCertificates && <div className="   p-4 flex gap-4 flex-col ">
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/GOOG">Certificates overview</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/COIN'">Certificates search</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://shorturl.at/2SPIJ">tools</a></li>
                        <li className="text-base capitalize font-medium text-navblue" ><a href="https://brokerchooser.com/compare">underlying search</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.marketwatch.com/investing/stock/nvda'">to know</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/NFLX">new issues</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://brokerchooser.com/compare">specials</a></li>
                      </div>
                      }
                   </div>
                    <div className=" border-gray-400 border w-full "></div>
                    <div  className=" ">
                      <div className="flex justify-between items-center w-full">
                      <Link to={''} className="w-full h-full">
                       <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue  ">
                           leverage Products
                       </li></Link>
                         <div><img className="w-8 h-8" onClick={toggleLeverage} src={isLeverage ? "/img/icons/arrow-up.png" : "/img/icons/down-arrow.png"}  alt="+"></img></div>
                      </div>
                      {
                        isLeverage && <div className="   p-4 flex gap-4 flex-col ">
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/GOOG">leverage overview</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/COIN'">leverage Products search</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://shorturl.at/2SPIJ">tools</a></li>
                        <li className="text-base capitalize font-medium text-navblue" ><a href="https://brokerchooser.com/compare">underlying search</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.marketwatch.com/investing/stock/nvda'">to know</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/NFLX">new issues</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://brokerchooser.com/compare">specials</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.finanzen.net/ratgeber/boerse/">cfds</a></li>
                      </div>
                      }
                   </div>
                    <div className=" border-gray-400 border w-full "></div>
                    <div  className=" ">
                      <div className="flex justify-between items-center w-full">
                      <Link to={''} className="w-full h-full">
                       <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue  ">
                           bonds
                       </li></Link>
                         <div><img className="w-8 h-8" onClick={toggleBonds} src={isBonds ? "/img/icons/arrow-up.png" : "/img/icons/down-arrow.png"}  alt="+"></img></div>
                      </div>
                      {
                        isBonds && <div className="   p-4 flex gap-4 flex-col ">
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/GOOG">bond overview</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/COIN'">bond search</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://shorturl.at/2SPIJ">to know</a></li>
                        <li className="text-base capitalize font-medium text-navblue" ><a href="https://brokerchooser.com/compare">interest charges</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.marketwatch.com/investing/stock/nvda'">bond guide</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/NFLX">dividends</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://brokerchooser.com/compare">broker comparison</a></li>
                      </div>
                      }
                   </div>
                    <div className=" border-gray-400 border w-full "></div>
                    <div  className=" ">
                      <div className="flex justify-between items-center w-full">
                      <Link to={''} className="w-full h-full">
                       <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue  ">
                           raw malterials
                       </li></Link>
                         <div><img className="w-8 h-8" onClick={toggleMalterials} src={isMalterials ? "/img/icons/arrow-up.png" : "/img/icons/down-arrow.png"}  alt="+"></img></div>
                      </div>
                      {
                        isMalterials && <div className="   p-4 flex gap-4 flex-col ">
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/GOOG">raw maltrials overview</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/COIN'">important raw malterials</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://shorturl.at/2SPIJ">buy gold</a></li>
                        <li className="text-base capitalize font-medium text-navblue" ><a href="https://brokerchooser.com/compare">buy silver</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.marketwatch.com/investing/stock/nvda'">forward curve</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/NFLX">etcs</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://brokerchooser.com/compare">specials</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.finanzen.net/ratgeber/boerse/">cfds</a></li>

                      </div>
                      }
                   </div>
                    <div className=" border-gray-400 border w-full "></div>
                    <div  className=" ">
                      <div className="flex justify-between items-center w-full">
                      <Link to={''} className="w-full h-full">
                       <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue  ">
                           Crypto
                       </li></Link>
                         <div><img className="w-8 h-8" onClick={toggleCurrency} src={isCurrency ? "/img/icons/arrow-up.png" : "/img/icons/down-arrow.png"}  alt="+"></img></div>
                      </div>
                      {
                        isCurrency && <div className="   p-4 flex gap-4 flex-col ">
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/GOOG">Crypto overview</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/COIN'">important cryptocurrencies</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://shorturl.at/2SPIJ">buy cryptocurrencies</a></li>
                        <li className="text-base capitalize font-medium text-navblue" ><a href="https://brokerchooser.com/compare">cfds</a></li>
                      </div>
                      }
                   </div>
                    <div className=" border-gray-400 border w-full "></div>
                    <div  className=" ">
                      <div className="flex justify-between items-center w-full">
                      <Link to={''} className="w-full h-full">
                       <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue  ">
                           Currency
                       </li></Link>
                         <div><img className="w-8 h-8" onClick={toggleCrypto} src={iscrypto ? "/img/icons/arrow-up.png" : "/img/icons/down-arrow.png"}  alt="+"></img></div>
                      </div>
                      {
                        iscrypto && <div className="   p-4 flex gap-4 flex-col ">
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/GOOG">foreign exchange overview</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/COIN'">important currency pairs</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://shorturl.at/2SPIJ">currency converter</a></li>
                        <li className="text-base capitalize font-medium text-navblue" ><a href="https://brokerchooser.com/compare">cryptocurrencies</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.marketwatch.com/investing/stock/nvda'">Crypto broker comparison</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/NFLX">crypto broker comparison</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://brokerchooser.com/compare">cfds</a></li>
                      </div>
                      }
                   </div>
                    <div className=" border-gray-400 border w-full "></div>
                    <div  className=" ">
                      <div className="flex justify-between items-center w-full">
                      <Link to={''} className="w-full h-full">
                       <li className="text-lg capitalize hover:text-blue-400 hover:underline font-semibold text-navblue  ">
                           counselor
                       </li></Link>
                         <div><img className="w-8 h-8" onClick={toggleCounselor} src={isCounselor ? "/img/icons/arrow-up.png" : "/img/icons/down-arrow.png"}  alt="+"></img></div>
                      </div>
                      {
                        isCounselor && <div className="   p-4 flex gap-4 flex-col ">
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/GOOG">our recommnedation</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/COIN'">investment</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://shorturl.at/2SPIJ">etfs, funds and certificates</a></li>
                        <li className="text-base capitalize font-medium text-navblue" ><a href="https://brokerchooser.com/compare">cryptocurrencies</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.marketwatch.com/investing/stock/nvda'">accouts & credit</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.cnbc.com/quotes/NFLX">broker & depots</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://brokerchooser.com/compare">insurance & pensions</a></li>
                        <li className="text-base capitalize font-medium text-navblue"><a href="https://www.finanzen.net/ratgeber/boerse/">youtube</a></li>
                      </div>
                      }
                   </div>
                   
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
                  <Link to="/social"  className=" flex w-full gap-2 items-center">
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
              <a href="https://www.tradingview.com/markets/world-stocks/news/" aria-label="Go to News section">News</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="https://www.tradingview.com/markets/indices/" aria-label="Go to Indices section">Indices</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="#funds" aria-label="Go to Funds section">Funds</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="https://www.tradingview.com/markets/etfs/" aria-label="Go to ETFs section">ETFs</a>
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
              <a href="https://www.tradingview.com/markets/bonds/" aria-label="Go to Bonds section">Bonds</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="https://www.tradingview.com/markets/cryptocurrencies/" aria-label="Go to Crypto section">Crypto</a>
            </li>
            <li className="capitalize hover:text-gray-300 transition-colors">
              <a href="https://www.tradingview.com/markets/currencies/" aria-label="Go to Currency section">Currency</a>
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
