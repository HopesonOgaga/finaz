import React from 'react';

const StockFooter = () => {
  // List of stock sites (70 sites)
  const stockSites = [
    { name: 'Yahoo Finance', url: 'https://finance.yahoo.com' },
    { name: 'Google Finance', url: 'https://www.google.com/finance' },
    { name: 'TradingView', url: 'https://www.tradingview.com' },
    { name: 'MarketWatch', url: 'https://www.marketwatch.com' },
    { name: 'Bloomberg', url: 'https://www.bloomberg.com' },
    { name: 'CNBC', url: 'https://www.cnbc.com' },
    { name: 'Reuters', url: 'https://www.reuters.com/finance' },
    { name: 'Investing.com', url: 'https://www.investing.com' },
    { name: 'Seeking Alpha', url: 'https://www.seekingalpha.com' },
    { name: 'The Wall Street Journal', url: 'https://www.wsj.com' },
    { name: 'FT.com', url: 'https://www.ft.com' },
    { name: 'MarketBeat', url: 'https://www.marketbeat.com' },
    { name: 'Benzinga', url: 'https://www.benzinga.com' },
    { name: 'Motley Fool', url: 'https://www.fool.com' },
    { name: 'StockCharts', url: 'https://stockcharts.com' },
    { name: 'Zacks', url: 'https://www.zacks.com' },
    { name: 'Nasdaq', url: 'https://www.nasdaq.com' },
    { name: 'E*TRADE', url: 'https://www.etrade.com' },
    { name: 'Fidelity', url: 'https://www.fidelity.com' },
    { name: 'Charles Schwab', url: 'https://www.schwab.com' },
    { name: 'TD Ameritrade', url: 'https://www.tdameritrade.com' },
    { name: 'Robinhood', url: 'https://www.robinhood.com' },
    { name: 'Interactive Brokers', url: 'https://www.interactivebrokers.com' },
    { name: 'Vanguard', url: 'https://www.vanguard.com' },
    { name: 'Merrill Edge', url: 'https://www.merrilledge.com' },
    { name: 'Ally Invest', url: 'https://www.ally.com/invest' },
    { name: 'Tastyworks', url: 'https://www.tastyworks.com' },
    { name: 'WeBull', url: 'https://www.webull.com' },
    { name: 'StockTwits', url: 'https://www.stocktwits.com' },
    { name: 'Barchart', url: 'https://www.barchart.com' },
    { name: 'BigCharts', url: 'https://bigcharts.marketwatch.com' },
    { name: 'Thinkorswim', url: 'https://www.thinkorswim.com' },
    { name: 'Saxo Bank', url: 'https://www.home.saxo' },
    { name: 'TradeStation', url: 'https://www.tradestation.com' },
    { name: 'Forex Factory', url: 'https://www.forexfactory.com' },
    { name: 'Trading Economics', url: 'https://tradingeconomics.com' },
    { name: 'CoinMarketCap', url: 'https://coinmarketcap.com' },
    { name: 'CryptoCompare', url: 'https://www.crypto.com' },
    { name: 'Blockfolio', url: 'https://www.blockfolio.com' },
    { name: 'CoinGecko', url: 'https://www.coingecko.com' },
    { name: 'Investopedia', url: 'https://www.investopedia.com' },
    { name: 'TheStreet', url: 'https://www.thestreet.com' },
    { name: 'Yahoo Finance', url: 'https://finance.yahoo.com' },
    { name: 'Finviz', url: 'https://finviz.com' },
    { name: 'StockFetcher', url: 'https://www.stockfetcher.com' },
    { name: 'Stock Rover', url: 'https://www.stockrover.com' },
    { name: 'Trade Ideas', url: 'https://www.trade-ideas.com' },
    { name: 'BarChart', url: 'https://www.barchart.com' },
    { name: 'Cboe', url: 'https://www.cboe.com' },
    { name: 'Yahoo Finance', url: 'https://finance.yahoo.com' },
    { name: 'InvestorPlace', url: 'https://www.investorplace.com' },
    { name: 'Alpha Vantage', url: 'https://www.alphavantage.co' },
    { name: 'XTB', url: 'https://www.xtb.com' },
    { name: 'AIG', url: 'https://www.aig.com' },
    { name: 'Accenture', url: 'https://www.accenture.com' },
    { name: 'MetLife', url: 'https://www.metlife.com' },
    { name: 'Transamerica', url: 'https://www.transamerica.com' },
    { name: 'Prudential', url: 'https://www.prudential.com' },
    { name: 'The Hartford', url: 'https://www.thehartford.com' },
    { name: 'Aflac', url: 'https://www.aflac.com' },
    { name: 'S&P Global', url: 'https://www.spglobal.com' },
    { name: 'J.P. Morgan', url: 'https://www.jpmorgan.com' },
    { name: 'Baker Hughes', url: 'https://www.bakerhughes.com' },
    { name: 'General Electric', url: 'https://www.ge.com' },
    { name: 'Pfizer', url: 'https://www.pfizer.com' },
    { name: 'Cisco', url: 'https://www.cisco.com' },
    { name: 'Johnson & Johnson', url: 'https://www.jnj.com' },
    { name: 'Apple', url: 'https://www.apple.com' },
    { name: 'Tesla', url: 'https://www.tesla.com' },
    { name: 'Amazon', url: 'https://www.amazon.com' },
    { name: 'Microsoft', url: 'https://www.microsoft.com' },
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'Alphabet', url: 'https://www.abc.xyz' },
    { name: 'Berkshire Hathaway', url: 'https://www.berkshirehathaway.com' },
    { name: 'Visa', url: 'https://www.visa.com' },
    { name: 'Coca-Cola', url: 'https://www.coca-cola.com' },
    { name: 'McDonald\'s', url: 'https://www.mcdonalds.com' },
    { name: 'Nike', url: 'https://www.nike.com' },
    { name: 'Intel', url: 'https://www.intel.com' },
    { name: 'Walmart', url: 'https://www.walmart.com' },
    { name: 'Procter & Gamble', url: 'https://www.pg.com' },
    { name: 'ExxonMobil', url: 'https://www.exxonmobil.com' },
    { name: 'Chevron', url: 'https://www.chevron.com' },
    { name: 'Pfizer', url: 'https://www.pfizer.com' },
  ];

  return (
    <footer className="bg-white text-navblue py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-left mb-6">Explore Stock Sites</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {stockSites.map((site, index) => (
            <a
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              {site.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default StockFooter;
