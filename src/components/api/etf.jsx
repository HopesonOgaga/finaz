import { useEffect } from "react";

const TradingViewEtfHeatmap = () => {
  useEffect(() => {
    // Check if the script is already added to the DOM
    const existingScript = document.getElementById("tradingview-etf-heatmap-script");

    if (existingScript) return; // If the script already exists, return early to prevent duplicate loading

    // Create the script element for the TradingView ETF Heatmap widget
    const script = document.createElement("script");
    script.id = "tradingview-etf-heatmap-script"; // Add an ID to the script for easy detection
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-etf-heatmap.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      dataSource: "AllUSEtf",
      blockSize: "aum",
      blockColor: "change",
      grouping: "asset_class",
      locale: "en",
      symbolUrl: "",
      colorTheme: "light",
      hasTopBar: false,
      isDataSetEnabled: false,
      isZoomEnabled: true,
      hasSymbolTooltip: true,
      isMonoSize: false,
      width: "100%",
      height: "100%",
    });

    // Append the script to the DOM
    document.getElementById("tradingview-etf-heatmap").appendChild(script);

    // Cleanup function to reset if the component is unmounted
    return () => {
      // You can add any cleanup logic if necessary, but the script won't be added again due to the check.
    };
  }, []); // The empty array ensures this effect only runs once when the component is mounted

  return (
    <div className="tradingview-widget-container" style={{ width: "100%", height: "100%" }}>
      <div id="tradingview-etf-heatmap"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewEtfHeatmap;
