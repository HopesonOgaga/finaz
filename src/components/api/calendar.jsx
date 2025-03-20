import { useEffect } from "react";

const CalendarWidget = () => {
  useEffect(() => {
    // Check if the script already exists in the document
    if (!document.getElementById("tradingview-events-script")) {
      const script = document.createElement("script");
      script.id = "tradingview-events-script"; // Add an ID to identify the script
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "light",
        isTransparent: false,
        width: "400",
        height: "550",
        locale: "en",
        importanceFilter: "-1,0,1",
        countryFilter: "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
      });

      // Append the script to the DOM
      document.getElementById("tradingview-events-widget").appendChild(script);
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="tradingview-widget-container w-full h-full">
      <div id="tradingview-events-widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
};

export default CalendarWidget;
