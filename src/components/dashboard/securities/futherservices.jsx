const ServicesInfo = [
  {
    Image:"/img/grid/newsletter.avif",
    title: "newsletter",
    information:
      "Register here for free for the 'Day on the Stock Exchange', the 'Trading Depot' and the most popular newsletters for active investors!",
    button: "select newletters",
  },
  {
    Image:"/img/grid/tradingdepot.avif",
    title: "Trading Depot",
    information:
      "Follow every trade in real time and free of charge in the 100,000 Euro model portfolio of trading professional Ingmar Königshofen!",
    button: "to the trading ddepot",
  },
  {
    Image:"/img/grid/tradingdesk.webp",
    title: "Investment portfolio",
    information:
      "The best ETFs and funds for your portfolio. Get exclusive insights into an intelligent strategy from real investment experts.",
    button: "to the investment portfolio",
  },
  {
    Image:"/img/grid/anlagedepot.avif",
    title: "Trading desk",
    information:
      "Professional chart analysis, chart signals, real-time scans, and much more. Launch the free app directly in your browser!",
    button: "to the trading desk",
  },
  {
    Image:"/img/grid/discussion.avif",
    title: "discussion forum",
    information:
      "Discuss exciting stocks, new trends, and much more with thousands of other users!",
    button: "to the forumm",
  },
  {
    Image:"/img/grid/apps.avif",
    title: "Apps",
    information:
      "Stay up-to-date on the latest market developments on the go with the popular stock market apps from finanzen.net!",
    button: "to the apps",
  },

  {
    Image:"/img/grid/podcast.avif",
    title: "podcast",
    information:
      " Which stocks are particularly exciting right now? In the finanzen.net podcast Hot Bets, we take a closer look at the hottest investments for you every day.",
    button: "listen now",
  },
  {
    Image:"/img/grid/news.avif",
    title: "The investor letter",
    information:
      "Register here for free for the 'Day on the Stock Exchange', the 'Trading Depot' and the most popular newsletters for active investors!",
    button: "use voucher",
  },
  {
    Image:"/img/grid/web.avif",
    title: "Webinars",
    information:
      "Want to learn from experienced stock market professionals? This is possible with finanzen.net's free online seminars. Experts regularly answer your questions about the financial market.",
    button: "to the current webinars",
  },
  {
    Image:"/img/grid/social-media.webp",
    title: "Social media channels",
    information:
      "Are you active on social media and not following our channels yet? Then check out Instagram, YouTube, and other social media channels now to make sure you don't miss any more financial news.",
    button: "to the social media channels",
  },
];
export default function ServicesOption() {
    return (
      <section className="p-6">
        <div className="mb-6">
          <p className="text-xl font-semibold">Further services and offers</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ServicesInfo.map((services, index) => (
            <div
              key={index}
              className="border border-solid shadow-md rounded-md flex flex-col gap-6 p-4 bg-white"
            >
              <div >
                
                <p className="text-lg font-semibold capitalize">{services.title}</p>
              </div>
              <div className="w-full h-full flex justify-between gap-8">
              <div className="w-full h-full"><img src={services.Image} alt="" className="w-64 h-24"></img></div>
                <p className="text-sm">{services.information}</p>
              </div>
              <div>
                <button className="bg-navblue w-full h-10 rounded-md shadow-sm text-white font-semibold text-sm capitalize hover:bg-blue-700 active:bg-blue-400">
                  {services.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
