import React, { useEffect } from 'react';

const   RealTimeChart = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
    });
    document.getElementById('tradingview-widget-container').appendChild(script);
    
    return () => {
      // Cleanup script on component unmount
      document.getElementById('tradingview-widget-container').removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container h-screen pl-6 pr-6 " style={{ height: '80vh', width: '100%' }} id="tradingview-widget-container">
      <div className="tradingview-widget-container__widget" style={{ height: 'calc(100% - 32px)', width: '100%' }}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="">
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
};

export default RealTimeChart;
