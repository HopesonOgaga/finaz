import { useEffect } from "react";

const TradingViewHotlistsWidget = () => {
  useEffect(() => {
    // Check if the script already exists in the document
    const existingScript = document.getElementById("tradingview-hotlists-script");

    if (existingScript) return; // If the script already exists, do nothing

    // Create the script element for the TradingView widget
    const script = document.createElement("script");
    script.id = "tradingview-hotlists-script"; // Give the script a unique ID
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      exchange: "US",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: false,
      showFloatingTooltip: false,
      width: "400",
      height: "550",
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(42, 46, 57, 0)",
      scaleFontColor: "rgba(219, 219, 219, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(241, 194, 50, 0.12)",
    });

    // Append the script to the widget container
    document.getElementById("tradingview-hotlists-widget").appendChild(script);
  }, []); // The empty dependency array ensures this effect runs only once when mounted

  return (
    <div className="tradingview-widget-container" style={{ width: "400px", height: "550px" }}>
      <div id="tradingview-hotlists-widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewHotlistsWidget;
