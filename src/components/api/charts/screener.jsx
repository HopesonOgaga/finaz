import React, { useEffect, useRef } from 'react';

function TradingViewTickerTape() {
  const container = useRef();

  useEffect(() => {
    // Check if the TradingView script already exists
    const existingScript = document.getElementById('tradingview-ticker-tape-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'tradingview-ticker-tape-script';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [
          { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500 Index" },
          { "proName": "FOREXCOM:NSXUSD", "title": "US 100 Cash CFD" },
          { "proName": "FX_IDC:EURUSD", "title": "EUR to USD" },
          { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
          { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum" }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
      });

      container.current.appendChild(script);
    }

    // Cleanup script when component unmounts
    return () => {
      const script = document.getElementById('tradingview-ticker-tape-script');
      if (script) {
       
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ width: '100%', height: '50px' }}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="">
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
}

export default TradingViewTickerTape;
