import { useEffect } from "react";

const NewsTradingViewWidget = () => {
  useEffect(() => {
    // Check if the script already exists in the document
    if (!document.getElementById("tradingview-script")) {
      const script = document.createElement("script");
      script.id = "tradingview-script"; // Add an ID to identify the script
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        feedMode: "all_symbols",
        isTransparent: false,
        displayMode: "adaptive",
        width: "750",
        height: "500",
        colorTheme: "light",
        locale: "en",
      });

      // Append the script to the DOM
      document.getElementById("tradingview-widget").appendChild(script);
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="tradingview-widget-container max-w-full w-full md:block hidden">
      <div id="tradingview-widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
};

export default NewsTradingViewWidget;
