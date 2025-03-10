import { useEffect } from "react";

const CalendarWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
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

    document.getElementById("tradingview-events-widget").appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
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
