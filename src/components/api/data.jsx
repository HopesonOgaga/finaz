import { useEffect } from "react";

const DateQuotesWidget = () => {
  useEffect(() => {
    // Check if the script is already in the DOM
    const existingScript = document.getElementById("tradingview-market-quotes-script");

    if (existingScript) return; // If the script already exists, exit early

    // Create the script element for the TradingView Market Quotes widget
    const script = document.createElement("script");
    script.id = "tradingview-market-quotes-script"; // Unique ID to avoid duplicates
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: '100%',
      height: 550, // Fixed height for desktop
      symbolsGroups: [
        {
          name: "Indices",
          originalName: "Indices",
          symbols: [
            { name: "FOREXCOM:SPXUSD", displayName: "S&P 500 Index" },
            { name: "FOREXCOM:NSXUSD", displayName: "US 100 Cash CFD" },
            { name: "FOREXCOM:DJI", displayName: "Dow Jones Industrial Average Index" },
            { name: "INDEX:NKY", displayName: "Japan 225" },
            { name: "INDEX:DEU40", displayName: "DAX Index" },
            { name: "FOREXCOM:UKXGBP", displayName: "FTSE 100 Index" },
          ],
        },
        {
          name: "Futures",
          originalName: "Futures",
          symbols: [
            { name: "CME_MINI:ES1!", displayName: "S&P 500" },
            { name: "CME:6E1!", displayName: "Euro" },
            { name: "COMEX:GC1!", displayName: "Gold" },
            { name: "NYMEX:CL1!", displayName: "WTI Crude Oil" },
            { name: "NYMEX:NG1!", displayName: "Gas" },
            { name: "CBOT:ZC1!", displayName: "Corn" },
          ],
        },
        {
          name: "Bonds",
          originalName: "Bonds",
          symbols: [
            { name: "CBOT:ZB1!", displayName: "T-Bond" },
            { name: "CBOT:UB1!", displayName: "Ultra T-Bond" },
            { name: "EUREX:FGBL1!", displayName: "Euro Bund" },
            { name: "EUREX:FBTP1!", displayName: "Euro BTP" },
            { name: "EUREX:FGBM1!", displayName: "Euro BOBL" },
          ],
        },
        {
          name: "Forex",
          originalName: "Forex",
          symbols: [
            { name: "FX:EURUSD", displayName: "EUR to USD" },
            { name: "FX:GBPUSD", displayName: "GBP to USD" },
            { name: "FX:USDJPY", displayName: "USD to JPY" },
            { name: "FX:USDCHF", displayName: "USD to CHF" },
            { name: "FX:AUDUSD", displayName: "AUD to USD" },
            { name: "FX:USDCAD", displayName: "USD to CAD" },
          ],
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      colorTheme: "dark",
      locale: "en",
      backgroundColor: "#131722",
    });

    // Append the script to the DOM
    document.getElementById("tradingview-market-quotes-widget").appendChild(script);

    // Cleanup function (runs when the component unmounts)
    return () => {
      // You can add more cleanup logic here if needed
      // (e.g., removing the widget, clearing intervals, etc.)
    };
  }, []); // This effect only runs once when the component mounts

  return (
    <div className="tradingview-widget-container w-full max-w-full" style={{ width: "100%" }}>
      <div
        id="tradingview-market-quotes-widget"
        className="w-full sm:h-72 md:h-96 lg:h-550" // Responsive height based on screen size
        style={{ height: "550px" }} // Default height (500px for desktop)
      ></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
};

export default DateQuotesWidget;
