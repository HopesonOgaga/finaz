import React, { useEffect } from 'react';

const TradingTicket = () => {
  useEffect(() => {
    // Dynamically load the TradingView script
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    script.onload = () => {
      // Initialize the TradingView widget after the script is loaded
      new window.TradingView.widget({
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500 Index",
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100 Cash CFD",
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD",
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin",
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum",
          },
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "light",
        "locale": "en",
        "container_id": "tradingview-widget-container",
      });
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        id="tradingview-widget-container"
        className="tradingview-widget-container__widget"
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target=""
        >
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
};

export default TradingTicket;
