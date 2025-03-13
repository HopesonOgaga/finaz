import NavBar from "../navbarr/navbar";
import NewsTradingViewWidget from "../../api/news";
import CalendarWidget from "../../api/calendar";
import TradingViewScreener from "../../api/charts/scwidget";
import TradingViewHotlistsWidget from "../../api/hotlist";
import DateQuotesWidget from "../../api/data";
import TradingViewEtfHeatmap from "../../api/etf";
import StockFooter from "../links/lndex";
import RealTimeChart from "../../api/charts/realtime";
import Inside from "../footer/info";
import Footer from "../footer";
import LinksFooter from "../footer/links";
import Card from "../footer/card";

export default function Home() {
  return (
    <section>
      {/* head section */}
      <div>
        <NavBar></NavBar>
      </div>
      <section className="flex justify-center gap-6 w-full h-full py-4 ">
        <div className="flex gap-3 flex-col">
          <NewsTradingViewWidget></NewsTradingViewWidget>
          <TradingViewScreener></TradingViewScreener>
          <DateQuotesWidget></DateQuotesWidget>
        </div>
        <div className="flex flex-col gap-4 ">
          <CalendarWidget></CalendarWidget>
          <TradingViewHotlistsWidget></TradingViewHotlistsWidget>
          <TradingViewEtfHeatmap></TradingViewEtfHeatmap>
        </div>
      </section>
      <section>
        <RealTimeChart></RealTimeChart>
      </section>
      <section><Card></Card></section>
      <div>
        <StockFooter></StockFooter>
        <LinksFooter></LinksFooter>
        <Footer></Footer>
        <Inside></Inside>
      </div>
    </section>
  );
}
