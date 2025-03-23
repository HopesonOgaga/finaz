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
import SymboliewWidget from "../../api/charts/symbil";
import TradingViewTickerTape from "../../api/charts/screener";
import NewsComponent from "../../api/news/inex";
import ElonComponent from "../../api/news/inex2";
import StockViewWidget from "../../api/stockheat";
import TeslaNews from "../../api/news/tels";
import BusinessNews from "../../api/news/business";
import AppleNews from "../../api/news/aplle";

export default function Home() {
  return (
    <section>
      {/* head section */}
      <div>
        <NavBar></NavBar>
        <TradingViewTickerTape></TradingViewTickerTape>
      </div>
      <section className="flex md:justify-center flex-col md:flex-row flex-wrap   gap-10   max-w-full h-full py-4 ">
        <div className="flex gap-4 flex-col">
          <NewsTradingViewWidget></NewsTradingViewWidget>
          <TradingViewScreener></TradingViewScreener>
          <DateQuotesWidget></DateQuotesWidget>
        </div>
       
        <div className="flex flex-col gap-4 h-screen ">
          <CalendarWidget></CalendarWidget>
          <TradingViewHotlistsWidget></TradingViewHotlistsWidget>
          <TradingViewEtfHeatmap ></TradingViewEtfHeatmap>
        </div>
      </section>
      <section>
        {" "}
        <section className="w-full h-full">
          <NewsComponent></NewsComponent>
          <BusinessNews></BusinessNews>
        </section>
      
      </section>
      {/* <section className="w-full h-screen">
        <RealTimeChart></RealTimeChart>
      </section> */}
      <section className="w-full h-screen">
        <SymboliewWidget></SymboliewWidget>
      </section>

      <section>
        <Card></Card>
      </section>
      <ElonComponent></ElonComponent>
      <TeslaNews></TeslaNews>
      <div>
        <StockFooter></StockFooter>
        <LinksFooter></LinksFooter>
        <Footer></Footer>
        <Inside></Inside>
      </div>
    </section>
  );
}
