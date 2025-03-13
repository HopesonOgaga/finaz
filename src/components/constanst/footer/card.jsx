const card = [
  {
    title: "mobile app",
    subheading: "bursen app",
    image: "/img/premium-phone.avif",
    information:
      "Stay informed about the latest developments on the stock markets, even when you are on the go",
  },
  {
    title: "newsletter",
    subheading: "bursen newsletter",
    image: "/img/premium-newsletter.avif",
    information:
      "Right on the pulse of the markets: Get the top stories from our editorial team's newsroom directly in your email inbox!",
  },
  {
    title: "chartanalyse",
    subheading: "trading desk",
    image: "/img/premium-trading-desk.avif",
    information:
      "Stock and market analysis at expert level, automatic detection of chart signals, scans",
  },
];

export default function Card() {
  return (
    <section className="mt-10">
      <div>
        <div className="mb-8  border-2 border-solid border-gray-300 h-20 flex flex-col justify-center items-center w-full rounded-sm shadow-md  rounded-b-lg border-t-navblue border-t-4 border-t-rounded-md">
          <h3 className="text-2xl font-bold capitalize text-navblue w-full pl-8 ">
            Apps, newsletters and chart analysis
          </h3>
        </div>

        <div className=" flex gap-6  justify-around ">
          {card.map((cards, index) => (
            <div key={index} className="border-2 p-8 w-3/4  ">
              <h4 className="text-navblue font-semibold text-2xl capitalize">{cards.title}</h4>
              <img src={cards.image} alt={cards.title} className="" />
              <h5 className="text-navblue capitalize text-lg font-medium mb-2 ">
                {cards.subheading}
              </h5>
              <p>{cards.information}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
