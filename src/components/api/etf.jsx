import { useEffect, useRef } from "react";

const TradingViewEtfHeatmap = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (widgetRef.current) return; // Prevent multiple initializations
    widgetRef.current = true; 

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-etf-heatmap.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      dataSource: "AllUSEtf",
      blockSize: "aum",
      blockColor: "change",
      grouping: "asset_class",
      locale: "en",
      symbolUrl: "",
      colorTheme: "dark",
      hasTopBar: false,
      isDataSetEnabled: false,
      isZoomEnabled: true,
      hasSymbolTooltip: true,
      isMonoSize: false,
      width: "100%",
      height: "100%",
    });

    document.getElementById("tradingview-etf-heatmap").appendChild(script);

    return () => {
      widgetRef.current = null; // Reset on unmount
    };
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ width: "100%", height: "100%" }}>
      <div id="tradingview-etf-heatmap"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewEtfHeatmap;
