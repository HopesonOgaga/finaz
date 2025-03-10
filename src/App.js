import CalendarWidget from "./components/api/calendar";
import TradingViewEtfHeatmap from "./components/api/etf";
import ETFViewWidget from "./components/api/etf";
import StockViewWidget from "./components/api/stockheat";
import TradingViewWidget from "./components/constanst/header/news";


function App() {
   return <section>
      <TradingViewWidget></TradingViewWidget>
      <CalendarWidget></CalendarWidget>
      <TradingViewEtfHeatmap></TradingViewEtfHeatmap>
   </section>
}

export default App;
