import React from "react";

const LinksFooter = () => {
  const stockLinks = [
    { ticker: "AAPL", name: "Apple" },
    { ticker: "GOOGL", name: "Alphabet (Google)" },
    { ticker: "AMZN", name: "Amazon" },
    { ticker: "TSLA", name: "Tesla" },
    { ticker: "MSFT", name: "Microsoft" },
    { ticker: "FB", name: "Meta (Facebook)" },
    { ticker: "NFLX", name: "Netflix" },
    { ticker: "NVDA", name: "Nvidia" },
    { ticker: "BABA", name: "Alibaba" },
    { ticker: "INTC", name: "Intel" },
    { ticker: "AMD", name: "Advanced Micro Devices" },
    { ticker: "TSM", name: "Taiwan Semiconductor" },
    { ticker: "V", name: "Visa" },
    { ticker: "MA", name: "MasterCard" },
    { ticker: "PYPL", name: "PayPal" },
    { ticker: "DIS", name: "Walt Disney" },
    { ticker: "GS", name: "Goldman Sachs" },
    { ticker: "JPM", name: "JPMorgan Chase" },
    { ticker: "BAC", name: "Bank of America" },
    { ticker: "WFC", name: "Wells Fargo" },
    { ticker: "C", name: "Citigroup" },
    { ticker: "XOM", name: "ExxonMobil" },
    { ticker: "CVX", name: "Chevron" },
    { ticker: "COP", name: "ConocoPhillips" },
    { ticker: "PFE", name: "Pfizer" },
    { ticker: "MRK", name: "Merck & Co." },
    { ticker: "JNJ", name: "Johnson & Johnson" },
    { ticker: "BA", name: "Boeing" },
    { ticker: "KO", name: "Coca-Cola" },
    { ticker: "PEP", name: "PepsiCo" },
    { ticker: "MCD", name: "McDonald's" },
    { ticker: "NKE", name: "Nike" },
    { ticker: "SBUX", name: "Starbucks" },
    { ticker: "WMT", name: "Walmart" },
    { ticker: "T", name: "AT&T" },
    { ticker: "VZ", name: "Verizon" },
    { ticker: "DISCK", name: "Discovery" },
    { ticker: "LUV", name: "Southwest Airlines" },
    { ticker: "UAL", name: "United Airlines" },
    { ticker: "GM", name: "General Motors" },
    { ticker: "F", name: "Ford" },
  ];

  return (
    <footer className=" text-navblue py-16">
      <div className=" mx-auto px-4 sm:px-8">
        <h3 className="text-left text-xl font-semibold mb-8">Tradeable Stocks Quick Links</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {stockLinks.map((stock) => (
            <a
              key={stock.ticker}
              href={`https://www.nasdaq.com/market-activity/stocks/${stock.ticker}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navblue hover:text-gray-400 text-left transition-colors"
              aria-label={`Go to ${stock.name} stock page`}
            >
              {stock.name} ({stock.ticker})
            </a>
          ))}
        </div>
      </div>
      <div className="mt-16 text-center text-sm text-gray-400">
      </div>
    </footer>
  );
};

export default LinksFooter;
