import { useEffect } from "react";

const TradingViewScreener = () => {
  useEffect(() => {
    const container = document.getElementById("tradingview-screener");

    if (!container || container.childNodes.length > 0) return; // Prevents duplicate rendering

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 550,
      defaultColumn: "overview",
      defaultScreen: "general",
      market: "forex",
      showToolbar: true,
      colorTheme: "light",
      locale: "en",
    });

    container.appendChild(script);

    return () => {
      container.innerHTML = ""; // Cleanup on unmount
    };
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ width: "100%" }}>
      <div id="tradingview-screener" style={{ height: "550px", width: "100%" }}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewScreener;
